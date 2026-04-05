# Parallel Agent Prompts for Blind Website Comparison

## TOTAL WORK: 17 separate agent chats (can run all in parallel)

- Phase 1: 9 individual blind critiques (one per site)
- Phase 2: 8 head-to-head comparisons (DC vs each other site)
- Phase 3: 1 compilation task (after all above complete)

---

## PHASE 1: INDIVIDUAL BLIND CRITIQUES (9 agents in parallel)

Each agent gets ONE screenshot. Do NOT reveal company name or URL.

### Agent assignments:

| Agent | Screenshot file | Save result to |
|-------|----------------|----------------|
| 1 | screenshots/desktopcommander/hero.png | critiques/site-1.json |
| 2 | screenshots/aivar/hero.png | critiques/site-2.json |
| 3 | screenshots/kilo/hero.png | critiques/site-3.json |
| 4 | screenshots/sycamore/hero.png | critiques/site-4.json |
| 5 | screenshots/applied-atomics/hero.png | critiques/site-5.json |
| 6 | screenshots/agentmail/hero.png | critiques/site-6.json |
| 7 | screenshots/amilabs/hero.png | critiques/site-7.json |
| 8 | screenshots/rodeo/hero.png | critiques/site-8.json |
| 9 | screenshots/rowspace/hero.png | critiques/site-9.json |

All screenshots are at:
`/Users/eduardsruzga/work/blind-website-comparison/screenshots/`

### PROMPT (identical for all 9 agents — attach the hero.png):

---

> Attach: the hero.png screenshot for this agent's assigned site
> (do NOT include URL or company name anywhere in the chat)

```
You are a design-savvy seed-stage VC partner doing due diligence. You've just
landed on this startup's website for the first time. You have 30 seconds to
form an impression.

I'm attaching a screenshot of a startup website. I will NOT tell you which
company this is. This is a blind evaluation.

Analyze the screenshot and respond in EXACTLY this JSON format
(no markdown fences, no explanation outside the JSON):

{
  "scores": {
    "first_impression": <1-10>,
    "visual_hierarchy": <1-10>,
    "trust_signals": <1-10>,
    "design_polish": <1-10>,
    "cta_clarity": <1-10>,
    "investor_signal": <1-10>
  },
  "average_score": <calculated average to 1 decimal>,
  "critique": {
    "works_well": "<2-3 sentences>",
    "looks_weak": "<2-3 sentences>",
    "single_biggest_improvement": "<1 sentence>"
  },
  "meeting_score": <1-10 would you take a meeting based on website alone?>,
  "one_word_vibe": "<e.g. Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal>"
}

Scale:
- 1-3: Side project or abandoned
- 4-5: Functional but generic, typical early startup
- 6-7: Solid, professional seed-stage company
- 8-9: Impressive, looks like a funded growth-stage company
- 10: Best-in-class (Linear, Vercel, Stripe tier)

Respond ONLY with the JSON. No preamble, no markdown fences.
```

---

## PHASE 2: HEAD-TO-HEAD COMPARISONS (8 agents in parallel)

Each agent gets TWO screenshots: DC hero + one competitor hero.
Label them "Website A" and "Website B".

**IMPORTANT**: Randomize which is A and which is B to avoid position bias.
Use the coin flip column below.

| Agent | Website A (left) | Website B (right) | Save result to |
|-------|-----------------|-------------------|----------------|
| 10 | desktopcommander | aivar | comparisons/dc-vs-aivar.json |
| 11 | kilo | desktopcommander | comparisons/dc-vs-kilo.json |
| 12 | desktopcommander | sycamore | comparisons/dc-vs-sycamore.json |
| 13 | applied-atomics | desktopcommander | comparisons/dc-vs-applied-atomics.json |
| 14 | desktopcommander | agentmail | comparisons/dc-vs-agentmail.json |
| 15 | amilabs | desktopcommander | comparisons/dc-vs-amilabs.json |
| 16 | desktopcommander | rodeo | comparisons/dc-vs-rodeo.json |
| 17 | rowspace | desktopcommander | comparisons/dc-vs-rowspace.json |

Note: DC position is randomized (sometimes A, sometimes B) to prevent
position bias. The result file records which was which.

### PROMPT (identical for all 8 agents — attach both hero.png files):

---

> Attach: two hero.png screenshots as instructed in the table above
> (do NOT include URLs or company names anywhere in the chat)

```
You are a seed-stage VC partner. I'm showing you two startup website
screenshots. You don't know which companies these are. The first image
is "Website A", the second is "Website B".

Compare them and respond in EXACTLY this JSON format
(no markdown fences, no explanation outside the JSON):

{
  "first_impression_winner": "<A or B>",
  "first_impression_why": "<1 sentence>",
  "value_prop_clarity_winner": "<A or B>",
  "trust_signals_winner": "<A or B>",
  "design_polish_winner": "<A or B>",
  "overall_meeting_winner": "<A or B>",
  "confidence": "<Blowout | Clear winner | Slight edge | Coin flip>",
  "reasoning": "<2-3 sentences explaining overall winner choice>"
}

Respond ONLY with the JSON. No preamble, no markdown fences.
```

---

## PHASE 3: COMPILATION (1 task, after Phase 1 + 2 complete)

Once all 17 result files exist, come back to this chat and say:
"All critiques and comparisons are done."

I will then:
1. Decode the blind mapping (site-1 = desktopcommander, etc.)
2. Aggregate scores into rankings
3. Calculate DC win/loss record in head-to-heads
4. Build the final comparison website

---

## SECRET MAPPING (do not share with agents)

| Blind ID | Real site | Funding |
|----------|-----------|---------|
| site-1 | desktopcommander.app | $3M (raising) |
| site-2 | aivar.tech | $4.6M seed |
| site-3 | kilo.ai | $8M seed |
| site-4 | sycamore.so | $65M seed |
| site-5 | applied-atomics.com | $8.3M seed |
| site-6 | agentmail.to | $6M seed |
| site-7 | amilabs.xyz | $1.03B seed |
| site-8 | rodeorodeorodeo.com | $8.5M seed |
| site-9 | rowspace.ai | $50M seed+A |

### Head-to-head DC position decoder:
| File | DC was | Opponent was |
|------|--------|-------------|
| dc-vs-aivar.json | A | B |
| dc-vs-kilo.json | B | A |
| dc-vs-sycamore.json | A | B |
| dc-vs-applied-atomics.json | B | A |
| dc-vs-agentmail.json | A | B |
| dc-vs-amilabs.json | B | A |
| dc-vs-rodeo.json | A | B |
| dc-vs-rowspace.json | B | A |
