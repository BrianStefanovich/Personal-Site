# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: founders, business owners, and engineering leaders (CTOs, Tech Leads) in Chile and international remote clients, who either run a system that has become costly/risky to change, are turning a business opportunity into software, or need senior technical judgment without hiring a full-time architect.

## Product Purpose

Personal consulting/architecture brand site for Brian Stefanovich (software engineer and Technical Leader). It is a single-page landing whose sole commercial goal is getting a qualified prospect to book a free 30-minute conversation. The page must earn three micro-conversions first: "this problem sounds like mine," "Brian seems to understand this kind of situation," and "I can talk to him without a high-pressure sales process."

## Positioning

Senior software architecture, consultancy, modernization/integration, and fractional technical leadership — diagnosis before prescription, explicit trade-offs, and every recommendation tied to a business consequence. Core message: "Mejor software empieza con mejores decisiones." Brand promise: "Claridad antes que complejidad." Not a software factory or dev agency; a senior consultant who connects technical and business decisions.

Three service lines correspond to three visitor situations:
1. Sistemas existentes — the system is holding the business back (modernization/refactor/replace decisions).
2. Nuevos negocios basados en software — an opportunity that needs to become software (discovery, MVP, architecture).
3. Arquitecto de software fraccional — recurring senior technical judgment without a full-time hire.

## Operating Context

Landing at `/` with anchor navigation (Servicios → `/servicios` · Cómo trabajo · Casos → `/cases` · Sobre Brian) plus a persistent booking CTA ("Agendar 30 minutos" in the header, "Agendar conversación de 30 minutos" in hero and contact). The landing routes each visitor situation to its own page: `/servicios/sistemas-existentes`, `/servicios/nuevos-negocios`, `/servicios/arquitecto-fraccional`, plus `/cases` and `/cases/[slug]`. Full narrative flow and creative direction: [docs/contenido_website.md](docs/contenido_website.md) and [docs/guia_website.md](docs/guia_website.md); the design/conversion audit that drove the current structure is `Informe_diseno_y_conversion_sitio_Brian_Stefanovich.md`. Future evolution (not yet built) may add `/insights/[articulo]` and `/sobre-mi`.

The site is built with Astro (static output), React islands, Tailwind CSS, and shadcn-compatible UI primitives. Copy lives in a typed i18n dictionary (`src/i18n/es.ts`) read via `getTranslations()`. Spanish (`es`) is the current default locale served unprefixed at `/`.

## Capabilities and Constraints

- Stack is already decided (existing codebase): Astro 7 (static output), @astrojs/react, @astrojs/sitemap, Tailwind CSS 4, class-variance-authority, lucide-react. Not an open decision.
- Contact is real: every booking CTA opens `ContactDrawer` (cal.com embed, `CAL_LINK` in `src/lib/contact.ts`), with `hi@brianstefanovich.com` as the email alternative. There is no contact form; do not add one unless it posts to a working endpoint. Without JavaScript, CTAs go to the public cal.com page.
- Events (`cta_click`, `service_route_open`, `service_page_view`, `case_open`, `calendar_select`, `email_click`) are declared with `data-track*` attributes and sent to GA4 by `src/lib/analytics.ts` when `PUBLIC_GA_MEASUREMENT_ID` is set in a production build.
- i18n is architected for multiple locales (add a dictionary file + register in `src/i18n/config.ts` + `astro.config.mjs`); an English (`en`) version is planned as durable scope, not just Spanish-only. Timing/priority of the English rollout is undecided.
- `PUBLIC_SITE_URL` must be set to the canonical production origin before build; `PUBLIC_GA_MEASUREMENT_ID` is optional (adds GA4 only in production output).

## Brand Commitments

Full brand system defined in [docs/manual_marca.md](docs/manual_marca.md); treat it as binding, not inspiration:

- Name/voice: "Brian Stefanovich — Arquitectura y Consultoría de Software." First-person singular voice ("yo diagnostico"), calmed/senior/specific tone, not an agency "nosotros." Sentence case for headlines/body; uppercase + JetBrains Mono reserved for technical labels (eyebrows, nav, footer attributes, phase numbers) only. Natural Latin American Spanish, minimal spanglish, no emojis.
- Vocabulary to favor: claridad, decisión, arquitectura, sistema, restricción, riesgo, tradeoff, evolución, hoja de ruta, evidencia, mantenibilidad, resultado. Vocabulary to avoid: disrupción, de vanguardia, world-class, 360°, transformación digital, solución escalable, sinergia, magia, garantizado, a prueba de futuro.
- Logo: monochromatic linear glyph + "Brian Stefanovich" wordmark in Montserrat 700; symbol vector in `src/components/logo-symbol-path.ts`.
- Color system: near-monochrome with two signature accents used asymmetrically — Carbon `#101311`, Graphite `#2A2F2C`, Steel `#717A75`, Fog `#D8DED9`, Porcelain `#F4F0E8`, Blueprint `#465CD4` (8%, action), Copper `#A65330` (2%, human consequence only, never equal weight to Blueprint).
- Typography: Montserrat 700 (all headlines), Open Sans 400 (body), JetBrains Mono 500 uppercase (technical labels only).
- Spacing/grid: 8px base unit, 12-column grid with 32px gutter, 90px page margins, 45px section vertical padding. Scale: 4·8·12·16·20·24·32·48·64px. Every section framed with a hairline (1px Fog top/right/left, 2px Fog bottom) — the recurring "technical schematic" motif. Corner radii: 8px small, 14px card/button default, 18px hero card, 9999px pill/circular. Cards use a 1px Fog inner hairline, never a shadow.
- Motion: calm and purposeful, never decorative or continuous — 200–450ms transitions (300ms ease default), no continuous rotation/loops, buttons brighten slightly on hover (no color change).
- Creative concept ("arquitectura visible"): the site should feel like a system being reasoned through — abstract technical diagrams, layers, nodes, alternative paths — never a futuristic tech page, creative agency, or generic corporate site.

## Evidence on Hand

- Full page copy already drafted in Spanish: [docs/contenido_website.md](docs/contenido_website.md).
- Creative/design direction already drafted: [docs/guia_website.md](docs/guia_website.md) (hero composition, animation timing, section-by-section intent).
- The only real photo in use is [public/images/brian-portrait.webp](public/images/brian-portrait.webp) (portrait in the About section). The logo symbol lives in `src/components/logo-symbol-path.ts`.
- **Published cases are Kepler Coach and RollKall**, written only from what Brian's CV documents. Bavastro is held back in `es.home.casos.pending` until Brian confirms his exact role and the state of the system. Do not fabricate client details, decisions, metrics, or architecture diagrams for cases; diagrams on the site are labeled "Esquema ilustrativo".

## Product Principles

1. Diagnosis before prescription — never open with a solution; open with understanding the business, system, and constraints.
2. Senior consultant, not a factory — every surface should read as judgment and trade-off reasoning, not a list of technologies or services.
3. Explicit trade-offs over false certainty — alternatives, costs, and consequences are named, not hidden behind confidence.
4. Low-risk first step — the entire page funnels toward one low-commitment action: a free 30-minute conversation.
5. Claridad antes que complejidad — clarity is the brand's single differentiator; never trade it for cleverness or decoration.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility practice (semantic structure, color contrast, keyboard/motion-reduction support implied by the calm-motion brand principle). Confirm a formal standard (e.g. WCAG 2.1 AA) if one is later required.
