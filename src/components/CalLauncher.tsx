import { CAL_LINK, CAL_NAMESPACE, CAL_URL, onOpenContact, type ContactIntent } from '@/lib/contact';
import { es } from '@/i18n/es';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

const CAL_TIMEOUT_MS = 8000;

type CalApi = Awaited<ReturnType<typeof getCalApi>>;

let calPromise: Promise<CalApi> | undefined;

// The booking script loads on the first sign of intent (hover, focus, touch or click), not with the page.
function loadCal() {
	calPromise ??= getCalApi({ namespace: CAL_NAMESPACE }).then((api) => {
		api('ui', { hideEventTypeDetails: false, layout: 'month_view' });
		return api;
	});
	calPromise.catch(() => {
		calPromise = undefined;
	});
	return calPromise;
}

function calLinkFor(intent: ContactIntent) {
	const situation = es.contact.situations.find((item) => item.id === intent);
	return situation ? `${CAL_LINK}?notes=${encodeURIComponent(situation.label)}` : CAL_LINK;
}

/** Opens the Cal.com booking popup straight from any booking CTA. If the embed cannot load, it opens the public booking page instead. */
export default function CalLauncher() {
	useEffect(() => {
		const warm = (event: Event) => {
			if ((event.target as Element | null)?.closest?.('[data-track="cta_click"]')) loadCal().catch(() => {});
		};
		const events = ['pointerover', 'focusin', 'touchstart'] as const;
		events.forEach((name) => document.addEventListener(name, warm, { passive: true }));

		const stopListening = onOpenContact((intent) => {
			const timeout = new Promise<never>((_, reject) => setTimeout(() => reject(new Error('cal timeout')), CAL_TIMEOUT_MS));
			Promise.race([loadCal(), timeout])
				.then((api) => api('modal', { calLink: calLinkFor(intent), config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' } }))
				.catch(() => window.open(CAL_URL, '_blank', 'noopener'));
		});

		return () => {
			events.forEach((name) => document.removeEventListener(name, warm));
			stopListening();
		};
	}, []);

	return null;
}
