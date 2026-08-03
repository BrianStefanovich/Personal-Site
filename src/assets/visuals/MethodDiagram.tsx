/* Method diagram: 4 connected circular nodes in a flowing path. */

type MethodDiagramProps = {
  activeStep?: number
}

const STEPS = ['01', '02', '03', '04']

export function MethodDiagram({ activeStep = -1 }: MethodDiagramProps) {
  const positions = [
    { x: 48, y: 60 },
    { x: 176, y: 30 },
    { x: 304, y: 60 },
    { x: 432, y: 30 },
  ]

  const pathD = 'M48,60 C90,60 134,30 176,30 C218,30 262,60 304,60 C346,60 390,30 432,30'
  const pathLength = 480

  return (
    <svg
      viewBox="0 0 480 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: 'auto', maxWidth: '480px' }}
    >
      {/* Connecting path through all nodes */}
      <path d={pathD} stroke="var(--color-border)" strokeWidth="1" fill="none" />

      {/* Active path highlight */}
      {activeStep >= 0 && (
        <path
          d={pathD}
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength - pathLength * ((activeStep + 1) / STEPS.length)}
          opacity="0.7"
        />
      )}

      {STEPS.map((step, i) => {
        const p = positions[i]
        if (!p) return null
        const isActive = i === activeStep
        const isPast = i < activeStep
        return (
          <g key={step}>
            <circle
              cx={p.x}
              cy={p.y}
              r="18"
              fill={isActive ? 'color-mix(in srgb, var(--color-primary) 10%, transparent)' : 'var(--color-card)'}
              stroke={isActive ? 'var(--color-primary)' : isPast ? 'var(--color-tertiary)' : 'var(--color-border)'}
              strokeWidth="1.5"
            />
            <text
              x={p.x}
              y={p.y + 4}
              fill={isActive ? 'var(--color-primary)' : isPast ? 'var(--color-tertiary)' : 'var(--color-muted-foreground)'}
              fontFamily="var(--font-mono)"
              fontSize="11"
              fontWeight="500"
              textAnchor="middle"
            >
              {step}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
