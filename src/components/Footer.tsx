import { Logo } from '@/components/Logo';
import { es } from '@/i18n/es';
import { LINKEDIN_URL } from '@/lib/contact';

const { footer, nav } = es;

function LinkColumn({ label, links }: { label: string; links: readonly { label: string; href: string }[] }) {
	return (
		<nav aria-label={label}>
			<p className="label-mono text-sm text-link">{label}</p>
			<ul className="mt-2">
				{links.map((link) => (
					<li key={link.href}>
						<a href={link.href} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-link">
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default function Footer() {
	return (
		<footer className="surface-inverse section-y max-sm:pb-28">
			<div className="container">
				<div className="sheet px-5 py-8 md:p-10 lg:p-14">
					<div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:gap-x-16">
						<div>
							<Logo name={nav.name} descriptor={nav.descriptor} />
							<a
								href={LINKEDIN_URL}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={es.home.contacto.linkedinLabel}
								className="mt-6 inline-flex size-11 items-center justify-center rounded-full border-2 border-link text-link transition hover:brightness-125"
							>
								<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
									<rect width="4" height="12" x="2" y="9" />
									<circle cx="4" cy="4" r="2" />
								</svg>
							</a>
						</div>
						<LinkColumn label={footer.servicesLabel} links={footer.services} />
						<LinkColumn label={footer.resourcesLabel} links={footer.resources} />
					</div>

					<div className="label-mono mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-line pt-6 text-xs text-muted">
						<p>{footer.attributes.join(' · ')}</p>
						<p>
							{footer.tagline} · {footer.copyright}
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
