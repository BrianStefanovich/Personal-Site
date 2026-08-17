import { useState, type SubmitEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { Translations } from '@/i18n';

const fieldClass =
	'w-full rounded-[2px] border border-line bg-surface px-3 py-2 text-[15px] leading-6 text-foreground outline-none focus:border-accent';
const fieldErrorClass = 'border-error focus:border-error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormProps {
	content: Translations['contactoPage']['form'];
}

export default function ContactForm({ content: contacto }: ContactFormProps) {
	const [submitted, setSubmitted] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});

	function validate(data: FormData) {
		const nextErrors: Record<string, string> = {};
		for (const field of contacto.textFields) {
			const value = String(data.get(field.name) ?? '').trim();
			if (field.required && !value) {
				nextErrors[field.name] = contacto.errors.required;
			} else if (field.type === 'email' && value && !EMAIL_PATTERN.test(value)) {
				nextErrors[field.name] = contacto.errors.email;
			}
		}
		return nextErrors;
	}

	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const nextErrors = validate(data);
		setErrors(nextErrors);

		if (Object.keys(nextErrors).length > 0) {
			const firstInvalid = contacto.textFields.find((field) => nextErrors[field.name]);
			if (firstInvalid) document.getElementById(firstInvalid.name)?.focus();
			return;
		}

		// TODO: connect to a form endpoint (Formspree/Web3Forms) once the backend is chosen.
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<section id="formulario" className="container py-12 md:py-[64px]" aria-live="polite">
				<div className="flex flex-col items-start gap-3 rounded-[2px] border border-line bg-[#f1ede5] p-6 md:max-w-[640px]">
					<CheckCircle2 aria-hidden size={28} className="text-accent" />
					<h2 className="font-display text-xl leading-7 font-semibold text-foreground">{contacto.submittedHeading}</h2>
					<p className="text-[15px] leading-6 text-body">{contacto.submitted}</p>
				</div>
			</section>
		);
	}

	return (
		<section id="formulario" className="container flex flex-col gap-8 py-12 md:grid md:grid-cols-2 md:gap-16 md:py-[64px]">
			<div className="flex flex-col gap-4">
				<h2 className="font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:text-[44px] md:leading-[54px]">
					{contacto.heading}
				</h2>
				<p className="text-[17px] leading-7 text-body">{contacto.body}</p>
				<p className="rounded-[2px] border border-line bg-[#f1ede5] p-5 text-sm leading-6 text-body">
					{contacto.info}
				</p>
			</div>

			<form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
				{Object.keys(errors).length > 0 && (
					<p role="alert" className="text-sm leading-5 font-semibold text-error">
						{contacto.errors.summary}
					</p>
				)}

				{contacto.textFields.slice(0, 4).map((field) => (
					<div key={field.name} className="flex flex-col gap-1">
						<label htmlFor={field.name} className="font-display text-sm leading-5 font-semibold text-foreground">
							{field.label}
						</label>
						<input
							id={field.name}
							name={field.name}
							type={field.type}
							required={field.required}
							autoComplete={field.autoComplete}
							aria-invalid={Boolean(errors[field.name])}
							aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
							className={errors[field.name] ? `${fieldClass} ${fieldErrorClass}` : fieldClass}
						/>
						{errors[field.name] && (
							<p id={`${field.name}-error`} role="alert" className="text-[13px] leading-5 text-error">
								{errors[field.name]}
							</p>
						)}
					</div>
				))}

				<fieldset className="flex flex-col gap-2">
					<legend className="font-display text-sm leading-5 font-semibold text-foreground">
						{contacto.needsLabel}
					</legend>
					{contacto.needsOptions.map((option) => (
						<label key={option.value} className="flex items-start gap-3 text-[15px] leading-6 text-body">
							<input
								type="radio"
								name="necesidad"
								value={option.value}
								className="mt-1 size-4 shrink-0 accent-[var(--color-accent)]"
							/>
							{option.label}
						</label>
					))}
				</fieldset>

				<div className="flex flex-col gap-1">
					<label
						htmlFor={contacto.textareas[0].name}
						className="font-display text-sm leading-5 font-semibold text-foreground"
					>
						{contacto.textareas[0].label}
					</label>
					<textarea id={contacto.textareas[0].name} name={contacto.textareas[0].name} rows={4} className={fieldClass} />
				</div>

				<details className="group rounded-[2px] border border-line">
					<summary className="cursor-pointer px-4 py-3 font-display text-sm leading-5 font-semibold text-accent underline underline-offset-2 select-none">
						{contacto.moreDetails}
					</summary>
					<div className="flex flex-col gap-4 border-t border-line p-4">
						{contacto.textFields.slice(4).map((field) => (
							<div key={field.name} className="flex flex-col gap-1">
								<label htmlFor={field.name} className="font-display text-sm leading-5 font-semibold text-foreground">
									{field.label}
								</label>
								<input
									id={field.name}
									name={field.name}
									type={field.type}
									required={field.required}
									autoComplete={field.autoComplete}
									className={fieldClass}
								/>
							</div>
						))}

						{contacto.textareas.slice(1).map((field) => (
							<div key={field.name} className="flex flex-col gap-1">
								<label htmlFor={field.name} className="font-display text-sm leading-5 font-semibold text-foreground">
									{field.label}
								</label>
								<textarea id={field.name} name={field.name} rows={4} className={fieldClass} />
							</div>
						))}

						{contacto.trailingFields.map((field) => (
							<div key={field.name} className="flex flex-col gap-1">
								<label htmlFor={field.name} className="font-display text-sm leading-5 font-semibold text-foreground">
									{field.label}
								</label>
								<input
									id={field.name}
									name={field.name}
									type={field.type}
									required={field.required}
									autoComplete={field.autoComplete}
									className={fieldClass}
								/>
							</div>
						))}
					</div>
				</details>

				<Button type="submit" full className="mt-2">
					{contacto.submit}
				</Button>

				<p className="text-[13px] leading-5 text-muted">{contacto.disclaimer}</p>
			</form>
		</section>
	);
}

