# Second Opinion Review — Blind Website Comparison

You are reviewing a research report that compares 9 seed-stage startup websites.
Your job: fact-check every description against the actual screenshots, find errors, and give second opinions on scores.

## Background

Desktop Commander ran a blind website comparison to answer:
1. Is desktopcommander.app "scrappy" compared to other seed startups?
2. Does website polish correlate with seed funding?
3. What can we learn from other seed startup websites?

The research was done by AI with manual corrections. There were **multiple rounds of errors** already caught and fixed:
- Kilo was described as "white background" — actually dark
- Aivar was described as "broken with massive black void" — actually a dark page with gradient decorations
- Sycamore was described as "almost nothing to look at" — actually has a product interface visible
- AMI Labs was described as "barely a website" — actually has partner logos and content sections
- AgentMail was missing trust badges/YC badge in description

**Your job is to catch anything that's STILL wrong.** The pattern of errors was: descriptions written from assumptions or content analysis rather than from actually looking at the image.

---

## Project Structure

All files at: `/Users/eduardsruzga/work/blind-website-comparison/`

```
output/index.html              ← THE REPORT (this is what gets published)
screenshots/                   ← Puppeteer-captured screenshots at 1440px
  {site}/hero.png              ← Above-the-fold capture
  {site}/full-page.png         ← Full scroll capture
critiques/site-{N}.json        ← Raw AI blind evaluation scores
comparisons/dc-vs-{site}.json  ← Raw head-to-head comparison data
```

### Site-to-number mapping (for critique JSON files)

| # | Folder name | Company | URL | Funding |
|---|---|---|---|---|
| 1 | desktopcommander | Desktop Commander | desktopcommander.app | $3M raising |
| 2 | aivar | Aivar | aivar.tech | $4.6M seed |
| 3 | kilo | Kilo Code | kilo.ai | $8M seed |
| 4 | sycamore | Sycamore | sycamore.so | $65M seed |
| 5 | applied-atomics | Applied Atomics | applied-atomics.com | $8.3M seed |
| 6 | agentmail | AgentMail | agentmail.to | $6M seed |
| 7 | amilabs | AMI Labs | amilabs.xyz | $1.03B seed |
| 8 | rodeo | Rodeo | rodeorodeorodeo.com | $8.5M seed |
| 9 | rowspace | Rowspace | rowspace.ai | $50M seed+A |

---

## Step 1: Review Each Screenshot vs Its Description

This is the most important step. For EACH of the 9 sites:

1. **Look at the hero screenshot:**
   ```
   read_file /Users/eduardsruzga/work/blind-website-comparison/screenshots/{folder}/hero.png
   ```

2. **Look at the full-page screenshot:**
   ```
   read_file /Users/eduardsruzga/work/blind-website-comparison/screenshots/{folder}/full-page.png
   ```

3. **Read the site's card in the report** (search for the company name):
   - Find the `<div class="site-card">` block for this site in `output/index.html`
   - Focus on the **"What you see:"** paragraph — this is the description to fact-check

4. **For each site, answer these questions:**
   - Does the "What you see:" description **accurately match** what's in the screenshot?
   - Are there visual elements in the screenshot that the description **misses**?
   - Are there things the description claims that you **can't see** in the screenshot?
   - Does the background color/theme match what's described?
   - Are trust signals (logos, badges, metrics) described correctly?
   - Is the product imagery (mockups, code blocks, illustrations) described accurately?

5. **Also check the Visual Design Review table** (the "What you see" column in the aesthetics comparison table) — same questions.

6. **Also check the Head-to-Head table** descriptions — do the "why they score higher" and "DC's advantage" columns say anything that contradicts what you see in the screenshots?

### What to look for (common error patterns from previous rounds)

- **Wrong background color** (Kilo was described as white, was actually dark)
- **"Looks broken"** when it's actually a dark design with subtle elements
- **"Nothing there"** when there are actually logos, sections, or imagery below the hero text
- **Missing trust signals** (badges, YC logos, press mentions visible but not described)
- **Missing visual elements** (gradient art, particle effects, illustrations not mentioned)
- **Product imagery** — does the site actually show a product UI, or was that assumed?
- **Puppeteer rendering artifacts** — headless Chrome may miss animations, videos, lazy-loaded content, or dark/light mode. If a screenshot looks weird, check the live site URL too.

---

## Step 2: Verify the Scores

### AI Scores
For each site, verify the scores in `output/index.html` match the source JSON:
```
cat /Users/eduardsruzga/work/blind-website-comparison/critiques/site-{N}.json
```

The AI score in the rankings table should be the average of: first_impression, visual_hierarchy, trust_signals, design_polish, cta_clarity, investor_signal.

### Visual Design Scores
These are subjective (not from the AI). After looking at each screenshot, give your own visual design score (1-10) and note where you disagree with the report's score.

### Combined Scores
Combined = (AI score + Visual Design score) / 2. Verify the math for each site.

### Rankings
Are the sites ranked correctly by combined score? Check the ordering.

---

## Step 3: Verify the Head-to-Head Comparisons

The report says DC's record is **4W — 1L — 3 Coin Flips:**

| Opponent | Result |
|---|---|
| Aivar | DC WINS |
| Rodeo | DC WINS |
| AMI Labs | DC WINS |
| Rowspace | DC WINS |
| Kilo | COIN FLIP |
| AgentMail | COIN FLIP |
| Sycamore | COIN FLIP |
| Applied Atomics | DC LOSES |

For each matchup:
- Look at both sites' hero screenshots side by side
- Read the H2H row in `output/index.html`
- Do you agree with the result? Would you change any W/L/CF?
- Are the "why they win" and "DC advantage" descriptions accurate based on what you see?

---

## Step 4: Verify the Conclusions

The report makes these claims. Check each one:

1. **"DC is mid-pack, not scrappy"** — Does 6.4 combined feel right for what you see in the DC screenshot?
2. **"Zero correlation between website polish and funding"** — Look at the scores and funding amounts. Do you agree there's no pattern?
3. **"DC has the best product visual"** — Look at all 9 hero screenshots. Is DC's product mockup really the strongest product-showing visual element?

4. **"Information architecture matters more than visual polish"** — Do you agree based on the data?
5. **"Trust signals belong above the fold"** — Was this actually the most common critique across all sites?
6. **"AI evaluation is unreliable for visual design"** — Do you agree the AI scores and visual scores diverge in the way described?
7. **"Don't hire a designer before closing the seed round"** — Is this the right recommendation given the data?

---

## Step 5: How to Make Corrections

If you find errors, here's exactly where and how to fix them:

### Description errors (most common)
The "What you see:" paragraph for each site appears in TWO places in `output/index.html`:

1. **The site card** (detailed critique section):
   Search for: `<h3>SiteName <span` → find the `<p>` with `<strong style="color:var(--text);">What you see:</strong>`

2. **The visual design comparison table** (the "What you see" column):
   Search for: `<tr><td>N</td><td>SiteName</td><td><span class="score-num">` → the last `<td>` in that row

Both descriptions should be consistent.

### Score corrections
- **Visual design score** appears in 3 places per site:
  1. Rankings table row: `<td>N</td>` (the Visual column)
  2. Site card scores grid: `<div class="label">Visual Design ✎</div><div class="value"...>X</div>`
  3. Visual design comparison table: `<span class="score-num">X</span>`

- **Combined score** appears in 2 places:
  1. Rankings table: `<span class="score-num">X.X</span>`
  2. Site card: `<div class="label">Combined</div><div class="value"...>X.X</div>`

- **Score bar width** in rankings table: `style="width:Xpx"` — multiply combined score by 20

### H2H result changes
- The H2H table row: search for `<td><a href="URL"` → change `<span class="tag tag-win">DC WINS</span>` to `tag-loss`, `tag-draw`, etc.
- Also update the summary line: `<p><strong>Record: 4 wins, 1 loss, 3 coin flips.</strong>`
- And the methodology box about H2H vs rankings disagreement

### Conclusion changes
- The `<div class="conclusion-item">` blocks at the bottom
- The `<div class="no-correlation">` callout near the rankings table

### To make edits
Use `edit_block` with `old_string` / `new_string` on:
```
/Users/eduardsruzga/work/blind-website-comparison/output/index.html
```

---

## Step 6: Output Format

After reviewing everything, produce a structured report:

```
## Screenshot Accuracy Audit

### Site: {name}
- Screenshot matches description: YES/NO
- Errors found: {list specific mismatches}
- Suggested description fix: {new text}
- Visual design score: Current {X}, My score {Y}, Reason: {why}

## Score Verification
- Any math errors found: {list}
- Rankings order correct: YES/NO

## H2H Verification
- Any result I'd change: {list with reasoning}

## Conclusion Verification
- Claims I agree with: {list}
- Claims I disagree with: {list with reasoning}

## Changes Made
- {list of edit_block calls made to index.html}
```

---

## Important Notes

- **Be skeptical of everything.** The previous reviewer made errors by describing screenshots from memory rather than actually looking at them. Don't repeat this mistake. Look at each image carefully before writing anything about it.

- **Puppeteer captures may not match live sites.** Headless Chrome can miss: videos, CSS animations/transitions, lazy-loaded content below fold, dark/light mode preferences, cookie banners that push content down, WebGL or canvas elements. If a screenshot looks suspicious, also visit the live URL to compare.

- **DC is the sponsor of this report.** Check for bias — are DC's descriptions more generous than competitors'? Are competitors' weaknesses exaggerated? Is the H2H record artificially inflated?

- **The "Visual Design" scores are subjective.** They were assigned by one reviewer looking at screenshots. You are the second opinion. Your scores may differ — that's the point.

- **Don't just confirm.** The whole point of this review is to find things the first pass got wrong. If everything looks perfect, you probably aren't looking hard enough.
