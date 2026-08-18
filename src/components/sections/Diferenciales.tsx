import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';

const { doors } = es.home;

/** One small abstract linework glyph per door, echoing guia_website.md §8's diagram sketches. */
function DoorGlyph({ variant }: { variant: 0 | 1 | 2 }) {
	if (variant === 0) {
		return (
			<svg viewBox="0 0 96 64" className="h-14 w-20" aria-hidden="true">
				<rect x="4" y="8" width="60" height="14" rx="2" stroke="var(--color-fog)" fill="none" />
				<rect x="14" y="26" width="60" height="14" rx="2" stroke="var(--color-fog)" fill="none" />
				<rect x="24" y="44" width="60" height="14" rx="2" stroke="var(--color-blueprint)" strokeWidth="1.5" fill="none" />
			</svg>
		);
	}
	if (variant === 1) {
		return (
			<svg viewBox="0 0 96 64" className="h-14 w-20" aria-hidden="true">
				<circle cx="14" cy="32" r="4" fill="var(--color-carbon)" />
				<path d="M18,32 H40" stroke="var(--color-fog)" />
				<path d="M40,32 L70,12" stroke="var(--color-fog)" />
				<path d="M40,32 L70,32" stroke="var(--color-blueprint)" strokeWidth="1.5" />
				<path d="M40,32 L70,52" stroke="var(--color-fog)" />
				<circle cx="72" cy="12" r="3" fill="var(--color-steel)" />
				<circle cx="72" cy="32" r="3.5" fill="var(--color-blueprint)" />
				<circle cx="72" cy="52" r="3" fill="var(--color-steel)" />
			</svg>
		);
	}
	return (
		<svg viewBox="0 0 96 64" className="h-14 w-20" aria-hidden="true">
			<circle cx="14" cy="10" r="3" fill="var(--color-steel)" />
			<circle cx="14" cy="32" r="3" fill="var(--color-steel)" />
			<circle cx="14" cy="54" r="3" fill="var(--color-steel)" />
			<path d="M17,10 L64,30" stroke="var(--color-fog)" />
			<path d="M17,32 H64" stroke="var(--color-blueprint)" strokeWidth="1.5" />
			<path d="M17,54 L64,34" stroke="var(--color-fog)" />
			<circle cx="68" cy="32" r="4.5" fill="var(--color-blueprint)" />
		</svg>
	);
}

export default function Diferenciales() {
	return (
		<section id="servicios" className="border-b border-fog bg-porcelain py-20 md:py-28">
			<div className="container">
				<Reveal>
					<h2 className="max-w-2xl font-display text-3xl font-bold text-carbon md:text-4xl">{doors.headline}</h2>
				</Reveal>

				<div className="mt-12 grid gap-6 md:grid-cols-3">
					{doors.items.map((door, i) => (
						<Reveal key={door.number} delayMs={i * 80}>
							<div className="tech-frame group flex h-full flex-col rounded-md p-7 transition-colors hover:border-blueprint">
								<div className="flex items-start justify-between">
									<span className="eyebrow">{door.number}</span>
									<DoorGlyph variant={i as 0 | 1 | 2} />
								</div>

								<h3 className="mt-5 font-display text-xl font-bold leading-snug text-carbon">{door.tag}</h3>
								<p className="mt-3 text-sm leading-relaxed text-graphite">{door.body}</p>
								<p className="mt-3 text-sm font-semibold leading-relaxed text-carbon">{door.emphasis}</p>

								<div className="mt-6 flex-1" />

								<p className="eyebrow">{door.service}</p>
								<a
									href={door.href}
									className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blueprint"
								>
									{door.cta}
									<span
										aria-hidden="true"
										className="inline-block transition-transform duration-200 group-hover:translate-x-1"
									>
										→
									</span>
								</a>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
