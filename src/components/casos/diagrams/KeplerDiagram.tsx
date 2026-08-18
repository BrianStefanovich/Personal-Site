/** Prototipo → plataforma: one node expanding into a multi-tenant service architecture. */
export function KeplerDiagram() {
	return (
		<svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden="true">
			<circle cx="36" cy="100" r="9" fill="var(--color-carbon)" />
			<text x="36" y="126" textAnchor="middle" fill="var(--color-graphite)" className="font-mono text-[9px] uppercase tracking-wide">
				Prototipo
			</text>

			<path d="M45,100 H150" stroke="var(--color-fog)" />

			<rect x="150" y="86" width="44" height="28" rx="6" stroke="var(--color-blueprint)" strokeWidth="1.5" fill="none" />

			<path d="M194,100 H222" stroke="var(--color-blueprint)" strokeWidth="1.5" />
			<path d="M222,100 L270,50" stroke="var(--color-fog)" />
			<path d="M222,100 H270" stroke="var(--color-fog)" />
			<path d="M222,100 L270,150" stroke="var(--color-fog)" />

			<rect x="270" y="34" width="94" height="32" rx="6" stroke="var(--color-fog)" fill="none" />
			<rect x="270" y="84" width="94" height="32" rx="6" stroke="var(--color-fog)" fill="none" />
			<rect x="270" y="134" width="94" height="32" rx="6" stroke="var(--color-fog)" fill="none" />

			<text x="317" y="54" textAnchor="middle" fill="var(--color-steel)" className="font-mono text-[8px] uppercase tracking-wide">
				Tenant A
			</text>
			<text x="317" y="104" textAnchor="middle" fill="var(--color-steel)" className="font-mono text-[8px] uppercase tracking-wide">
				Tenant B
			</text>
			<text x="317" y="154" textAnchor="middle" fill="var(--color-steel)" className="font-mono text-[8px] uppercase tracking-wide">
				Tenant C
			</text>

			<text x="172" y="182" textAnchor="middle" fill="var(--color-graphite)" className="font-mono text-[9px] uppercase tracking-wide">
				Plataforma multi-tenant
			</text>
		</svg>
	);
}
