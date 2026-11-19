import { CAL_LINK, CAL_NAMESPACE, CAL_URL, onOpenContact, type ContactIntent } from '@/lib/contact';
import { es } from '@/i18n/es';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

const CAL_TIMEOUT_MS = 8000;
const CAL_SCRIPT_URL = 'https://app.cal.com/embed/embed.js';
const modalConfig = { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' } as const;

type CalApi = Awaited<ReturnType<typeof getCalApi>>;

const calApis = new Map<string, Promise<CalApi>>();
let scriptReady: Promise<void> | undefined;

// The booking script loads on the first sign of intent (hover, focus, touch or click), not with the page.
function loadCal(namespace: string) {
	const cached = calApis.get(namespace);
	if (cached) return cached;

	const api = getCalApi({ namespace, embedJsUrl: CAL_SCRIPT_URL });
	// getCalApi can resolve to the command queue before the embed script has loaded.
	scriptReady ??= new Promise<void>((resolve, reject) => {
		const script = document.querySelector<HTMLScriptElement>(`script[src="${CAL_SCRIPT_URL}"]`);
		if (!script) {
			reject(new Error('Cal.com embed script was not inserted'));
			return;
		}
		const listeners = new AbortController();
		const fail = (error: Error) => {
			clearTimeout(timeout);
			listeners.abort();
			reject(error);
		};
		const timeout = setTimeout(() => fail(new Error('Cal.com embed timed out')), CAL_TIMEOUT_MS);
		script.addEventListener('load', () => {
			clearTimeout(timeout);
			listeners.abort();
			resolve();
		}, { signal: listeners.signal });
		script.addEventListener('error', () => fail(new Error('Cal.com embed script failed to load')), { signal: listeners.signal });
	});

	const ready = Promise.all([api, scriptReady]).then(([cal]) => {
		cal('ui', { hideEventTypeDetails: false, layout: modalConfig.layout });
		return cal;
	});
	calApis.set(namespace, ready);
	return ready;
}

function calLinkFor(intent: ContactIntent) {
	const situation = es.contact.situations.find((item) => item.id === intent);
	return situation ? `${CAL_LINK}?notes=${encodeURIComponent(situation.label)}` : CAL_LINK;
}

/** Opens the Cal.com booking popup straight from any booking CTA. If the embed cannot load, it opens the public booking page instead. */
export default function CalLauncher() {
	useEffect(() => {
		const warm = (event: Event) => {
			const cta = (event.target as Element | null)?.closest<HTMLElement>('[data-track="cta_click"]');
			if (cta) {
				const ticket = cta.dataset.trackTicket;
				loadCal(ticket ? `oferta-${ticket}` : CAL_NAMESPACE).catch(() => {
					// The click handler uses the direct booking URL if the embed fails.
				});
			}
		};
		const events = ['pointerover', 'focusin', 'touchstart'] as const;
		events.forEach((name) => document.addEventListener(name, warm, { passive: true }));

		let latestRequest = 0;
		const stopListening = onOpenContact(({ intent, offer }) => {
			const request = ++latestRequest;
			const namespace = offer ? `oferta-${offer.config['metadata[ticket_id]']}` : CAL_NAMESPACE;
			loadCal(namespace)
				.then((api) => {
					if (request !== latestRequest) return;
					api('modal', {
						calLink: offer?.calLink ?? calLinkFor(intent),
						config: { ...modalConfig, ...offer?.config },
					});
				})
				.catch((error: unknown) => {
					if (request !== latestRequest) return;
					console.warn('Cal.com embed unavailable; using the direct booking link.', error);
					if (offer) window.location.assign(offer.url);
					else window.open(CAL_URL, '_blank', 'noopener');
				});
		});

		return () => {
			latestRequest++;
			events.forEach((name) => document.removeEventListener(name, warm));
			stopListening();
		};
	}, []);

	return null;
}
