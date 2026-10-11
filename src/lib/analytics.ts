type Params = Record<string, string>;

declare global {
	interface Window {
		gtag?: (command: 'event', name: string, params: Params) => void;
	}
}

export function track(event: string, params: Params = {}) {
	if (import.meta.env.DEV) console.debug('[track]', event, params);
	window.gtag?.('event', event, params);
}

const paramsOf = (el: HTMLElement): Params =>
	Object.fromEntries(
		Object.entries(el.dataset)
			.filter(([key, value]) => key.startsWith('track') && key !== 'track' && key !== 'trackView' && value !== undefined)
			.map(([key, value]) => [key.slice(5).toLowerCase(), String(value)]),
	);

/**
 * Declarative tracking: any element with `data-track="event"` reports a click, and any element with
 * `data-track-view="event"` reports once on load. Extra `data-track-*` attributes become event params.
 * Events only reach GA4 when the production build has a measurement id; otherwise they are no-ops.
 */
export function initTracking() {
	document.addEventListener('click', (event) => {
		const el = (event.target as Element | null)?.closest<HTMLElement>('[data-track]');
		if (el?.dataset.track) track(el.dataset.track, paramsOf(el));
	});

	document.querySelectorAll<HTMLElement>('[data-track-view]').forEach((el) => {
		if (el.dataset.trackView) track(el.dataset.trackView, paramsOf(el));
	});
}
