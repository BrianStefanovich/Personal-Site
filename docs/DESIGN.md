---
name: Blueprint Dark
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c3c6d8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c90a2'
  outline-variant: '#424656'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002979'
  primary-container: '#0f62fe'
  on-primary-container: '#f3f3ff'
  inverse-primary: '#0052dd'
  secondary: '#ffb1c3'
  on-secondary: '#66002d'
  secondary-container: '#ba0258'
  on-secondary-container: '#ffcbd6'
  tertiary: '#3ddbd9'
  on-tertiary: '#003736'
  tertiary-container: '#007d7c'
  on-tertiary-container: '#c8fffd'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174c'
  on-primary-fixed-variant: '#003da9'
  secondary-fixed: '#ffd9e0'
  secondary-fixed-dim: '#ffb1c3'
  on-secondary-fixed: '#3f0019'
  on-secondary-fixed-variant: '#8f0042'
  tertiary-fixed: '#63f8f6'
  tertiary-fixed-dim: '#3ddbd9'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504f'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  h3:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
  code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  base_unit: 8px
  gutter: 16px
  margin_mobile: 16px
  margin_desktop: 32px
  max_width: 1440px
---

## Brand & Style
The design system operates as a high-fidelity technical schematic rendered for low-light environments. It targets systems architects and developers who require a high-density, analytical workspace. The brand personality is precise, authoritative, and unsentimental.

The design style is **Technical Minimalist with a Digital Blueprint aesthetic**. It utilizes a dark mode foundation to reduce eye strain during deep work, emphasizing structural clarity through a strictly enforced 1px grid system. Visual interest is generated through functional color-coding rather than decorative elements, creating a "live documentation" atmosphere where every UI component feels like a node in a larger architectural map.

## Colors
This palette is rooted in a deep charcoal foundation to provide maximum contrast for functional accents.
- **Background**: #121212 serves as the canvas, featuring a subtle noise texture to simulate high-grade technical paper.
- **Surface**: #1E1E1E defines the boundaries of cards, panels, and floating containers, providing enough separation to maintain hierarchy without breaking the dark aesthetic.
- **Primary (Action)**: #0F62FE is the high-visibility blue used for interactive nodes, primary CTAs, and focus states.
- **Secondary (Legacy/Warning)**: #C00C5C identifies technical debt, legacy systems, or high-priority warnings.
- **Tertiary (Modern/Success)**: #3DDBD9 signals optimized paths, modern system nodes, and successful deployments.
- **Muted/Structural**: #666666 is used for the underlying 8px grid pattern, ASCII-inspired connectors, and 1px borders.

## Typography
The typography system balances geometric impact with utilitarian legibility.
- **Headings**: Montserrat provides a confident, structured frame for page titles and section headers.
- **Body**: Open Sans (serving as a widely available alternative to Google Sans) ensures long-form technical documentation is comfortable to read.
- **Labels & Data**: JetBrains Mono is the functional workhorse, used for status indicators, metadata, and ASCII connectors. All labels should be treated with a high degree of precision, often utilizing uppercase for smaller sizes to maintain a "draftsman" look.

## Layout & Spacing
The layout is governed by a **fixed 8px baseline grid**. All elements must align to this grid to maintain the schematic integrity.

- **Grid Background**: A persistent 1px dotted or solid grid should be visible on the #121212 background, colored at 10% opacity of the Muted color (#666666).
- **Desktop**: A 12-column system with 16px gutters. Panels are often fixed-width to simulate a modular dashboard.
- **Mobile**: Content collapses into a single column with 16px side margins. 
- **Connectors**: Use 1px #666666 lines to visually connect related cards or data points, mimicking architectural callouts.

## Elevation & Depth
In this design system, depth is communicated through **tonal layering and 1px borders** rather than shadows.
- **Level 0 (Base)**: #121212 with the background grid.
- **Level 1 (Containers)**: #1E1E1E with a 1px solid border of #666666. No box-shadows are permitted.
- **Level 2 (Popovers/Modals)**: #1E1E1E with a 1px solid border of #0F62FE (Primary) to indicate focus and priority. 
- **Indicators**: Connectivity is shown through "active" lines (1px Primary or Tertiary) that appear to "light up" against the dark background.

## Shapes
The shape language is strictly **Sharp (0px)**. All containers, buttons, inputs, and tags must have 90-degree corners to reinforce the technical, blueprint-inspired aesthetic. This lack of rounding emphasizes the precision of the underlying data and aligns with the monospaced typographic elements.

## Components
- **Buttons**: Rectangular with 1px borders. Primary buttons use a solid #0F62FE fill with white text. Ghost buttons use a 1px #666666 border and Primary text color.
- **Input Fields**: Background at #121212 with a 1px #666666 border. On focus, the border changes to #0F62FE. Labels are always JetBrains Mono, placed above the field.
- **Cards**: Surface color #1E1E1E with a 1px #666666 border. Card headers should be separated by a 1px horizontal line.
- **Status Chips**: Use JetBrains Mono text. Modern/Healthy systems use Tertiary (#3DDBD9) text with a subtle 10% opacity fill. Legacy/Error systems use Secondary (#C00C5C).
- **ASCII Connectors**: Use monospaced characters (e.g., `+---`, `|`, `>`) in the Muted color to indicate parent-child relationships between list items or nodes.
- **Lists**: Rows are separated by 1px solid lines (#666666) at 50% opacity.