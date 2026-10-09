import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/contact';
import { useState, type ReactNode, type SyntheticEvent } from 'react';

const { contacto } = es.home;
const { form } = contacto;

const fieldClass =
	'block w-full rounded-lg border border-strong bg-transparent px-4 text-base text-ink placeholder:text-muted focus-visible:outline-(--focus) focus-visible:-outline-offset-2';

function Field({
	id,
	label,
	required,
	children,
	className,
}: {
	id: string;
	label: string;
	required?: boolean;
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={className}>
			<label htmlFor={id} className="label-mono mb-2 block text-sm tracking-[0.05em] text-muted">
				{label}
				{required && (
					<span aria-hidden="true" className="ml-1">
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
		<Section id="contacto" tone="inverse" contentClassName="grid gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-x-24">
			<div className="flex flex-col gap-7">
				<h2 className="text-display">{contacto.headline}</h2>
				<p className="text-lead">{contacto.lead}</p>
				<p className="text-body text-muted">{contacto.intro}</p>
				<div>
					<CtaButton intent="other">{contacto.cta}</CtaButton>
				</div>
				<div className="mt-4 flex flex-col gap-2 border-t border-line pt-6">
					<p className="label-mono text-sm text-muted">{contacto.directLabel}</p>
					<a
						href={CONTACT_EMAIL_HREF}
						className="inline-flex min-h-11 items-center font-display text-xl font-bold text-link hover:text-ink md:text-[1.6875rem]"
					>
						{CONTACT_EMAIL}
					</a>
				</div>
			</div>

			<form
				onSubmit={sendByEmail}
				className="flex flex-col gap-5 rounded-[18px] bg-card p-6 shadow-[inset_0_0_0_2px_var(--border-hairline)] md:p-10"
			>
				<div className="grid gap-4 sm:grid-cols-2">
					<Field id="contact-name" label={form.name} required>
						<input id="contact-name" name="name" type="text" autoComplete="name" required className={`${fieldClass} h-12`} />
					</Field>
					<Field id="contact-email" label={form.email} required>
						<input id="contact-email" name="email" type="email" autoComplete="email" required className={`${fieldClass} h-12`} />
					</Field>
				</div>
				<Field id="contact-phone" label={form.phone}>
					<input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={`${fieldClass} h-12`} />
				</Field>
				<Field id="contact-message" label={form.message} required>
					<textarea
						id="contact-message"
						name="message"
						required
						rows={5}
						placeholder={form.messagePlaceholder}
						className={`${fieldClass} resize-y py-3.5 leading-[1.6]`}
					/>
				</Field>

				<div className="flex flex-col gap-3 text-sm leading-[1.5] text-muted">
					<label className="flex items-start gap-3">
						<input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 accent-blueprint" />
						<span>{form.consentData}</span>
					</label>
					<label className="flex items-start gap-3">
						<input type="checkbox" name="marketing" className="mt-0.5 size-4 shrink-0 accent-blueprint" />
						<span>{form.consentMarketing}</span>
					</label>
				</div>

				<div className="mt-2 flex flex-col gap-4">
					<p id="contact-handoff" className="text-sm leading-[1.5] text-muted">
						{form.handoff}
					</p>
					<div className="flex flex-wrap items-center gap-x-6 gap-y-3">
						<button
							type="submit"
							aria-describedby="contact-handoff"
							className="min-h-12 whitespace-nowrap rounded-card bg-blueprint px-6 py-3 font-display text-lg font-bold text-porcelain transition hover:brightness-110 active:brightness-95"
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
				</div>
			</form>
		</Section>
	);
}
