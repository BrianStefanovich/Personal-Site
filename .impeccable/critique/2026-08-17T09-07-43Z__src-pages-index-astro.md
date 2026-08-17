---
target: homepage (src/pages/index.astro)
total_score: 28
max_score: 36
na_heuristics: 7
p0_count: 2
p1_count: 2
timestamp: 2026-08-17T09-07-43Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Form validation fires on submit only; no inline feedback while typing ([ContactForm.tsx](src/components/sections/ContactForm.tsx#L47-58)). |
| 2 | Match System / Real World | 4/4 | Copy speaks in risk/trade-off/decision language throughout `es.ts`; no generic SaaS platitudes. |
| 3 | User Control and Freedom | 3/4 | FAQ and mobile submenu are dismissible; contact form requires 4 fields before optional context is revealed. |
| 4 | Consistency and Standards | 2/4 | Confirmed non-token colors (`#d8ded9`, `#f7f3eb`, `#434845`, `#606662`) and a live rendering bug (text overflowing its box by up to 88px) — worse than a documentation gap, this is a broken instance in production markup. |
| 5 | Error Prevention | 3/4 | Required fields marked; email validated by pattern; no real-time prevention before submit. |
| 6 | Recognition Rather Than Recall | 3/4 | Text labels throughout (no icon-only nav); mobile services submenu needs a toggle to reveal, a minor recall demand. |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode landing page; traditional power-user efficiency doesn't apply. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Restrained by design (no gradients/blobs/glossy stock), but 13 sections and dense card grids raise the load; one visibly broken element (overflowing callout). |
| 9 | Error Recovery | 4/4 | Specific, actionable form errors; focus moves to the first invalid field; success state is visible. |
| 10 | Help and Documentation | 3/4 | 9-item FAQ, an explicit "Fit / No-Fit" section, and a documented process — no contextual tooltips, but not needed at this depth. |
| **Total** | | **28/36** | **Good (78%)** — heuristic 7 scored n/a for this Persuade-mode surface. |

## Design Specificity Verdict

**LLM assessment**: This is genuinely authored for an executive consulting/decision-clarity product, not a reskinned SaaS template. The "Executive Dossier" language — numbered `NN / label` eyebrows, warm cream paper, 2px corners, hairline borders, one reserved indigo — is consistently executed, and the copy never lapses into "fast/reliable/scalable" filler; it stays in risk, trade-off, and business-decision vocabulary end to end ("la decisión difícil no suele ser qué tecnología usar," "puedo decirte que no soy la persona/equipo indicado").

**Deterministic scan**: `detect.mjs --json` over `index.astro`, all `sections/`, `Header.tsx`, `Footer.tsx`, and `button.tsx` returned **0 findings, exit 0** — clean on static markup pattern checks (no gradients, blobs, glossy-stock patterns detected in source).

**Browser evidence** (live computed-style scan, not caught by the static scan): injecting the detector into a fresh tab at `http://localhost:4321/` and its linked pages surfaced **27 markers** across these categories:
- `low-contrast` ×3 — including ink-muted (`#757685`) at 4.3:1 on the warm-paper background (needs 4.5:1), and the same color at **3.5:1** on the `line` background — both real WCAG AA fails.
- `gray-on-color` / `low-contrast` (4.1:1) — `#d8ded9` text on `#465cd4` background, confirming Assessment A's citation.
- `text-overflow` ×6 — most notably a paragraph overflowing its box by **88px** ([Problemas.tsx](src/components/sections/Problemas.tsx#L129), the mobile "Demuestra" callout), plus `dt`/`dd` pairs in the Diagnóstico detail list overflowing by 25–46px, and the primary CTA link overflowing by 18–24px on `/contacto` and `/privacidad`.
- `all-caps-body` ×6 and `wide-tracking` ×1 — body-length text (34–115 chars) rendered uppercase or with label-style letter-spacing outside the mono-eyebrow system.
- `overused-font` ×2 (informational) and two likely **false positives**: `kicker-above-heading` and `cream-palette` — both flag patterns that DESIGN.md commits to *deliberately* as the site's signature devices (the `SectionEyebrow` index system and the warm-paper identity), so they should be dismissed here rather than "fixed."

**Visual overlays**: overlays are now visible in the **[Human]** browser tab, highlighting each finding directly on the rendered page (confirmed via screenshot — a yellow "low contrast text, all-caps body text" box over the hero eyebrow). The live server has since been stopped and the tab's injected script removed on navigation.

The takeaway: the *static* code is clean against generic AI-site tells, but the *rendered* page has real, confirmed defects the static scan cannot see — most importantly a genuine layout bug (text overflowing its container), not just a token/contrast nitpick.

## Overall Impression

The page is unmistakably built for this product — the numbered dossier system, the restraint, the risk-first copy all work together and would look wrong on any other consulting site. The biggest problem isn't tone or genericness, it's that the system's own rules have been violated in a handful of concrete places, and one of those violations (the mobile "Demuestra" callout in Problemas) is a **visibly broken element in production**, not a subtle inconsistency: its text overflows the box by 88px and fails contrast at the same time. The single biggest opportunity is closing the gap between the documented design system and the shipped code — DESIGN.md explicitly says the accent-border and non-token-color anti-patterns were "removed," but at least one of them is still live in [Problemas.tsx](src/components/sections/Problemas.tsx#L47-51).

## What's Working

1. **Design-system authenticity**: The "Executive Dossier" language is genuinely executed end to end (eyebrow numbering, warm paper, hairline borders, single indigo signal) — a rare case of a documented design system actually matching the shipped code in most places.
2. **Consulting-specific copy**: Every section speaks in risk/trade-off/decision language (`src/i18n/es.ts`) with no generic marketing filler, which matters enormously for the skeptical-executive audience this site targets.
3. **Accessibility baseline**: Proper `aria-expanded`/`aria-invalid`/`aria-describedby`, associated labels, and a visible 3px focus outline ([global.css](src/styles/global.css#L37-41)) — an above-average starting point that makes the confirmed contrast fails feel like oversights rather than neglect.

## Priority Issues

- **[P0] Broken "Demuestra" callout on mobile Problemas** — [Problemas.tsx#L129](src/components/sections/Problemas.tsx#L129)
  - **Why it matters**: This isn't a style nitpick — the browser detector confirmed the text physically **overflows its box by 88px**, while also using a non-token color (`#d8ded9`) that fails contrast at 4.1:1 (needs 4.5:1) against the `#465cd4` background. A visitor on mobile — the exact device class Casey represents — sees a visibly broken, hard-to-read box in a page meant to project rigor and precision to executives.
  - **Fix**: Replace `text-[#d8ded9]` with a token that meets contrast (e.g. white or `signal-indigo-fg`), and fix the sizing/wrapping so the text fits its padding at all supported widths.
  - **Suggested command**: `$impeccable audit` (or `$impeccable harden` if this recurs at other breakpoints)

- **[P0] Soft button shadow violates the Flat-By-Default rule** — [button.tsx#L8](src/components/ui/button.tsx#L8)
  - **Why it matters**: DESIGN.md is explicit that shadow is reserved for the mobile CTA affordance and the header's floating submenu only — never ambient card/button styling. The `button-soft` variant's `shadow-[0_1px_1px_rgba(0,0,0,0.05)]` is a direct, systemic violation that appears everywhere that variant is used.
  - **Fix**: Remove the shadow; let the `bg-accent-soft`/`text-accent-fg` color pairing alone carry the visual weight.
  - **Suggested command**: `$impeccable polish`

- **[P1] Colored left-border reintroduced on mobile Problemas cards** — [Problemas.tsx#L47-51](src/components/sections/Problemas.tsx#L47-51)
  - **Why it matters**: DESIGN.md's own "Do's and Don'ts" section says this exact pattern (`border-l-4`-style colored accent border) was identified as an AI-generated-UI tell and removed from three other components during the documentation pass. Its presence here directly contradicts that stated cleanup and reads as an inconsistency between what the system claims and what ships.
  - **Fix**: Remove the accent-colored left-border span, or replace with the full hairline `border border-line` treatment used elsewhere.
  - **Suggested command**: `$impeccable polish`

- **[P1] Diagnóstico detail list overflows its container** — [Diagnostico.tsx#L61-66](src/components/sections/Diagnostico.tsx#L61-66)
  - **Why it matters**: The browser detector found `dt`/`dd` pairs in the pricing/scope detail panel overflowing their container by 25–46px. This is the section carrying the fixed-scope pricing and payment terms — exactly the information an executive scrutinizes before approving spend, and it's rendering cut off or wrapped incorrectly.
  - **Fix**: Switch the inline `dt`/`dd` layout to a wrapping-safe pattern (e.g. `flex flex-wrap gap-x-1` instead of `inline`), or constrain/verify the parent's `min-width: 0` so long `detail.value` strings wrap instead of overflowing.
  - **Suggested command**: `$impeccable audit`

- **[P2] Non-token colors scattered across the codebase** — [Faq.tsx#L17](src/components/sections/Faq.tsx#L17), [CtaFinal.tsx#L19](src/components/sections/CtaFinal.tsx#L19), Footer legal links (`#434845`, `#606662`)
  - **Why it matters**: `#f7f3eb` isn't in DESIGN.md's token system (the closest token, `warm-paper-tint`, is `#f1ede5`) and neither are the footer legal-link colors. This creates exactly the kind of undocumented variant DESIGN.md warns against — nobody can apply the system correctly by reading DESIGN.md alone.
  - **Fix**: Replace with `warm-paper-tint`/`ink-muted`/`ink-nav` tokens, or add the new values to DESIGN.md if the deviation is intentional.
  - **Suggested command**: `$impeccable extract` (pull the stray values into the token system) then `$impeccable polish`

- **[P2] Problemas section creates first-timer decision paralysis** — [Problemas.tsx](src/components/sections/Problemas.tsx)
  - **Why it matters**: Three service categories × 2–4 pain points each are presented with no prior segmentation. A first-time visitor (Jordan) doesn't know which column applies to them and must read all three before self-identifying — violating both the "one thing at a time" and "≤4 items per group" cognitive-load rules.
  - **Fix**: Add a lightweight segmentation cue before the three columns (e.g. a short "¿cuál es tu situación?" prompt with 3 anchor links that scroll to the relevant column) so visitors self-route immediately.
  - **Suggested command**: `$impeccable layout`

## Persona Red Flags

**Jordan (Confused first-timer)**:
- Faces all 3 Problemas service categories with 2–4 pain points each before knowing which applies — no upfront routing ([Problemas.tsx](src/components/sections/Problemas.tsx)).
- The "Encaje" (Fit) section lists 4 "you're probably not a fit if..." bullets ([Encaje.tsx#L49-58](src/components/sections/Encaje.tsx#L49-58)) — a visitor matching one criterion may self-reject before the fit conversation clarifies nuance.

**Casey (Distracted mobile user)**:
- The broken "Demuestra" callout (P0 above) is a mobile-only element — Casey is the persona who actually encounters this visibly overflowing, low-contrast box.
- Hero CTA text "Hablemos de tu software" and the eyebrow line ("Consultoría senior de arquitectura, modernización y productos de software," 12 words) both risk wrapping awkwardly at 320–375px, adding visual noise before the primary heading loads.

**Riley (Deliberate stress tester)**:
- Email validation fires only on submit, not on blur ([ContactForm.tsx#L47-58](src/components/sections/ContactForm.tsx#L47-58)) — Riley types a malformed address, submits, gets corrected only after the fact.
- The primary CTA link overflows its box by 18–24px on `/contacto` and `/privacidad` (browser-confirmed) — Riley is exactly the persona who would notice and report this as "broken button."

## Minor Observations

- `overused-font` detector notes: Montserrat 37% / Open Sans 43% of text — informational, not a violation; the split matches the intended display/body pairing.
- `kicker-above-heading` and `cream-palette` detector flags are **false positives** in this context — both are DESIGN.md's explicit, deliberate signature devices (the `SectionEyebrow` system and the warm-paper identity), not generic AI-site tells here.
- `Diferenciales.tsx` uses `md:py-32` (128px) instead of the documented `section-y-desktop: 64px` baseline — likely an intentional emphasis for that section, but undocumented as a variant.
- Hero eyebrow uses `md:text-accent` directly rather than the shared `SectionEyebrow` component pattern used elsewhere — inconsistent, though not visually wrong.
- FAQ desktop view keeps all 9 answers in the DOM simultaneously (only the mobile accordion limits visibility) — fine for sighted users, moderately more to process for screen-reader users navigating linearly.

## Questions to Consider

- If the Problemas section's 3-column structure is meant to serve visibly distinct buyers, would a one-line "this is for you if..." routing prompt before the columns reduce the paralysis without diluting the report-like tone?
- Given DESIGN.md documents the accent-border pattern as already "removed," is [Problemas.tsx#L47-51](src/components/sections/Problemas.tsx#L47-51) a regression, or was this instance simply missed during that pass?
- Is the 88px text overflow in the mobile "Demuestra" callout something that shipped and has been live, or a recent regression — and does it appear on other breakpoints beyond what was tested here?
