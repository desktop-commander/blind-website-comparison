# Blind Website Comparison Research

## Purpose
Settle the internal debate: "Is Desktop Commander's website scrappy compared to other seed-stage startups?"
Use blind AI-powered visual comparison to remove subjective bias.

## Context
- Desktop Commander (desktopcommander.app) is raising $3M seed
- Team member Dmitry argues the website looks "scrappy" and hurts credibility
- CEO (Eduards) argues it's fine — Kilo raised $8M with a worse site
- This research will provide DATA to resolve the debate

---

## WEBSITES TO COMPARE (all recently seed-funded)

| # | ID | URL | Company | Funding | Investors | Sector |
|---|-----|-----|---------|---------|-----------|--------|
| 1 | desktopcommander | desktopcommander.app | Desktop Commander | Raising $3M seed | TBD | AI/Dev Tools (MCP) |
| 2 | aivar | aivar.tech | Aivar Innovations | $4.6M seed (Jan 2026) | Sorin Investments, Bessemer | AI Services |
| 3 | kilo | kilo.ai | Kilo Code | $8M seed (Dec 2025) | Cota Capital, General Catalyst | AI Coding Agent |
| 4 | sycamore | sycamore.so | Sycamore Labs | $65M seed (Mar 2026) | Coatue, Lightspeed | Enterprise AI Agents |
| 5 | applied-atomics | applied-atomics.com | Applied Atomics | $8.3M seed (Mar 2026) | Transition VC, Alpaca VC | Nuclear Energy |
| 6 | agentmail | agentmail.to | AgentMail | $6M seed (Mar 2026) | General Catalyst, YC | AI Agent Infra |
| 7 | amilabs | amilabs.xyz | AMI Labs | $1.03B seed (Mar 2026) | Cathay, Bezos, NVIDIA | World Models / AI |
| 8 | rodeo | rodeorodeorodeo.com | Rodeo | $8.5M seed (Mar 2026) | Various | Social Platform |
| 9 | rowspace | rowspace.ai | Rowspace | $50M seed+A (Feb 2026) | Sequoia, Emergence | AI for Finance |

---

## RESEARCH STATE

### Phase 1: Screenshot Collection [NOT STARTED]

**Status**: Need manual screenshots using GoFullPage Chrome extension
**Instructions**:
1. Install GoFullPage Chrome extension (or use Cmd+Shift+P > "Capture full page" in DevTools)
2. Visit each URL and capture full-page screenshot at 1440px width
3. Save as PNG to the corresponding folder:
   - `/screenshots/desktopcommander/full-page.png`
   - `/screenshots/aivar/full-page.png`
   - `/screenshots/kilo/full-page.png`
   - `/screenshots/sycamore/full-page.png`
   - `/screenshots/applied-atomics/full-page.png`
   - `/screenshots/agentmail/full-page.png`
   - `/screenshots/amilabs/full-page.png`
   - `/screenshots/rodeo/full-page.png`
   - `/screenshots/rowspace/full-page.png`

**Also capture**: Above-the-fold only (hero section) as `hero.png` in each folder

### Phase 2: Individual Blind Critiques [NOT STARTED]
**Method**: Feed each screenshot to Claude/GPT-4o WITHOUT company name
**Prompt for each** (saved below as BLIND_CRITIQUE_PROMPT.md):
- Score 1-10 on 6 dimensions
- Written critique
- Overall "investor meeting" score

### Phase 3: Head-to-Head Comparisons [NOT STARTED]
**Method**: Show TWO screenshots side by side, labeled "Website A" vs "Website B"
**Total comparisons**: 36 pairs (9 choose 2)

### Phase 4: Final Rankings & Report Website [NOT STARTED]
**Deliverable**: Static HTML site showing all results

---

## COMPARISON MATRIX (36 pairs)

| Pair | Website A | Website B | Status |
|------|-----------|-----------|--------|
| 1 | desktopcommander | aivar | ⬜ |
| 2 | desktopcommander | kilo | ⬜ |
| 3 | desktopcommander | sycamore | ⬜ |
| 4 | desktopcommander | applied-atomics | ⬜ |
| 5 | desktopcommander | agentmail | ⬜ |
| 6 | desktopcommander | amilabs | ⬜ |
| 7 | desktopcommander | rodeo | ⬜ |
| 8 | desktopcommander | rowspace | ⬜ |
| 9 | aivar | kilo | ⬜ |
| 10 | aivar | sycamore | ⬜ |
| 11 | aivar | applied-atomics | ⬜ |
| 12 | aivar | agentmail | ⬜ |
| 13 | aivar | amilabs | ⬜ |
| 14 | aivar | rodeo | ⬜ |
| 15 | aivar | rowspace | ⬜ |
| 16 | kilo | sycamore | ⬜ |
| 17 | kilo | applied-atomics | ⬜ |
| 18 | kilo | agentmail | ⬜ |
| 19 | kilo | amilabs | ⬜ |
| 20 | kilo | rodeo | ⬜ |
| 21 | kilo | rowspace | ⬜ |
| 22 | sycamore | applied-atomics | ⬜ |
| 23 | sycamore | agentmail | ⬜ |
| 24 | sycamore | amilabs | ⬜ |
| 25 | sycamore | rodeo | ⬜ |
| 26 | sycamore | rowspace | ⬜ |
| 27 | applied-atomics | agentmail | ⬜ |
| 28 | applied-atomics | amilabs | ⬜ |
| 29 | applied-atomics | rodeo | ⬜ |
| 30 | applied-atomics | rowspace | ⬜ |
| 31 | agentmail | amilabs | ⬜ |
| 32 | agentmail | rodeo | ⬜ |
| 33 | agentmail | rowspace | ⬜ |
| 34 | amilabs | rodeo | ⬜ |
| 35 | amilabs | rowspace | ⬜ |
| 36 | rodeo | rowspace | ⬜ |

---

## KEY QUESTION TO ANSWER

> "On a blind visual comparison, does desktopcommander.app rank in the bottom 
> half of seed-funded startup websites? Or is it competitive?"

If DC scores within 1-2 points of the median, the website is NOT the problem.
If DC scores 3+ points below median, there's a real signal to act on.

---

## FUNDING CONTEXT (for final report)

The range of seed funding in this comparison set is extraordinary:
- Smallest: Aivar at $4.6M
- DC target: $3M
- Largest: AMI Labs at $1.03B (!!!)

This is intentionally diverse to test the thesis: 
"Does website polish correlate with funding size at seed stage?"
