/* Pareto-inspired bubble cluster for the Differentiator section.
   Based on docs/ideas: scattered circles of varying sizes. */

export function DifferentiatorVisual() {
  const circles = [
    { cx: 160, cy: 160, r: 60, fill: 'rgba(15,98,254,0.18)', stroke: 'var(--color-primary)', sw: 1 },
    { cx: 230, cy: 130, r: 32, fill: 'rgba(61,219,217,0.08)', stroke: 'var(--color-tertiary)', sw: 1 },
    { cx: 100, cy: 220, r: 28, fill: 'transparent', stroke: 'var(--color-outline)', sw: 1 },
    { cx: 270, cy: 200, r: 22, fill: 'transparent', stroke: 'var(--color-outline)', sw: 1 },
    { cx: 195, cy: 250, r: 16, fill: 'transparent', stroke: 'var(--color-outline)', sw: 0.8 },
    { cx: 130, cy: 100, r: 14, fill: 'transparent', stroke: 'var(--color-outline)', sw: 0.8 },
    { cx: 290, cy: 150, r: 10, fill: 'transparent', stroke: 'var(--color-outline-muted)', sw: 0.8 },
    { cx: 80,  cy: 155, r: 8,  fill: 'transparent', stroke: 'var(--color-outline-muted)', sw: 0.8 },
    { cx: 240, cy: 260, r: 6,  fill: 'transparent', stroke: 'var(--color-outline-muted)', sw: 0.6 },
    { cx: 310, cy: 110, r: 5,  fill: 'transparent', stroke: 'var(--color-outline-muted)', sw: 0.6 },
    { cx: 65,  cy: 195, r: 4,  fill: 'transparent', stroke: 'var(--color-outline-muted)', sw: 0.6 },
  ]

  return (
    <svg
      viewBox="0 0 360 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', maxWidth: '360px', height: 'auto' }}
    >
      {circles.map((c, i) => (
        <circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill={c.fill}
          stroke={c.stroke}
          strokeWidth={c.sw}
        />
      ))}
      {/* Bracket annotation — from docs/ideas Pareto reference */}
      <line x1="295" y1="90" x2="295" y2="270" stroke="var(--color-outline)" strokeWidth="1" />
      <line x1="290" y1="90"  x2="295" y2="90"  stroke="var(--color-outline)" strokeWidth="1" />
      <line x1="290" y1="270" x2="295" y2="270" stroke="var(--color-outline)" strokeWidth="1" />
      <text x="305" y="160" fill="var(--color-muted)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="0.06em">CRITERIO</text>
    </svg>
  )
}
