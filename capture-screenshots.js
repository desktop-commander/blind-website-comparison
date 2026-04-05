// Full-page screenshot capture using Puppeteer
// Install: npm install puppeteer
const puppeteer = require('puppeteer');
const path = require('path');

const BASE = '/Users/eduardsruzga/work/blind-website-comparison/screenshots';

const sites = [
  { id: 'desktopcommander', url: 'https://desktopcommander.app/' },
  { id: 'aivar', url: 'https://aivar.tech/' },
  { id: 'kilo', url: 'https://kilo.ai/' },
  { id: 'sycamore', url: 'https://sycamore.so/' },
  { id: 'applied-atomics', url: 'https://www.applied-atomics.com/' },
  { id: 'agentmail', url: 'https://www.agentmail.to/' },
  { id: 'amilabs', url: 'https://amilabs.xyz/' },
  { id: 'rodeo', url: 'https://rodeorodeorodeo.com/' },
  { id: 'rowspace', url: 'https://www.rowspace.ai/' },
];

(async () => {
  const browser = await puppeteer.launch({ 
    headless: true,
    defaultViewport: { width: 1440, height: 900 }
  });

  for (const site of sites) {
    console.log(`📸 Capturing: ${site.id}`);
    const page = await browser.newPage();
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Wait extra for animations/lazy loading
      await new Promise(r => setTimeout(r, 3000));
      
      // Hero screenshot (above the fold)
      await page.screenshot({ 
        path: path.join(BASE, site.id, 'hero.png'),
        type: 'png'
      });
      console.log(`  ✅ Hero captured`);
      
      // Full page screenshot
      await page.screenshot({ 
        path: path.join(BASE, site.id, 'full-page.png'),
        fullPage: true,
        type: 'png'
      });
      console.log(`  ✅ Full page captured`);
      
    } catch (err) {
      console.error(`  ❌ Failed: ${err.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log('\n🎉 All screenshots captured!');
})();
