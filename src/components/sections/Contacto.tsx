import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/contact';

const { contacto } = es.home;
const { hero } = es.home;

/** One real path: book a slot. Email stays as the alternative; there is no form that only looks like it sends. */
export default function Contacto() {
	return (
		<Section id="contacto" tone="inverse" contentClassName="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-x-24">
			<div className="flex flex-col gap-7">
				<h2 className="text-display">{contacto.headline}</h2>
				<p className="text-lead">{contacto.lead}</p>
				<p className="text-body max-w-[65ch] text-muted">{contacto.intro}</p>
			</div>

			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<div>
						<CtaButton intent="other" location="contact">
							{contacto.cta}
						</CtaButton>
					</div>
					<p className="text-sm leading-[1.5] text-muted">{hero.microcopy}</p>
				</div>
				<div className="flex flex-col gap-2 border-t border-line pt-6">
					<p className="label-mono text-sm text-muted">{contacto.emailLabel}</p>
					<a
						href={CONTACT_EMAIL_HREF}
						data-track="email_click"
						data-track-location="contact"
						className="inline-flex min-h-11 items-center break-all font-display text-xl font-bold text-link hover:text-ink md:text-[1.6875rem]"
					>
						{CONTACT_EMAIL}
					</a>
				</div>
			</div>
		</Section>
	);
}
