import { LogoSignature } from '@/components/Logo';
import { es } from '@/i18n/es';
import { LINKEDIN_URL } from '@/lib/contact';

const { footer, nav } = es;
const serviceLinks = es.home.servicios.items.map((item) => ({ label: item.navLabel, href: item.path }));

function LinkColumn({ label, links }: { label: string; links: readonly { label: string; href: string }[] }) {
	return (
		<nav aria-label={label}>
			<p className="label-mono text-sm text-muted">{label}</p>
			<ul className="mt-2">
				{links.map((link) => (
					<li key={link.href}>
						<a href={link.href} className="inline-flex min-h-11 items-center text-base hover:text-link">
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
		<footer className="frame-pad bg-page pb-10 pt-12 text-ink max-sm:pb-28 md:pt-16">
			<div className="grid gap-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,3fr)_minmax(0,3fr)]">
				<div className="flex flex-col items-start gap-4 md:col-span-2 lg:col-span-1">
					<LogoSignature alt={nav.name} />
					<a
						href={LINKEDIN_URL}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={es.home.contacto.linkedinLabel}
						className="mt-2 inline-flex size-11 items-center justify-center rounded-full text-link shadow-[inset_0_0_0_2px_var(--color-blueprint)] transition hover:brightness-125"
					>
						<svg
							aria-hidden="true"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
							<rect width="4" height="12" x="2" y="9" />
							<circle cx="4" cy="4" r="2" />
						</svg>
					</a>
				</div>
				<LinkColumn label={footer.servicesLabel} links={serviceLinks} />
				<LinkColumn label={footer.resourcesLabel} links={footer.resources} />
			</div>

			<div className="label-mono mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted md:mt-16 md:flex-row md:items-center md:justify-between md:gap-6">
				<p>{footer.attributes.join(' · ')}</p>
				<p>{footer.tagline}</p>
				<p>{footer.copyright}</p>
			</div>
		</footer>
	);
}
