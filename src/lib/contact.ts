export type ContactIntent = 'existing-system' | 'new-product' | 'fractional' | 'other';

export interface OfferBooking {
	calLink: string;
	url: string;
	config: {
		'metadata[ticket_id]': string;
		'metadata[ticket_name]': string;
		servicio: string;
	};
}

type ContactRequest = { intent: ContactIntent; offer?: OfferBooking };

export const CONTACT_EMAIL = 'hi@brianstefanovich.com';
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/brian-stefanovich/';
export const CAL_LINK = 'brianstefanovich/consulta';
export const CAL_URL = `https://cal.com/${CAL_LINK}`;
export const CAL_NAMESPACE = 'consulta';
/** Length of the general consultation; the entry offers book into this same calendar. */
export const CAL_MEETING_MINUTES = 45;

const OPEN_CONTACT_EVENT = 'open-contact';

export function openContact(intent: ContactIntent = 'other', offer?: OfferBooking) {
	return !window.dispatchEvent(new CustomEvent<ContactRequest>(OPEN_CONTACT_EVENT, {
		cancelable: true,
		detail: { intent, offer },
	}));
}

export function onOpenContact(handler: (request: ContactRequest) => void) {
	const listener = (event: Event) => {
		event.preventDefault();
		handler((event as CustomEvent<ContactRequest>).detail);
	};
	window.addEventListener(OPEN_CONTACT_EVENT, listener);
	return () => window.removeEventListener(OPEN_CONTACT_EVENT, listener);
}
