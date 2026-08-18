import { onOpenContact, type ContactIntent } from '@/lib/contact';
import { es } from '@/i18n/es';
import { useEffect, useState } from 'react';

const { contact } = es;

type Step = 'situation' | 'schedule';

export default function ContactDrawer() {
	const [open, setOpen] = useState(false);
	const [intent, setIntent] = useState<ContactIntent>('other');
	const [step, setStep] = useState<Step>('situation');

	useEffect(
		() =>
			onOpenContact((incoming) => {
				setIntent(incoming);
				setStep(incoming === 'other' ? 'situation' : 'schedule');
				setOpen(true);
			}),
		[],
	);

	useEffect(() => {
		if (!open) return;
		document.documentElement.style.overflow = 'hidden';
		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', onKey);
		return () => {
			document.documentElement.style.overflow = '';
			window.removeEventListener('keydown', onKey);
		};
	}, [open]);

	if (!open) return null;

	const selected = contact.situations.find((situation) => situation.id === intent);

	return (
		<div className="fixed inset-0 z-50 flex items-stretch justify-end">
			<button
				type="button"
				aria-label={contact.close}
				onClick={() => setOpen(false)}
				className="absolute inset-0 bg-carbon/70"
			/>

			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="contact-drawer-title"
				className="tech-frame relative flex h-full w-full max-w-md flex-col overflow-y-auto border-l bg-porcelain p-8 md:p-10"
			>
				<button
					type="button"
					aria-label={contact.close}
					onClick={() => setOpen(false)}
					className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center"
				>
					<img src="/images/icon-plus.svg" alt="" width={16} height={16} className="rotate-45" />
				</button>

				<h2 id="contact-drawer-title" className="mt-2 font-display text-2xl font-bold text-carbon">
					{contact.title}
				</h2>
				<p className="mt-3 text-sm leading-relaxed text-graphite">{contact.intro}</p>

				{step === 'situation' && (
					<div className="mt-8">
						<p className="eyebrow">{contact.situationLabel}</p>
						<div className="mt-4 flex flex-col gap-2.5">
							{contact.situations.map((situation) => (
								<button
									key={situation.id}
									type="button"
									onClick={() => {
										setIntent(situation.id);
										setStep('schedule');
									}}
									className="tech-frame group flex items-center justify-between rounded-md px-5 py-4 text-left text-sm font-semibold text-carbon transition-colors hover:border-blueprint"
								>
									{situation.label}
									<span
										aria-hidden="true"
										className="text-blueprint transition-transform duration-200 group-hover:translate-x-1"
									>
										→
									</span>
								</button>
							))}
						</div>
					</div>
				)}

				{step === 'schedule' && (
					<div className="mt-8">
						<button
							type="button"
							onClick={() => setStep('situation')}
							className="eyebrow flex items-center gap-1.5 text-blueprint"
						>
							<span aria-hidden="true">←</span> {contact.back}
						</button>

						{selected && (
							<p className="tech-frame mt-4 inline-block rounded-sm px-3 py-1.5 text-sm font-semibold text-carbon">
								{selected.label}
							</p>
						)}

						<div className="tech-frame mt-6 flex items-start gap-3 rounded-md p-5">
							<img src="/images/icon-calendar.svg" alt="" width={18} height={18} className="mt-0.5 shrink-0" />
							<p className="text-sm leading-relaxed text-graphite">{contact.schedulePlaceholder}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
