/** Delivery y modernización avanzando en paralelo, convergiendo periódicamente hacia .NET 8. */
export function RollkallDiagram() {
	return (
		<svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden="true">
			<path d="M20,60 H300 Q340,60 360,100" stroke="var(--color-blueprint)" strokeWidth="1.5" fill="none" />
			<path d="M20,140 H300 Q340,140 360,100" stroke="var(--color-fog)" strokeWidth="1.5" fill="none" />

			{[100, 180, 260].map((x) => (
				<line key={x} x1={x} y1="60" x2={x} y2="140" stroke="var(--color-fog)" strokeDasharray="2 3" />
			))}

			<circle cx="360" cy="100" r="9" fill="var(--color-carbon)" />

			<text x="20" y="42" fill="var(--color-blueprint)" className="font-mono text-[9px] uppercase tracking-wide">
				Delivery
			</text>
			<text x="20" y="160" fill="var(--color-steel)" className="font-mono text-[9px] uppercase tracking-wide">
				Modernización
			</text>
			<text x="360" y="124" textAnchor="middle" fill="var(--color-graphite)" className="font-mono text-[9px] uppercase tracking-wide">
				.NET 8
			</text>
		</svg>
	);
}
