#!/bin/bash
# Screenshot automation helper
# Run this to open all URLs in Chrome tabs for easy screenshotting

URLS=(
  "https://desktopcommander.app/"
  "https://aivar.tech/"
  "https://kilo.ai/"
  "https://sycamore.so/"
  "https://www.applied-atomics.com/"
  "https://www.agentmail.to/"
  "https://amilabs.xyz/"
  "https://rodeorodeorodeo.com/"
  "https://www.rowspace.ai/"
)

echo "Opening all URLs in Chrome..."
for url in "${URLS[@]}"; do
  open -a "Google Chrome" "$url"
  sleep 1
done

echo ""
echo "All tabs open. Now use GoFullPage extension to screenshot each."
echo "Save each screenshot to the matching folder in:"
echo "  /Users/eduardsruzga/work/blind-website-comparison/screenshots/"
echo ""
echo "Folder mapping:"
echo "  desktopcommander.app  → screenshots/desktopcommander/full-page.png"
echo "  aivar.tech            → screenshots/aivar/full-page.png"
echo "  kilo.ai               → screenshots/kilo/full-page.png"
echo "  sycamore.so           → screenshots/sycamore/full-page.png"
echo "  applied-atomics.com   → screenshots/applied-atomics/full-page.png"
echo "  agentmail.to          → screenshots/agentmail/full-page.png"
echo "  amilabs.xyz           → screenshots/amilabs/full-page.png"
echo "  rodeorodeorodeo.com   → screenshots/rodeo/full-page.png"
echo "  rowspace.ai           → screenshots/rowspace/full-page.png"
