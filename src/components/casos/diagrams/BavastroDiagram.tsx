const STAGES = ['Bodega', 'Catálogo', 'Publicación', 'Remate', 'Puja'];
const X = [30, 115, 200, 285, 370];

/** Un artículo avanzando por el flujo completo: bodega → catálogo → publicación → remate → puja. */
export function BavastroDiagram() {
	return (
		<svg viewBox="0 0 400 160" className="h-full w-full" aria-hidden="true">
			<path d={`M${X[0]},80 H${X[4]}`} stroke="var(--color-fog)" />

			{X.slice(0, -1).map((x, i) => (
				<path key={x} d={`M${(x + X[i + 1]) / 2 - 4},74 L${(x + X[i + 1]) / 2 + 4},80 L${(x + X[i + 1]) / 2 - 4},86`} stroke="var(--color-steel)" fill="none" />
			))}

			{X.map((x, i) => (
				<circle
					key={x}
					cx={x}
					cy="80"
					r="9"
					fill={i === X.length - 1 ? 'var(--color-blueprint)' : 'var(--color-porcelain)'}
					stroke={i === X.length - 1 ? 'none' : 'var(--color-graphite)'}
					strokeWidth="1.5"
				/>
			))}

			{STAGES.map((stage, i) => (
				<text
					key={stage}
					x={X[i]}
					y="106"
					textAnchor="middle"
					fill={i === X.length - 1 ? 'var(--color-blueprint)' : 'var(--color-graphite)'}
					className="font-mono text-[9px] uppercase tracking-wide"
				>
					{stage}
				</text>
			))}
		</svg>
	);
}
