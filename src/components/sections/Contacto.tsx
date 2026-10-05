import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/contact';
import { useState, type ReactNode, type SyntheticEvent } from 'react';

const { contacto } = es.home;
const { form } = contacto;

const fieldClass =
	'block w-full rounded-lg border border-strong bg-page px-5 text-lg text-ink focus-visible:outline-(--focus) focus-visible:-outline-offset-4';

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: ReactNode }) {
	return (
		<div>
			<label htmlFor={id} className="mb-2 block text-base">
				{label}
				{required && (
					<span aria-hidden="true" className="ml-1 text-link">
						*
					</span>
				)}
			</label>
			{children}
		</div>
	);
}

export default function Contacto() {
	const [sent, setSent] = useState(false);

	function sendByEmail(event: SyntheticEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const lines = [
			`${form.name}: ${data.get('name')}`,
			`${form.email}: ${data.get('email')}`,
			`${form.phone}: ${data.get('phone') || '-'}`,
			`Comunicaciones comerciales: ${data.get('marketing') ? 'Sí' : 'No'}`,
			'',
			String(data.get('message')),
		];
		window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
		setSent(true);
	}

	return (
		<Section id="contacto">
			<div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-x-16">
				<div>
					<SectionHeading eyebrow={contacto.eyebrow} title={contacto.headline} subhead={contacto.subhead} />
					<p className="reveal measure mt-4 text-base md:text-lg">{contacto.intro}</p>
					<div className="reveal mt-8">
						<p className="label-mono text-sm text-link">{contacto.directLabel}</p>
						<a href={CONTACT_EMAIL_HREF} className="mt-2 inline-flex min-h-11 items-center text-lg underline underline-offset-4 hover:text-link">
							{CONTACT_EMAIL}
						</a>
					</div>
				</div>

				<form onSubmit={sendByEmail} className="max-w-xl">
					<div className="space-y-5">
						<Field id="contact-name" label={form.name} required>
							<input id="contact-name" name="name" type="text" autoComplete="name" required className={`${fieldClass} h-11`} />
						</Field>
						<Field id="contact-email" label={form.email} required>
							<input id="contact-email" name="email" type="email" autoComplete="email" required className={`${fieldClass} h-11`} />
						</Field>
						<Field id="contact-phone" label={form.phone}>
							<input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={`${fieldClass} h-11`} />
						</Field>
						<Field id="contact-message" label={form.message} required>
							<textarea id="contact-message" name="message" required className={`${fieldClass} h-36 resize-y py-2.5`} />
						</Field>
					</div>

					<div className="mt-6 space-y-4 text-base leading-6">
						<label className="flex items-start gap-3">
							<input type="checkbox" name="consent" required className="mt-0.5 size-5 shrink-0 accent-blueprint" />
							<span>{form.consentData}</span>
						</label>
						<label className="flex items-start gap-3">
							<input type="checkbox" name="marketing" className="mt-0.5 size-5 shrink-0 accent-blueprint" />
							<span>{form.consentMarketing}</span>
						</label>
					</div>

					<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
						<button
							type="submit"
							className="min-h-11 rounded-card bg-blueprint px-8 py-3 font-display text-lg font-bold text-porcelain transition hover:brightness-110 active:brightness-95"
						>
							{form.submit}
						</button>
						<p role="status" className="text-sm text-muted">
							{sent && (
								<>
									{form.sent}{' '}
									<a href={CONTACT_EMAIL_HREF} className="underline underline-offset-4">
										{CONTACT_EMAIL}
									</a>
									.
								</>
							)}
						</p>
					</div>
				</form>
			</div>
		</Section>
	);
}
