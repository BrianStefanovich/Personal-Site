import { CtaButton } from '@/components/CtaButton';
import { es } from '@/i18n/es';
import { CAL_MEETING_MINUTES, type ContactIntent } from '@/lib/contact';
import { getOfferBooking, type EntryOffer } from '@/lib/entry-offers';

const copy = es.home.services.entryOffers;

export default function EntryOffers({ offers, intent }: { offers: readonly EntryOffer[]; intent: ContactIntent }) {
	return (
		<section className="flex flex-col gap-5" aria-labelledby="entry-offers-heading">
			<div className="flex flex-col gap-3">
				<h2 id="entry-offers-heading" className="label-mono text-sm font-medium text-muted">{copy.title}</h2>
				<p className="text-sm leading-[1.5] text-muted">{copy.note}</p>
			</div>
			<div className="grid gap-4">
				{offers.map((offer) => (
					<article key={offer.id} id={offer.id} className="surface-card flex flex-col gap-4 p-5 sm:p-6">
						<h3 className="text-xl font-display font-bold leading-tight text-balance">{offer.name}</h3>
						<p className="text-body">{offer.description}</p>
						<p className="font-display text-lg font-bold">{offer.price}</p>
						<div className="flex flex-col items-start gap-2">
							<CtaButton
								intent={intent}
								offer={getOfferBooking(offer)}
								location={`offer-${offer.id}`}
								aria-describedby={`${offer.id}-meeting`}
							>
								{offer.cta}
							</CtaButton>
							<p id={`${offer.id}-meeting`} className="text-sm leading-[1.5] text-muted">
								{copy.meeting(CAL_MEETING_MINUTES)}{'meetingNote' in offer && `. ${offer.meetingNote}`}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
