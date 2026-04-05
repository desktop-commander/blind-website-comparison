const fs = require('fs');
const base = '/Users/eduardsruzga/work/blind-website-comparison';

const sites = [
  { n: 1, id: 'desktopcommander' },
  { n: 2, id: 'aivar' },
  { n: 3, id: 'kilo' },
  { n: 4, id: 'sycamore' },
  { n: 5, id: 'applied-atomics' },
  { n: 6, id: 'agentmail' },
  { n: 7, id: 'amilabs' },
  { n: 8, id: 'rodeo' },
  { n: 9, id: 'rowspace' },
];

const comparisons = [
  { n: 10, a_id: 'desktopcommander', b_id: 'aivar', file: 'dc-vs-aivar' },
  { n: 11, a_id: 'kilo', b_id: 'desktopcommander', file: 'dc-vs-kilo' },
  { n: 12, a_id: 'desktopcommander', b_id: 'sycamore', file: 'dc-vs-sycamore' },
  { n: 13, a_id: 'applied-atomics', b_id: 'desktopcommander', file: 'dc-vs-applied-atomics' },
  { n: 14, a_id: 'desktopcommander', b_id: 'agentmail', file: 'dc-vs-agentmail' },
  { n: 15, a_id: 'amilabs', b_id: 'desktopcommander', file: 'dc-vs-amilabs' },
  { n: 16, a_id: 'desktopcommander', b_id: 'rodeo', file: 'dc-vs-rodeo' },
  { n: 17, a_id: 'rowspace', b_id: 'desktopcommander', file: 'dc-vs-rowspace' },
];

let out = `# Agent Prompts — Blind Website Comparison

## How to use
- Open 17 separate Claude chats (all with Desktop Commander access)
- Paste one prompt per chat
- Each agent reads screenshots from disk, does analysis, saves results
- All 17 can run simultaneously
- When all done, come back to original chat for Phase 3 compilation

---

## PHASE 1: INDIVIDUAL BLIND CRITIQUES (9 agents)

`;

for (const s of sites) {
  out += '### AGENT ' + s.n + ' (critique site-' + s.n + ')\n\n';
  out += '```\n';
  out += 'You have Desktop Commander access. You are doing a BLIND website design evaluation.\n\n';
  out += 'Step 1: Read the screenshot image at this path:\n';
  out += base + '/screenshots/' + s.id + '/hero.png\n\n';
  out += 'Step 2: Look at the image carefully. You do NOT know which company this is — that is intentional. This is a blind test. Evaluate it as a seed-stage VC partner who just landed on this startup\'s website for the first time with 30 seconds to form an impression.\n\n';
  out += 'Step 3: Score each dimension on 1-10 scale where 5 = average seed startup website and 10 = best-in-class (Linear/Vercel/Stripe tier):\n\n';
  out += '- first_impression: Does this look like a real, funded company or a side project?\n';
  out += '- visual_hierarchy: Can you understand what they do within 5 seconds?\n';
  out += '- trust_signals: Any social proof — metrics, testimonials, partner logos, press?\n';
  out += '- design_polish: Typography, spacing, color consistency, image quality?\n';
  out += '- cta_clarity: Is it obvious what action to take next?\n';
  out += '- investor_signal: Does this site say "these founders can execute at scale"?\n\n';
  out += 'Also write:\n';
  out += '- works_well: 2-3 sentences on what looks good\n';
  out += '- looks_weak: 2-3 sentences on what looks weak or amateur\n';
  out += '- single_biggest_improvement: 1 sentence — what one change would help most?\n';
  out += '- meeting_score: 1-10, would you take a meeting based on this website alone?\n';
  out += '- one_word_vibe: Pick one word (Professional, Scrappy, Polished, Generic, Premium, Hacker, Corporate, Minimal, etc.)\n\n';
  out += 'Step 4: Save your complete result as JSON to this file:\n';
  out += base + '/critiques/site-' + s.n + '.json\n\n';
  out += 'Use this structure:\n';
  out += '{"scores":{"first_impression":<number>,"visual_hierarchy":<number>,"trust_signals":<number>,"design_polish":<number>,"cta_clarity":<number>,"investor_signal":<number>},"average_score":<calculated average 1 decimal>,"critique":{"works_well":"<text>","looks_weak":"<text>","single_biggest_improvement":"<text>"},"meeting_score":<number>,"one_word_vibe":"<word>"}\n';
  out += '```\n\n---\n\n';
}

out += '## PHASE 2: HEAD-TO-HEAD COMPARISONS (8 agents)\n\n';
out += 'DC position is randomized (sometimes A, sometimes B) to prevent position bias.\n\n';

for (const c of comparisons) {
  out += '### AGENT ' + c.n + ' (compare ' + c.a_id + ' vs ' + c.b_id + ')\n\n';
  out += '```\n';
  out += 'You have Desktop Commander access. You are doing a BLIND side-by-side website comparison.\n\n';
  out += 'Step 1: Read BOTH screenshot images at these paths:\n';
  out += 'Website A: ' + base + '/screenshots/' + c.a_id + '/hero.png\n';
  out += 'Website B: ' + base + '/screenshots/' + c.b_id + '/hero.png\n\n';
  out += 'Step 2: Look at both images carefully. You do NOT know which companies these are. You are a seed-stage VC partner comparing two startup websites.\n\n';
  out += 'Step 3: For each dimension, pick the winner (A or B):\n\n';
  out += '- first_impression_winner: Which makes a stronger first impression? And why in 1 sentence.\n';
  out += '- value_prop_clarity_winner: Which communicates its value proposition more clearly?\n';
  out += '- trust_signals_winner: Which has better social proof and trust signals?\n';
  out += '- design_polish_winner: Which has more polished visual design?\n';
  out += '- overall_meeting_winner: Overall, which startup would you be more likely to take a meeting with?\n';
  out += '- confidence: How close is it? (Blowout / Clear winner / Slight edge / Coin flip)\n';
  out += '- reasoning: 2-3 sentences explaining your overall winner choice\n\n';
  out += 'Step 4: Save your result as JSON to:\n';
  out += base + '/comparisons/' + c.file + '.json\n\n';
  out += 'Use this structure:\n';
  out += '{"website_a":"' + c.a_id + '","website_b":"' + c.b_id + '","first_impression_winner":"<A or B>","first_impression_why":"<1 sentence>","value_prop_clarity_winner":"<A or B>","trust_signals_winner":"<A or B>","design_polish_winner":"<A or B>","overall_meeting_winner":"<A or B>","confidence":"<Blowout | Clear winner | Slight edge | Coin flip>","reasoning":"<2-3 sentences>"}\n';
  out += '```\n\n---\n\n';
}

out += '## SECRET MAPPING (for Phase 3 compilation only)\n\n';
out += '| Blind ID | Real Site | Funding |\n';
out += '|----------|-----------|--------|\n';
out += '| site-1 | desktopcommander.app | $3M raising |\n';
out += '| site-2 | aivar.tech | $4.6M seed |\n';
out += '| site-3 | kilo.ai | $8M seed |\n';
out += '| site-4 | sycamore.so | $65M seed |\n';
out += '| site-5 | applied-atomics.com | $8.3M seed |\n';
out += '| site-6 | agentmail.to | $6M seed |\n';
out += '| site-7 | amilabs.xyz | $1.03B seed |\n';
out += '| site-8 | rodeorodeorodeo.com | $8.5M seed |\n';
out += '| site-9 | rowspace.ai | $50M seed+A |\n\n';
out += '### Head-to-head DC position decoder:\n';
out += '| File | DC was | Opponent was |\n';
out += '|------|--------|-------------|\n';
out += '| dc-vs-aivar.json | A | B |\n';
out += '| dc-vs-kilo.json | B | A |\n';
out += '| dc-vs-sycamore.json | A | B |\n';
out += '| dc-vs-applied-atomics.json | B | A |\n';
out += '| dc-vs-agentmail.json | A | B |\n';
out += '| dc-vs-amilabs.json | B | A |\n';
out += '| dc-vs-rodeo.json | A | B |\n';
out += '| dc-vs-rowspace.json | B | A |\n';

fs.writeFileSync(base + '/AGENT_PROMPTS.md', out);
console.log('DONE — wrote ' + out.split('\n').length + ' lines');
