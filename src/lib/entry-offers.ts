import { es } from '@/i18n/es';
import { CAL_LINK, CAL_URL, type OfferBooking } from '@/lib/contact';

export type EntryOffer = (typeof es.home.services.items)[number]['offers'][number];

/** Every offer books into the general consultation calendar; the ticket travels as booking metadata. */
export function getOfferBooking(offer: EntryOffer): OfferBooking {
	const config = {
		'metadata[ticket_id]': offer.id,
		'metadata[ticket_name]': offer.name,
		servicio: offer.name,
	};
	const url = new URL(CAL_URL);
	url.search = new URLSearchParams(config).toString();
	return { calLink: CAL_LINK, config, url: url.href };
}
