import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/contact';

const { contactSection } = es.home;
const { hero } = es.home;

/** One real path: book a slot. Email stays as the alternative; there is no form that only looks like it sends. */
export default function ContactSection() {
	return (
		<Section id="contact" tone="inverse" contentClassName="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-x-16">
			<div className="flex flex-col gap-7">
				<h2 className="text-display">{contactSection.headline}</h2>
				<p className="text-lead">{contactSection.lead}</p>
				<p className="text-body max-w-[65ch] text-muted">{contactSection.intro}</p>
			</div>

			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<div>
						<CtaButton intent="other" location="contact">
							{contactSection.cta}
						</CtaButton>
					</div>
					<p className="text-sm leading-[1.5] text-muted">{hero.microcopy}</p>
				</div>
				<div className="flex flex-col gap-2 border-t border-line pt-6">
					<p className="label-mono text-sm text-muted">{contactSection.emailLabel}</p>
					<a
						href={CONTACT_EMAIL_HREF}
						data-track="email_click"
						data-track-location="contact"
						className="inline-flex min-h-11 items-center break-all font-display text-xl font-bold text-link hover:text-ink md:text-[1.5rem]"
					>
						{CONTACT_EMAIL}
					</a>
				</div>
			</div>
		</Section>
	);
}
