---
name: Brian Stefanovich Consulting
description: Decisiones claras. Software bien diseñado.
colors:
  signal-indigo: "#2a42bb"
  signal-indigo-soft: "#465cd4"
  signal-indigo-fg: "#e4e6ff"
  warm-paper: "#fdf9f1"
  warm-paper-tint: "#f1ede5"
  ink: "#1c1c17"
  ink-body: "#444654"
  ink-muted: "#757685"
  ink-nav: "#5a605c"
  line: "#e6e2da"
  surface: "#ffffff"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontWeight: 600
  body:
    fontFamily: "Open Sans, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    letterSpacing: "0.06em"
rounded:
  sm: "2px"
  full: "9999px"
spacing:
  section-y-mobile: "48px"
  section-y-desktop: "64px"
components:
  button-primary:
    backgroundColor: "{colors.signal-indigo}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-indigo-soft}"
  button-soft:
    backgroundColor: "{colors.signal-indigo-soft}"
    textColor: "{colors.signal-indigo-fg}"
    rounded: "{rounded.sm}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.warm-paper-tint}"
    rounded: "{rounded.sm}"
    padding: "24px"
---

# Design System: Brian Stefanovich Consulting

## Overview

**Creative North Star: "The Executive Dossier"**

This is the visual language of a confidential consulting report handed to an executive before they approve spend: warm paper, near-square corners, one reserved signal color, and a mono-typed numbering system that indexes every section like a document outline. Nothing here is decorative for its own sake — every recurring device (the eyebrow number, the terracotta/indigo column accents, the alternating card tint) exists to help a reader scan a dense evaluation quickly, not to perform "startup" energy.

The system is restrained and credible, closer to editorial and print-report conventions than to SaaS marketing. It explicitly rejects the generic AI-generated-site look: no gradients, no floating blobs, no glossy stock-photo hero treatments, no soft glowing shadows standing in for structure.

**Key Characteristics:**
- Warm cream paper background with a single reserved indigo signal color for action and emphasis.
- Near-square 2px corners everywhere — cards, buttons, inputs, images never round beyond this.
- Flat by default; shadow appears only as a mobile-only affordance on primary CTAs, never on desktop.
- A recurring "NN / label" mono eyebrow indexes every major section like a report table of contents.
- Alternating warm-tint (`#f1ede5`) and white (`surface`) card backgrounds create rhythm between adjacent sections without adding borders or shadows.

## Colors

The palette is almost monochrome — warm paper and ink — with indigo held in reserve so it reads as a deliberate signal rather than decoration.

### Primary
- **Signal Indigo** (`#2a42bb`): The one accent. Reserved for primary CTAs, focus rings, active/link states, and the section-eyebrow eyebrow numbers on mobile. Used sparingly — most screens show it only on the CTA button and a handful of labels.
- **Signal Indigo Soft** (`#465cd4`): Secondary accent step. Used for hover states on the primary button, eyebrow numbering on desktop, list bullet dots, and small mono "Demuestra:" tags.
- **Signal Indigo Fg** (`#e4e6ff`): Text-on-indigo-soft color for the `soft` button variant.

### Neutral
- **Warm Paper** (`#fdf9f1`): The base page background — a warm, slightly yellowed cream, never pure white.
- **Warm Paper Tint** (`#f1ede5`): The alternate card/panel background used to separate a block from the page without a border or shadow. Alternates with `surface` across adjacent cards in the same grid to create rhythm.
- **Ink** (`#1c1c17`): Primary text and headings.
- **Ink Body** (`#444654`): Paragraph and body copy — never full black.
- **Ink Muted** (`#757685`): Captions, disclaimers, secondary microcopy.
- **Ink Nav** (`#5a605c`): Header/footer navigation link color at rest.
- **Line** (`#e6e2da`): The only border color. Every `border` in the system is this hairline, never black or gray-500.
- **Surface** (`#ffffff`): Card background where the surrounding section is already tinted, and the default input/dropdown background.

### Named Rules
**The One Signal Rule.** Signal Indigo appears on at most one interactive element's worth of attention per view — the primary CTA, a link, or an active nav state. It is never used as a decorative fill, gradient, or background wash.

**The Hairline Rule.** Borders are always `line` (`#e6e2da`) at 1px. A thicker or differently colored border on a card, list item, or callout is a deviation from the system, not a variant of it.

## Typography

**Display Font:** Montserrat (with sans-serif fallback)
**Body Font:** Open Sans (with sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** A confident, slightly condensed grotesque (Montserrat) for headings and UI labels, paired with a plain, highly legible humanist sans (Open Sans) for reading copy, and a monospace face reserved for the numbering/labeling system that gives the whole page its "report" texture.

### Hierarchy
- **Display / H1** (700, `44px/48px` mobile → `64px/68px` desktop, tracking `-0.01em`→`-0.02em`): Hero heading only.
- **Headline / H2** (600, `36px/43px` mobile → `44px/54px` desktop): Section headings, always `font-display`, always paired with a `SectionEyebrow` above it.
- **Title / H3** (600, `18–24px`, `24–31px` line-height): Card and sub-section titles.
- **Body** (400, `15–20px`, `20–32px` line-height, `text-body` color): Reading copy; long-form paragraphs cap around `640–840px` measure.
- **Label / Eyebrow** (500, `12px/16px`, tracking `0.06–0.1em`, uppercase, `font-mono`): Section numbering (`01 / Diagnóstico`), form labels, footer legal links, "Demuestra:" tags.

### Named Rules
**The Numbered Index Rule.** Every major section on the long-form pages opens with a `NN / label` mono eyebrow via the shared `SectionEyebrow` component — mobile shows a short label, desktop shows the long form. The numbering is sequential and meaningful (it mirrors an executive report's table of contents); it is not decorative chrome.

## Layout

The `container` utility is redefined (not Tailwind's default): `width: min(100% - 2.5rem, 75rem)`, i.e. a fluid width with a fixed `2.5rem` (40px) side margin up to a `1200px` (`75rem`) cap, and no separate inline padding — the margin *is* the gutter.

Section vertical rhythm is consistently `py-12` (48px) on mobile, stepping up to `py-16` / `py-[64px]` / `py-32` on desktop depending on section weight (hero and CTA/FAQ sections get the most air). Section-internal stacks use an 8px-based gap scale (`gap-2`, `gap-3`, `gap-4`, `gap-6`, `gap-8`).

Grids are content-driven rather than a fixed 12-column system: two-up card grids (`md:grid-cols-2`) for comparisons, four-up for process steps, and one asymmetric `grid-cols-[325fr_333fr_333fr]` / `[325fr_666fr]` split for the diagnosis detail panel. Mobile is always a single flex column; the grid only activates at `md`.

## Elevation & Depth

The system is flat at rest. Shadows are not a depth layer here — they are a single, deliberate mobile-only affordance that makes the primary CTA button read as tappable above the fold on small screens (`shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]`), and are explicitly removed at `md:` (`md:shadow-none`). Desktop conveys hierarchy entirely through the warm-tint/surface background alternation and hairline borders, never through shadow.

### Shadow Vocabulary
- **cta-mobile** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`): Primary CTA buttons on mobile only. Removed at `md`.
- **dropdown** (`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)`): Header services submenu popover only — the one persistent-shadow UI element, justified because it floats above content.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. A shadow only ever appears where an element must visually detach from the page flow (a floating popover, a mobile-only tap target) — never as ambient card styling.

## Shapes

Corners are a signature near-square `2px` radius (`rounded-[2px]`) across buttons, cards, inputs, and panels — deliberately not the soft `8–16px` radius common to SaaS UI. The one exception is fully circular elements (the small accent-soft bullet dots in list items). Borders, where present, are always the full 1px `line` hairline on all sides; a thick single-side accent border or a border that clashes with the corner radius is a deviation, not a variant (fixed during this documentation pass — see Do's and Don'ts).

## Components

### Buttons
- **Shape:** `rounded-[2px]`, no exceptions.
- **Primary (`default`):** `bg-accent` (Signal Indigo) / white text, hover → `bg-accent-soft`.
- **Soft:** `bg-accent-soft` / `text-accent-fg`, with a faint `shadow-[0_1px_1px_rgba(0,0,0,0.05)]`, hover → `bg-accent`.
- **Outline:** `border border-line`, `bg-surface`, hover → `border-accent`.
- **Ghost:** transparent, hover → `bg-black/5`.
- **Sizes:** `sm` / `md` / `lg` step only in horizontal padding (`px-4` → `px-8`); text size stays constant at `text-base`.
- **Full-width mobile:** primary CTAs go `w-full` on mobile and shrink to `w-auto` at `md`, gaining the mobile-only shadow described above.

### Cards / Containers
- **Corner Style:** `rounded-[2px]`.
- **Background:** Alternates between `surface` (white) and `warm-paper-tint` (`#f1ede5`) to create rhythm between sibling cards or between a card and its section background — never both tinted and bordered with an accent color.
- **Shadow Strategy:** None (see Elevation & Depth). Depth comes from the background alternation and the hairline border alone.
- **Border:** `border border-line` on all four sides. Never a single-side accent border — that pattern was in the code as of this writing and has been removed as an anti-pattern (see Do's and Don'ts).
- **Internal Padding:** `p-5`/`p-6` mobile, stepping to `p-8` on desktop for larger panels.

### Inputs / Fields
- **Style:** `rounded-[2px]`, `border border-line`, `bg-surface`, `px-3 py-2`.
- **Focus:** `outline-none` with `focus:border-accent` — the border itself becomes the focus indicator, no glow or ring.
- **Labels:** `font-display font-semibold text-sm`, always paired 1:1 above the field.

### Navigation
- **Header:** Sticky, `border-b border-line`, `bg-background/95` with `backdrop-blur-[6px]`. Links are `font-display font-semibold uppercase` with `tracking-[0.05em]` in `text-nav`, hover → `text-foreground`. The services submenu is the one popover in the system and is the one place a shadow persists on desktop.
- **Footer:** Two-tone — a solid `bg-line` strip with a centered indigo accent tab on mobile, an off-white (`#f1ede5`) panel on desktop. Legal links use the mono label treatment at a smaller size on mobile, body font on desktop.

### Section Eyebrow (signature component)
Every long-form section opens with `SectionEyebrow`: a mono, uppercase, tracked label in the `NN / label` format, indigo-soft on the number, muted on the label text. Mobile shows a short label variant; desktop shows the long form. This is the system's signature wayfinding device — see the Named Rules under Typography.

## Do's and Don'ts

### Do:
- **Do** keep every border at the 1px `line` hairline. Never introduce a heavier or differently colored border.
- **Do** use `rounded-[2px]` on every card, button, panel, and input — no larger radii.
- **Do** alternate `surface` / `warm-paper-tint` backgrounds between sibling cards for rhythm instead of adding shadows or accent borders.
- **Do** keep Signal Indigo reserved for the single most important action or link on a given view.
- **Do** keep the mobile CTA shadow but remove it at `md:` — shadow is a mobile affordance, not a desktop depth layer.

### Don't:
- **Don't** add a thick single-side accent border (`border-l-4`, `border-t-2`) to a card, list item, or callout — this read as an AI-generated-UI tell and was removed from [ContactForm.tsx](src/components/sections/ContactForm.tsx#L23), [Sprint.tsx](src/components/sections/Sprint.tsx#L59), and [Encaje.tsx](src/components/sections/Encaje.tsx#L11) during this documentation pass; a full `border border-line` now carries the same emphasis.
- **Don't** combine a colored accent border with `rounded-[2px]` corners — the two effects clash visually; use the hairline border or the background tint instead.
- **Don't** introduce shadows as ambient card depth. Shadow is reserved for the mobile CTA affordance and the header's floating submenu only.
- **Don't** fabricate testimonials, customer logos, or benchmark numbers — none exist yet per `PRODUCT.md`.
