---
name: Pragmatic Expert
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#2563eb'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#46566c'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e6e85'
  on-tertiary-container: '#e9f0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '56px'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '44px'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '38px'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '32px'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '28px'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '24px'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '16px'
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '20px'
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 128px
  container-max: 1200px
---

## Brand & Style
The design system presents a **light, high-clarity technical consulting** aesthetic. It targets founders, CTOs and business leaders who need to trust a technical expert with complex, high-stakes decisions. The brand personality is pragmatic, precise and approachable — confidence without jargon.

The design style is **Pragmatic Expert**: a clean, editorial light-mode foundation with a single strong accent color, generous whitespace, and a restrained monospace accent for structural/data labels. Everything favors legibility and trust over decoration.

## Colors
This palette is rooted in a soft off-white foundation with a decisive blue accent for action.
- **Background**: `#f7f9fb` is the canvas — a barely-tinted off-white that keeps long-form reading comfortable.
- **Surface / Card**: `#ffffff` defines cards, panels and the header/footer background, providing clear separation from the page background via subtle borders rather than shadows.
- **Primary (Action)**: `#2563eb` is the accent used for primary CTAs, links, active nav states, focus rings and icon highlights.
- **Secondary**: `#565e74` / container `#dae2fd` supports secondary buttons, chips and less prominent accents.
- **Tertiary**: `#46566c` is used sparingly for supporting labels and diagram elements.
- **Muted / Structural**: `#434655` on-surface-variant for body copy and secondary text; `#c3c6d7` outline-variant for borders and dividers.
- **Destructive**: `#ba1a1a` reserved for form validation errors only.

## Typography
The typography system balances editorial confidence with technical precision.
- **Display & Headings**: Inter (700/600) provides confident, modern headings — `display-lg` for hero names/titles, `headline-md`/`headline-sm` for section titles.
- **Body**: Inter (400) at `body-lg`/`body-md` ensures long-form consulting copy is comfortable to read.
- **Labels**: JetBrains Mono `label-caps` (uppercase, +0.05em tracking) marks category tags, eyebrows and step numbers — the one "technical" accent against an otherwise humanist typeface.

## Layout & Spacing
The layout is governed by an **8px base spacing unit** with generous section rhythm.
- **Container**: max-width 1200px, 64px desktop margins / 20px mobile margins, 24px gutters.
- **Section rhythm**: 128px vertical gap between major sections on desktop, collapsing responsively on mobile.
- **Grid**: 12-column desktop grid; single column on mobile (< 768px).
- **Cards**: bordered, not shadowed — 1px `outline-variant` border on white surface.

## Elevation & Depth
Depth is communicated through **surface contrast and 1px borders**, with soft shadows reserved for floating/overlay elements (dropdowns, sheets, popovers) — not for static cards.
- **Level 0 (Base)**: `#f7f9fb` page background.
- **Level 1 (Cards/Containers)**: `#ffffff` surface with a 1px `#c3c6d7` border, 4px radius.
- **Level 2 (Popovers/Dropdowns/Sheets)**: `#ffffff` surface, subtle shadow, 4px radius.
- **Focus**: 2px `#2563eb` ring with 2px offset on all interactive elements.

## Shapes
The shape language is **soft-minimal (4px radius)** — `ROUND_FOUR`. Buttons, inputs, cards, badges and tags use a consistent small radius that feels precise without being sterile or overly rounded.

## Components
- **Buttons**: 4px radius. Primary uses solid `#2563eb` fill with white text; hover darkens slightly. Outline/ghost variants use `#c3c6d7` border with `on-surface` text.
- **Input Fields**: White background, 1px `#c3c6d7` border, 4px radius. On focus, border/ring becomes `#2563eb`. Labels use `body-md` weight 500, placed above the field.
- **Cards**: White surface, 1px `#c3c6d7` border, 4px radius, generous internal padding (24–32px).
- **Badges/Category labels**: JetBrains Mono `label-caps`, uppercase, subtle background tint of `secondary-container` or `muted`.
- **Numbered steps**: Circular index badges (mono digits) connected by a thin line or diagram, used in the "Método" section.
- **Navigation**: Sticky header with translucent/blurred white background, thin bottom border, primary-colored active/hover states.