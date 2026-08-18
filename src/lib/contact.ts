export type ContactIntent = 'existing-system' | 'new-product' | 'fractional' | 'other';

const OPEN_CONTACT_EVENT = 'open-contact';

export function openContact(intent: ContactIntent = 'other') {
	window.dispatchEvent(new CustomEvent<ContactIntent>(OPEN_CONTACT_EVENT, { detail: intent }));
}

export function onOpenContact(handler: (intent: ContactIntent) => void) {
	const listener = (event: Event) => handler((event as CustomEvent<ContactIntent>).detail);
	window.addEventListener(OPEN_CONTACT_EVENT, listener);
	return () => window.removeEventListener(OPEN_CONTACT_EVENT, listener);
}
