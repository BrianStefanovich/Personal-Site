/* Method diagram: 6 connected circular nodes in a flowing path.
   Inspired by the connected-circles aesthetic in docs/ideas. */

type MethodDiagramProps = {
  activeStep?: number
}

const STEPS = ['01', '02', '03', '04', '05', '06']

export function MethodDiagram({ activeStep = -1 }: MethodDiagramProps) {
  const positions = [
    { x: 48, y: 80 },
    { x: 144, y: 40 },
    { x: 240, y: 80 },
    { x: 336, y: 40 },
    { x: 432, y: 80 },
    { x: 480, y: 40 },
  ]

  return (
    <svg
      viewBox="0 0 560 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: 'auto', maxWidth: '560px' }}
    >
      {/* Connecting path through all nodes */}
      <path
        d="M48,80 C80,80 112,40 144,40 C176,40 208,80 240,80 C272,80 304,40 336,40 C368,40 400,80 432,80 C448,80 464,60 480,40"
        stroke="var(--color-outline)"
        strokeWidth="1"
        fill="none"
      />

      {/* Active path highlight */}
      {activeStep >= 0 && (
        <path
          d="M48,80 C80,80 112,40 144,40 C176,40 208,80 240,80 C272,80 304,40 336,40 C368,40 400,80 432,80 C448,80 464,60 480,40"
          stroke="var(--color-tertiary)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="560"
          strokeDashoffset={560 - (560 * ((activeStep + 1) / STEPS.length))}
          opacity="0.6"
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
              r="20"
              fill={isActive ? 'rgba(61,219,217,0.12)' : 'rgba(28,27,27,0.9)'}
              stroke={isActive ? 'var(--color-tertiary)' : isPast ? 'var(--color-outline)' : 'var(--color-outline-muted)'}
              strokeWidth="1"
            />
            <text
              x={p.x}
              y={p.y + 4}
              fill={isActive ? 'var(--color-tertiary)' : isPast ? 'var(--color-muted)' : 'var(--color-outline)'}
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
