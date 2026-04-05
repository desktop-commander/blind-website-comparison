const puppeteer = require('puppeteer');
const path = require('path');

const BASE = '/Users/eduardsruzga/work/blind-website-comparison/screenshots';

(async () => {
  // Launch with actual browser (not headless) but still automated
  const browser = await puppeteer.launch({ 
    headless: 'shell',
    defaultViewport: { width: 1440, height: 900 },
    args: ['--disable-web-security']
  });

  const page = await browser.newPage();
  
  // Set a realistic user agent so JS renders properly
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  console.log('📸 Recapturing Desktop Commander...');
  await page.goto('https://desktopcommander.app/', { 
    waitUntil: 'networkidle0', 
    timeout: 45000 
  });
  
  // Wait extra for animations, videos, lazy content
  await new Promise(r => setTimeout(r, 8000));
  
  // Scroll down slowly to trigger lazy loading, then back up
  await page.evaluate(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    for (let i = 0; i < document.body.scrollHeight; i += 300) {
      window.scrollTo(0, i);
      await delay(100);
    }
    await delay(1000);
    window.scrollTo(0, 0);
    await delay(500);
  });

  // Hero screenshot
  await page.screenshot({ 
    path: path.join(BASE, 'desktopcommander', 'hero.png'),
    type: 'png'
  });
  console.log('  ✅ Hero captured');

  // Full page  
  await page.screenshot({ 
    path: path.join(BASE, 'desktopcommander', 'full-page.png'),
    fullPage: true,
    type: 'png'
  });
  console.log('  ✅ Full page captured');

  await page.close();
  await browser.close();
  console.log('🎉 Done!');
})();
