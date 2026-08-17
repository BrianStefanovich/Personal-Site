import { useState } from 'react';

import { Button } from '@/components/ui/button';
import type { Translations } from '@/i18n';

const fieldClass =
	'w-full rounded-[2px] border border-line bg-surface px-3 py-2 text-[15px] leading-6 text-foreground outline-none focus:border-accent';

interface ContactFormProps {
	content: Translations['contactoPage']['form'];
}

export default function ContactForm({ content: contacto }: ContactFormProps) {
	const [submitted, setSubmitted] = useState(false);

	return (
		<section id="formulario" className="container flex flex-col gap-8 py-12 md:grid md:grid-cols-2 md:gap-16 md:py-[64px]">
			<div className="flex flex-col gap-4">
				<h2 className="font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:text-[44px] md:leading-[54px]">
					{contacto.heading}
				</h2>
				<p className="text-[17px] leading-7 text-body">{contacto.body}</p>
				<p className="rounded-[2px] border-l-4 border-accent-soft bg-[#f1ede5] p-5 text-sm leading-6 text-body">
					{contacto.info}
				</p>
			</div>

			<form
				onSubmit={(event) => {
					event.preventDefault();
					// TODO: connect to a form endpoint (Formspree/Web3Forms) once the backend is chosen.
					setSubmitted(true);
				}}
				className="flex flex-col gap-4"
			>
				{contacto.textFields.map((field) => (
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

				{contacto.textareas.map((field) => (
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

				<Button type="submit" full className="mt-2">
					{contacto.submit}
				</Button>

				<p aria-live="polite" className="text-[13px] leading-5 text-muted">
					{submitted ? contacto.submitted : contacto.disclaimer}
				</p>
			</form>
		</section>
	);
}
