import { es } from '@/i18n/es';

const { footer } = es;

export default function Footer() {
	return (
		<footer className="tech-frame-dark border-t bg-carbon text-porcelain">
			<div className="container grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8">
				<div>
					<div className="flex items-center gap-2.5 font-display text-base font-bold">
						<img src="/images/logo-mark.svg" alt="" width={24} height={24} className="shrink-0 invert" />
						<span>{footer.name}</span>
					</div>
					<p className="mt-3 text-sm text-fog">{footer.tagline}</p>
					<p className="mt-2 font-display text-sm font-bold">{footer.promise}</p>
				</div>

				<div>
					<p className="eyebrow eyebrow-invert">{footer.servicesLabel}</p>
					<ul className="mt-4 space-y-2.5 text-sm text-fog">
						{footer.services.map((service) => (
							<li key={service.href}>
								<a href={service.href} className="transition-colors hover:text-blueprint">
									{service.label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div>
					<p className="eyebrow eyebrow-invert">Contacto</p>
					<div className="mt-4 flex flex-col gap-2.5 text-sm text-fog">
						<a href="#" className="transition-colors hover:text-blueprint">
							{footer.linkedin}
						</a>
						<a href="#" className="transition-colors hover:text-blueprint">
							{footer.email}
						</a>
					</div>
				</div>
			</div>

			<div className="tech-frame-dark border-t py-6">
				<div className="container text-xs text-fog/70">{footer.copyright}</div>
			</div>
		</footer>
	);
}
