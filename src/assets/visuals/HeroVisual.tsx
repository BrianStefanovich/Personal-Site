/* Visual inspired by: docs/ideas — tangled line becoming a clean single line.
   Represents the core concept: complexity → clarity.
   Rendered as pure SVG, no external images. */

export function HeroVisual() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      style={{ width: '100%', maxWidth: '480px', height: 'auto' }}
    >
      {/* Subtle glow orb behind the knot */}
      <circle cx="170" cy="180" r="120" fill="color-mix(in srgb, var(--color-primary) 6%, transparent)" />

      {/* The "knot" — tangled lines on the left, inspired by docs/ideas */}
      <g opacity="0.6" stroke="var(--color-muted-foreground)" strokeWidth="1" fill="none">
        <path d="M60,180 C80,140 130,100 150,130 C170,160 120,200 140,220 C160,240 200,200 180,170 C160,140 110,160 130,190 C150,220 200,210 190,180 C180,150 140,150 150,175 C160,200 190,190 185,175" strokeWidth="0.8" opacity="0.5"/>
        <path d="M80,160 C100,120 150,80 160,110 C170,140 130,180 145,205 C160,230 200,195 185,160 C170,125 120,145 140,170 C160,195 200,185 195,165" strokeWidth="0.8" opacity="0.5"/>
        <path d="M50,195 C70,155 120,115 145,145 C170,175 125,210 145,230 C165,250 205,215 190,185 C175,155 130,165 148,188 C166,211 200,200 192,180" strokeWidth="0.8" opacity="0.4"/>
        <path d="M90,170 C105,135 145,100 158,125 C171,150 135,185 150,208 C165,231 200,205 188,172 C176,139 135,152 152,178 C169,204 200,193 196,170" strokeWidth="0.8" opacity="0.4"/>
        <path d="M65,188 C85,148 135,108 155,138 C175,168 128,205 148,225 C168,245 204,210 186,178 C168,146 122,158 142,183 C162,208 198,196 192,174" strokeWidth="0.8" opacity="0.3"/>
      </g>

      {/* The vertical divider — the transformation axis */}
      <line x1="252" y1="40" x2="252" y2="320" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 4" />

      {/* The emergent clean line on the right */}
      <path
        d="M252,180 C290,180 320,180 340,175 C360,170 380,168 420,168"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Small node at the transition point */}
      <circle cx="252" cy="180" r="3" fill="var(--color-primary)" />
      <circle cx="252" cy="180" r="8" stroke="var(--color-primary)" strokeWidth="1" opacity="0.3" />

      {/* Labels */}
      <text x="130" y="310" fill="var(--color-muted-foreground)" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle" letterSpacing="0.08em">COMPLEJIDAD</text>
      <text x="360" y="155" fill="var(--color-primary)" fontFamily="var(--font-mono)" fontSize="10" textAnchor="middle" letterSpacing="0.08em">CLARIDAD</text>

      {/* Decorative small circles — Pareto-inspired, from docs/ideas */}
      <circle cx="100" cy="80" r="18" stroke="var(--color-border)" strokeWidth="1" opacity="0.6" />
      <circle cx="90"  cy="88" r="8"  stroke="var(--color-border)" strokeWidth="1" opacity="0.5" />
      <circle cx="115" cy="75" r="5"  stroke="var(--color-border)" strokeWidth="1" opacity="0.4" />
      <circle cx="200" cy="60" r="12" stroke="var(--color-border)" strokeWidth="1" opacity="0.5" />
      <circle cx="210" cy="70" r="4"  stroke="var(--color-border)" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}
