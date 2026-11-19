import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';
import { CAL_MEETING_MINUTES, type ContactIntent } from '@/lib/contact';
import { getOfferBooking, type EntryOffer } from '@/lib/entry-offers';

const copy = es.home.services.entryOffers;

/** Half-circle cut into the card edge where the ticket tears: the paid offer sits above it, the free first meeting on the stub below. */
const notch = 'absolute top-1/2 size-4 -translate-y-1/2 rounded-full bg-page';

function OfferTicket({ offer, intent }: { offer: EntryOffer; intent: ContactIntent }) {
	const meetingId = `${offer.id}-meeting`;

	return (
		<article id={offer.id} className="surface-card relative target:outline-2 target:outline-offset-4 target:outline-link">
			<div className="flex flex-col gap-4 p-6 md:p-8">
				<div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
					<h3 className="text-headline font-display font-bold text-balance">{offer.name}</h3>
					<p className="flex items-baseline gap-2">
						<span className="font-display text-[2rem] font-bold leading-none tracking-[-0.02em]">{offer.price.amount}</span>
						<span className="text-base text-muted">{offer.price.terms}</span>
					</p>
				</div>
				<p className="text-body max-w-[62ch]">{offer.description}</p>
			</div>

			<div aria-hidden="true" className="relative">
				<div className="border-t-2 border-dashed border-line" />
				<span className={`${notch} -left-2`} />
				<span className={`${notch} -right-2`} />
			</div>

			<div className="flex flex-col items-start gap-3 p-6 md:p-8">
				<CtaButton
					intent={intent}
					offer={getOfferBooking(offer)}
					location={`offer-${offer.id}`}
					aria-describedby={meetingId}
					className="w-full sm:w-auto"
				>
					{offer.cta}
				</CtaButton>
				<p id={meetingId} className="text-sm leading-[1.5] text-muted">
					{copy.meeting(CAL_MEETING_MINUTES)}
					{'meetingNote' in offer && `. ${offer.meetingNote}`}
				</p>
			</div>
		</article>
	);
}

/** The first band after every service hero, built the same on all three pages: what you can start with, its price, and a free first meeting. */
export default function EntryOffers({ offers, intent }: { offers: readonly EntryOffer[]; intent: ContactIntent }) {
	return (
		<Section
			id="entry-offers"
			tone="inverse"
			className="py-12! md:py-16!"
			contentClassName="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-x-16"
		>
			<div className="flex flex-col gap-4 lg:pt-1">
				<h2 className="text-display text-balance">{copy.title}</h2>
				<span aria-hidden="true" className="block h-1 w-16 bg-blueprint" />
				<p className="text-body max-w-[34ch] text-muted">{copy.note}</p>
			</div>
			<div className="flex flex-col gap-6">
				{offers.map((offer) => (
					<OfferTicket key={offer.id} offer={offer} intent={intent} />
				))}
			</div>
		</Section>
	);
}
