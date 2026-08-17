---
target: homepage (src/pages/index.astro)
total_score: 30
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 1
timestamp: 2026-08-17T07-00-50Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Sticky nav + numbered eyebrows (01–10) give good position feedback; contact form success is text-only (`aria-live`), no visible toast/spinner. |
| 2 | Match System / Real World | 4/4 | Native-fluency Spanish, Chilean pricing (UF), real industry vocabulary (diagnóstico, blueprint, fractional CTO). |
| 3 | User Control and Freedom | 4/4 | Free anchor navigation, dismissible submenu/mobile menu/FAQ accordion, no forced flows or modal traps. |
| 4 | Consistency and Standards | 3/4 | Visual system (hairlines, 2px corners, one signal color) is applied with discipline — but the header overflows horizontally by up to 72px between ~1024–1096px viewport widths, clipping the primary CTA and forcing horizontal scroll (confirmed via DOM measurement, see Design Specificity Verdict). |
| 5 | Error Prevention | 3/4 | Required attributes, input types, and autocomplete hints are in place; no inline validation feedback yet (form backend is a TODO). |
| 6 | Recognition Rather Than Recall | 4/4 | Sticky nav, eyebrow wayfinding, no memorization required anywhere. |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode landing page — "expert shortcuts" don't meaningfully apply to a first-visit decision funnel. |
| 8 | Aesthetic and Minimalist Design | 4/4 | Genuinely restrained: one signal color, no gradients/shadows/stock imagery, every recurring device (eyebrow, tint alternation) earns its place. |
| 9 | Error Recovery | 2/4 | Contact form has no error states, no recovery guidance, and no way to recover from a failed submission — form backend is not yet wired. |
| 10 | Help and Documentation | 3/4 | 9-question FAQ handles objections well; no comparison guidance for "which service is right for me." |
| **Total** | | **30/36** | **Good (83%)** |

## Design Specificity Verdict

**LLM assessment**: This page is authored specifically for this product's positioning, not a reskinned template. The "Executive Dossier" system (warm paper, mono report-index eyebrows, one reserved indigo signal, near-square corners) is applied with real discipline, and the copy is native-fluency Spanish tailored to Chilean/LatAm executives — actual pricing in UF, actual service names (Diagnóstico Ejecutivo, Blueprint Técnico, Liderazgo Técnico Fraccional), and objection-handling copy that assumes a specific skeptical-executive reader ("no es una auditoría improvisada," explicit "cuándo NO trabajar conmigo" in the Encaje section). A generic consulting or SaaS site could not reuse this content or its emotional arc unchanged.

**Deterministic scan**: `node .agents/skills/impeccable/scripts/detect.mjs --json` against `src/pages/index.astro`, `src/components/sections/`, `Header.tsx`, and `Footer.tsx` returned `[]` (exit code 0) — no mechanical anti-pattern violations (no stray accent borders, no ambient shadows, no radius/border rule violations). This is consistent with DESIGN.md's note that the border-l-4 anti-patterns in ContactForm/Sprint/Encaje were already removed in a prior documentation pass.

**Browser/DOM evidence (real bug the detector and static review both missed)**: Directly measuring `document.documentElement.scrollWidth` vs `clientWidth` across viewport widths found the page is horizontal-overflow-free at 375px (mobile) and at ≥1100px (standard desktop), but overflows by **6–72px between exactly 1024px and 1096px** — the header's nav links + CTA button do not fit in the container at the point Tailwind's `lg:` desktop-nav breakpoint activates. The overflowing element is confirmed to be the primary "Hablemos de tu software" CTA button (`right: 1096px` against a `1024px` client width at the narrow end). This band covers real devices (13" laptops, iPad Pro landscape at 1024px) and directly clips the site's single most important call-to-action. Screenshot capture in this environment did not reliably reflect Playwright viewport/scroll changes (a tooling limitation, noted in Run Notes), so this evidence is DOM-measurement-based rather than a visual overlay — but it is fully reproducible and precise.

## Overall Impression

This is a disciplined, product-specific execution of a genuinely distinctive design system — the "Executive Dossier" concept is carried through typography, color restraint, and copy with real consistency, and the Encaje section's "when NOT to hire me" framing is a legitimately sharp piece of persuasive design. The biggest opportunity isn't more visual polish; it's finishing the two "TODO" seams that are currently visible through the polish: the contact form has no working backend/error states, and the header layout breaks at a real, common viewport width band.

## What's Working

1. **The Encaje "fit / no-fit" section** ([Encaje.tsx](src/components/sections/Encaje.tsx)) reverses the typical sales-page pattern by explicitly listing reasons *not* to hire Brian ("Solo buscas cubrir horas de desarrollo," "Esperas una promesa de plazo o costo antes de permitir evaluación mínima"). For a risk-averse executive audience burned by consultants before, this reads as integrity, not weakness — it's the strongest single element on the page.
2. **Progressive narrowing of the funnel** — Problema → DosRutas → Diagnóstico → ComoTrabajo → Experiencia → Diferenciales → Encaje → SobreBrian → FAQ → CtaFinal mirrors exactly how a skeptical buyer's questions unfold (is this my problem? → is this person competent? → will we fit? → what's the ask?), without repeating itself.
3. **Color and shape restraint** — indigo appears only on the one primary action per view, corners stay at a strict 2px, and card rhythm comes from surface/tint alternation instead of borders or shadows. The detector's clean scan confirms this discipline holds at the code level, not just visually.

## Priority Issues

**[P1] Header CTA and nav overflow the viewport between ~1024–1096px width**
[Header.tsx](src/components/Header.tsx)
- **Why it matters**: At this real, common width band (13" laptops, iPad Pro landscape), the page gains 6–72px of horizontal scroll and the primary CTA button "Hablemos de tu software" is visually clipped at the right edge. This is the site's single most important conversion action, and it degrades exactly where the desktop nav first switches on.
- **Fix**: Reduce the gap/padding between nav links and the CTA at the `lg` breakpoint, or move to a narrower nav layout (shrink label tracking, or collapse to the mobile menu earlier, e.g. at `xl` instead of `lg`) so the full header fits without overflow across the whole desktop range.
- **Suggested command**: `$impeccable adapt`

**[P2] Contact form has no backend, error states, or visible success confirmation**
[ContactForm.tsx](src/components/sections/ContactForm.tsx#L23)
- **Why it matters**: The submit handler is a TODO. There's no inline validation, no visible error messaging, and success is communicated only via an `aria-live` text update that sighted users won't necessarily notice. A user filling a multi-field form with no feedback loop will not trust that anything happened.
- **Fix**: Wire the form to a real endpoint; add inline field validation (email format, required fields) with error text near the field; replace the aria-live-only success with a visible confirmation state (and keep the aria-live update for screen readers).
- **Suggested command**: `$impeccable harden`

**[P2] Contact form is a 10-field wall with no progressive disclosure**
[ContactForm.tsx](src/components/sections/ContactForm.tsx)
- **Why it matters**: 5 required fields + a select + two textareas + two optional trailing fields all appear at once. On mobile, this reads as a long, undifferentiated commitment and raises abandonment risk, especially since several fields (urgency, budget, timeline) feel more invasive than the standard name/email/company.
- **Fix**: Show the essential fields first (name, company, email, "what do you need," brief situation) and reveal urgency/timeline/budget behind an explicit "more details (optional)" expander.
- **Suggested command**: `$impeccable distill`

**[P2] Header navigation has no active/current-page or current-section state**
[Header.tsx](src/components/Header.tsx)
- **Why it matters**: Visiting `/sobre-mi` or jumping to `#como-trabajo` doesn't highlight the corresponding nav item, so users lose track of where they are on a fairly long site.
- **Fix**: Add `aria-current="page"` styling driven by the current route for standalone pages, and a scroll-spy active state for in-page anchor sections on the homepage.
- **Suggested command**: `$impeccable clarify`

**[P3] Mobile FAQ accordion gives no hint that items are tappable**
[Faq.tsx](src/components/sections/Faq.tsx#L28)
- **Why it matters**: The chevron icon is the only affordance signaling that FAQ items expand; some mobile users may scroll past without realizing there's more content.
- **Fix**: Add a small "toca una pregunta para expandir" hint above the mobile accordion, or auto-expand the first item by default.
- **Suggested command**: `$impeccable clarify`

## Persona Red Flags

**The Skeptical CTO/VP Engineering**: No architecture diagrams or quantified results in [Experiencia.tsx](src/components/sections/Experiencia.tsx) — ".NET 8 migration" is named but not evidenced with a metric (deploy time, incident rate, velocity). This persona will read the page as credible on positioning but light on proof at the level they actually evaluate vendors.

**The Time-Constrained Mobile Visitor**: Combines two real findings — the header overflow band (P1 above, though it self-heals below 1024px so most phones are unaffected) and the 10-field contact form (P2 above) are exactly the two friction points that cause a mobile visitor mid-commute to bounce before converting: a page that looks right, then a form that asks for too much too soon.

**The Non-Technical Executive (CFO/COO)**: The contact form's first meaningful decision — "¿Qué necesitas resolver?" with options like "Arquitectura o riesgo" — assumes the visitor already knows their problem is architectural. A CFO evaluating spend without technical fluency may not know which option describes their situation and could abandon at the first form field.

## Minor Observations

- Section background alternation (tint vs. surface) doesn't follow one obvious explicit rule across sections — it reads fine visually but isn't documented as a rule beyond "alternate for rhythm."
- `ProcessSteps.tsx` lays 5 steps into a `md:grid-cols-4` grid, leaving step 5 alone on a second row — a `grid-cols-3` or explicit centering of the last item would balance it.
- Global `scroll-padding-top: 5rem` accounts for the sticky header on anchor jumps; the mobile header is shorter, so this could be tightened at mobile widths.
- Form labels use `font-display font-semibold` at `text-sm`, which reads slightly more formal/heavy than the body font — intentional-looking, but worth confirming.

## Questions to Consider

- What would this page look like if it ended right after the Encaje section, with FAQ and Sobre mí moved to their own pages?
- Does the contact form need every field on the first screen, or could "quick" (3 fields) and "detailed" (10 fields) paths coexist?
- Is there room for one or two quantified proof points in Experiencia for the audience that specifically distrusts unquantified claims?
