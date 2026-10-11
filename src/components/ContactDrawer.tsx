import { IconButton } from '@/components/IconButton';
import { CAL_LINK, CAL_NAMESPACE, CONTACT_EMAIL_HREF, onOpenContact, type ContactIntent } from '@/lib/contact';
import { es } from '@/i18n/es';
import { getCalApi } from '@calcom/embed-react';
import { ArrowLeftIcon, ArrowRightIcon, CalendarBlankIcon, XIcon } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';

const { contact } = es;

type Step = 'situation' | 'schedule';
type CalStatus = 'idle' | 'loading' | 'ready' | 'error';

const CAL_TIMEOUT_MS = 8000;

export default function ContactDrawer() {
	const [open, setOpen] = useState(false);
	const [intent, setIntent] = useState<ContactIntent>('other');
	const [step, setStep] = useState<Step>('situation');
	const [cal, setCal] = useState<CalStatus>('idle');
	const dialogRef = useRef<HTMLDivElement>(null);
	const stepRef = useRef<HTMLDivElement>(null);
	const focusStep = useRef(false);
	const calStarted = useRef(false);

	// The booking script is only needed once someone opens the drawer, so it loads on first open.
	function loadCal() {
		if (calStarted.current) return;
		calStarted.current = true;
		setCal('loading');
		const timeout = new Promise<never>((_, reject) => setTimeout(() => reject(new Error('cal timeout')), CAL_TIMEOUT_MS));
		Promise.race([getCalApi({ namespace: CAL_NAMESPACE }), timeout])
			.then((api) => {
				api('ui', { hideEventTypeDetails: false, layout: 'month_view' });
				setCal('ready');
			})
			.catch(() => {
				calStarted.current = false;
				setCal('error');
			});
	}

	useEffect(
		() =>
			onOpenContact((incoming) => {
				setIntent(incoming);
				setStep(incoming === 'other' ? 'situation' : 'schedule');
				setOpen(true);
				loadCal();
			}),
		[],
	);

	// After a step change the focused control disappears; move focus to the new step.
	useEffect(() => {
		if (!focusStep.current) return;
		focusStep.current = false;
		stepRef.current?.focus();
	}, [step]);

	function goTo(next: Step) {
		focusStep.current = true;
		setStep(next);
	}

	useEffect(() => {
		if (!open) return;
		const opener = document.activeElement as HTMLElement | null;
		document.documentElement.style.overflow = 'hidden';
		const focusable = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
		focusable()[0]?.focus();
		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setOpen(false);
			if (event.key !== 'Tab') return;
			const items = focusable();
			if (items.length === 0) return;
			const first = items[0];
			const last = items[items.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};
		window.addEventListener('keydown', onKey);
		return () => {
			document.documentElement.style.overflow = '';
			window.removeEventListener('keydown', onKey);
			opener?.focus?.();
		};
	}, [open]);

	if (!open) return null;

	const selected = contact.situations.find((situation) => situation.id === intent);

	return (
		<div className="fixed inset-0 z-(--z-drawer) flex items-stretch justify-end">
			<button type="button" aria-label={contact.close} onClick={() => setOpen(false)} className="absolute inset-0 bg-carbon/70" />

			<div
				ref={dialogRef}
				role="dialog"
				aria-modal="true"
				aria-labelledby="contact-drawer-title"
				className="relative flex h-full w-full max-w-md flex-col overflow-y-auto bg-page p-8 text-ink md:p-10"
			>
				<IconButton aria-label={contact.close} onClick={() => setOpen(false)} className="absolute right-6 top-6 text-ink">
					<XIcon weight="bold" aria-hidden="true" size={20} />
				</IconButton>

				<h2 id="contact-drawer-title" className="mt-2 pr-16">
					{contact.title}
				</h2>
				<p className="mt-3 text-sm leading-relaxed">{contact.intro}</p>

				{step === 'situation' && (
					<div ref={stepRef} tabIndex={-1} role="group" aria-labelledby="drawer-step-label" className="mt-8">
						<p id="drawer-step-label" className="label-mono text-sm">
							{contact.situationLabel}
						</p>
						<div className="mt-4 flex flex-col gap-2.5">
							{contact.situations.map((situation) => (
								<button
									key={situation.id}
									type="button"
									onClick={() => {
										setIntent(situation.id);
										goTo('schedule');
									}}
									className="group surface-ink flex items-center justify-between px-6 py-4 text-left font-display text-sm font-bold transition hover:brightness-125"
								>
									{situation.label}
									<ArrowRightIcon
										weight="bold"
										aria-hidden="true"
										size={18}
										className="transition-transform duration-200 group-hover:translate-x-1"
									/>
								</button>
							))}
						</div>
					</div>
				)}

				{step === 'schedule' && (
					<div ref={stepRef} tabIndex={-1} role="group" aria-labelledby="drawer-step-label" className="mt-8">
						<button type="button" onClick={() => goTo('situation')} className="label-mono flex items-center gap-1.5 text-sm text-link">
							<ArrowLeftIcon weight="bold" aria-hidden="true" size={16} /> {contact.back}
						</button>

						{selected && (
							<p id="drawer-step-label" className="label-mono mt-4 inline-block rounded-full border border-line px-4 py-1.5 text-sm">
								{selected.label}
							</p>
						)}

						{cal === 'error' ? (
							<>
								<p role="alert" className="mt-6 text-sm">
									{contact.calError}
								</p>
								<button
									type="button"
									onClick={loadCal}
									className="group mt-4 flex w-full items-center justify-center gap-2 rounded-card border-2 border-strong px-6 py-3 font-display text-base font-bold transition hover:border-link hover:text-link"
								>
									{contact.calRetry}
								</button>
							</>
						) : (
							<button
								type="button"
								disabled={cal !== 'ready'}
								aria-busy={cal === 'loading'}
								data-track="calendar_select"
								data-track-intent={intent}
								data-cal-namespace={CAL_NAMESPACE}
								data-cal-link={selected ? `${CAL_LINK}?notes=${encodeURIComponent(selected.label)}` : CAL_LINK}
								data-cal-config={JSON.stringify({
									layout: 'month_view',
									useSlotsViewOnSmallScreen: 'true',
								})}
								className="group mt-6 flex w-full items-center justify-center gap-2 rounded-card bg-blueprint px-6 py-3 font-display text-base font-bold text-porcelain transition hover:brightness-110 active:translate-y-px disabled:cursor-wait disabled:opacity-70"
							>
								<CalendarBlankIcon weight="bold" aria-hidden="true" size={18} />
								{cal === 'ready' ? contact.scheduleCta : contact.calLoading}
							</button>
						)}

						<a
							href={CONTACT_EMAIL_HREF}
							data-track="email_click"
							data-track-location="drawer"
							className="mt-4 block text-center font-display text-sm font-bold text-link underline decoration-current/40 underline-offset-4 hover:decoration-current"
						>
							{contact.emailCta}
						</a>
					</div>
				)}
			</div>
		</div>
	);
}
