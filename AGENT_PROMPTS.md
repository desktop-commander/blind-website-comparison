# Agent Prompts — Blind Website Comparison

## How to use
- Open 17 separate Claude chats (all with Desktop Commander access)
- Paste one prompt per chat
- Each agent reads screenshots from disk, does analysis, saves results
- All 17 can run simultaneously
- When all done, come back to original chat for Phase 3 compilation

---

## PHASE 1: INDIVIDUAL BLIND CRITIQUES (9 agents)

### AGENT 1 (critique site-1)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-1.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

### AGENT 2 (critique site-2)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/aivar/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-2.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

### AGENT 3 (critique site-3)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/kilo/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-3.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

### AGENT 4 (critique site-4)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/sycamore/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-4.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

### AGENT 5 (critique site-5)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/applied-atomics/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-5.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

### AGENT 6 (critique site-6)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/agentmail/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-6.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

### AGENT 7 (critique site-7)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/amilabs/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-7.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

### AGENT 8 (critique site-8)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/rodeo/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-8.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

### AGENT 9 (critique site-9)

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/rowspace/hero.png

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-9.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

---

## PHASE 2: HEAD-TO-HEAD COMPARISONS (8 agents)

DC position is randomized (sometimes A, sometimes B) to prevent position bias.

### AGENT 10 (compare desktopcommander vs aivar)

```
You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.

Step 1: Read BOTH screenshot images at these paths:
Website A: /Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png
Website B: /Users/eduardsruzga/work/blind-website-comparison/screenshots/aivar/hero.png

Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.

Step 3: For each dimension, pick the winner (A or B):

- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.
- value_prop_clarity_winner: Which communicates its value proposition more clearly?
- trust_signals_winner: Which has better social proof and trust signals?
- design_polish_winner: Which has more polished visual design?
- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?
- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)
- reasoning: 2-3 sentences explaining your overall winner choice

Step 4: Save your result as JSON to:
/Users/eduardsruzga/work/blind-website-comparison/comparisons/dc-vs-aivar.json

Use this structure:
{"website_a":"desktopcommander","website_b":"aivar","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}
```

---

### AGENT 11 (compare kilo vs desktopcommander)

```
You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.

Step 1: Read BOTH screenshot images at these paths:
Website A: /Users/eduardsruzga/work/blind-website-comparison/screenshots/kilo/hero.png
Website B: /Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png

Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.

Step 3: For each dimension, pick the winner (A or B):

- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.
- value_prop_clarity_winner: Which communicates its value proposition more clearly?
- trust_signals_winner: Which has better social proof and trust signals?
- design_polish_winner: Which has more polished visual design?
- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?
- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)
- reasoning: 2-3 sentences explaining your overall winner choice

Step 4: Save your result as JSON to:
/Users/eduardsruzga/work/blind-website-comparison/comparisons/dc-vs-kilo.json

Use this structure:
{"website_a":"kilo","website_b":"desktopcommander","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}
```

---

### AGENT 12 (compare desktopcommander vs sycamore)

```
You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.

Step 1: Read BOTH screenshot images at these paths:
Website A: /Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png
Website B: /Users/eduardsruzga/work/blind-website-comparison/screenshots/sycamore/hero.png

Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.

Step 3: For each dimension, pick the winner (A or B):

- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.
- value_prop_clarity_winner: Which communicates its value proposition more clearly?
- trust_signals_winner: Which has better social proof and trust signals?
- design_polish_winner: Which has more polished visual design?
- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?
- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)
- reasoning: 2-3 sentences explaining your overall winner choice

Step 4: Save your result as JSON to:
/Users/eduardsruzga/work/blind-website-comparison/comparisons/dc-vs-sycamore.json

Use this structure:
{"website_a":"desktopcommander","website_b":"sycamore","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}
```

---

### AGENT 13 (compare applied-atomics vs desktopcommander)

```
You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.

Step 1: Read BOTH screenshot images at these paths:
Website A: /Users/eduardsruzga/work/blind-website-comparison/screenshots/applied-atomics/hero.png
Website B: /Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png

Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.

Step 3: For each dimension, pick the winner (A or B):

- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.
- value_prop_clarity_winner: Which communicates its value proposition more clearly?
- trust_signals_winner: Which has better social proof and trust signals?
- design_polish_winner: Which has more polished visual design?
- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?
- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)
- reasoning: 2-3 sentences explaining your overall winner choice

Step 4: Save your result as JSON to:
/Users/eduardsruzga/work/blind-website-comparison/comparisons/dc-vs-applied-atomics.json

Use this structure:
{"website_a":"applied-atomics","website_b":"desktopcommander","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}
```

---

### AGENT 14 (compare desktopcommander vs agentmail)

```
You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.

Step 1: Read BOTH screenshot images at these paths:
Website A: /Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png
Website B: /Users/eduardsruzga/work/blind-website-comparison/screenshots/agentmail/hero.png

Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.

Step 3: For each dimension, pick the winner (A or B):

- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.
- value_prop_clarity_winner: Which communicates its value proposition more clearly?
- trust_signals_winner: Which has better social proof and trust signals?
- design_polish_winner: Which has more polished visual design?
- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?
- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)
- reasoning: 2-3 sentences explaining your overall winner choice

Step 4: Save your result as JSON to:
/Users/eduardsruzga/work/blind-website-comparison/comparisons/dc-vs-agentmail.json

Use this structure:
{"website_a":"desktopcommander","website_b":"agentmail","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}
```

---

### AGENT 15 (compare amilabs vs desktopcommander)

```
You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.

Step 1: Read BOTH screenshot images at these paths:
Website A: /Users/eduardsruzga/work/blind-website-comparison/screenshots/amilabs/hero.png
Website B: /Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png

Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.

Step 3: For each dimension, pick the winner (A or B):

- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.
- value_prop_clarity_winner: Which communicates its value proposition more clearly?
- trust_signals_winner: Which has better social proof and trust signals?
- design_polish_winner: Which has more polished visual design?
- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?
- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)
- reasoning: 2-3 sentences explaining your overall winner choice

Step 4: Save your result as JSON to:
/Users/eduardsruzga/work/blind-website-comparison/comparisons/dc-vs-amilabs.json

Use this structure:
{"website_a":"amilabs","website_b":"desktopcommander","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}
```

---

### AGENT 16 (compare desktopcommander vs rodeo)

```
You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.

Step 1: Read BOTH screenshot images at these paths:
Website A: /Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png
Website B: /Users/eduardsruzga/work/blind-website-comparison/screenshots/rodeo/hero.png

Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.

Step 3: For each dimension, pick the winner (A or B):

- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.
- value_prop_clarity_winner: Which communicates its value proposition more clearly?
- trust_signals_winner: Which has better social proof and trust signals?
- design_polish_winner: Which has more polished visual design?
- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?
- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)
- reasoning: 2-3 sentences explaining your overall winner choice

Step 4: Save your result as JSON to:
/Users/eduardsruzga/work/blind-website-comparison/comparisons/dc-vs-rodeo.json

Use this structure:
{"website_a":"desktopcommander","website_b":"rodeo","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}
```

---

### AGENT 17 (compare rowspace vs desktopcommander)

```
You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.

Step 1: Read BOTH screenshot images at these paths:
Website A: /Users/eduardsruzga/work/blind-website-comparison/screenshots/rowspace/hero.png
Website B: /Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png

Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.

Step 3: For each dimension, pick the winner (A or B):

- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.
- value_prop_clarity_winner: Which communicates its value proposition more clearly?
- trust_signals_winner: Which has better social proof and trust signals?
- design_polish_winner: Which has more polished visual design?
- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?
- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)
- reasoning: 2-3 sentences explaining your overall winner choice

Step 4: Save your result as JSON to:
/Users/eduardsruzga/work/blind-website-comparison/comparisons/dc-vs-rowspace.json

Use this structure:
{"website_a":"rowspace","website_b":"desktopcommander","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}
```

---

## SECRET MAPPING (for Phase 3 compilation only)

| Blind ID | Real Site | Funding |
|----------|-----------|--------|
| site-1 | desktopcommander.app | $3M raising |
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


---

## RE-RUN: AGENT 1 (DC critique was tainted by broken Puppeteer screenshot)

The original DC screenshot had a broken video/JS section because headless Puppeteer can't render animations. The screenshot has been recaptured with a proper renderer. Run this to replace site-1.json.

```
You have Desktop Commander access. You are doing a BLIND website design evaluation.

Step 1: Read the screenshot image at this path:
/Users/eduardsruzga/work/blind-website-comparison/screenshots/desktopcommander/hero.png

IMPORTANT: Read ONLY this hero.png file. Do NOT read or look for any other files like full-page.png. Evaluate ONLY what you see in this single hero screenshot.

Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup's website for the first time with 30 seconds to form an impression.

Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):

- first_impression: Does this look like a real, funded company or a side project?
- visual_hierarchy: Can you understand what they do within 5 seconds?
- trust_signals: Any social proof — metrics, testimonials, partner logos, press?
- design_polish: Typography, spacing, color consistency, image quality?
- cta_clarity: Is it obvious what action to take next?
- investor_signal: Does this site say "these founders can execute at scale"?

Also write:
- works_well: 2-3 sentences on what looks good
- looks_weak: 2-3 sentences on what looks weak or amateur
- single_biggest_improvement: 1 sentence — what one change would help most?
- meeting_score: 1-10, would you take a meeting based on this website alone?
- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)

Step 4: Save your complete result as JSON to this file:
/Users/eduardsruzga/work/blind-website-comparison/critiques/site-1.json

Use this structure:
{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}
```

