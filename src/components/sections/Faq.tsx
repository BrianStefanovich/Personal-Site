import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';
import { useState } from 'react';

const { faq } = es.home;
const homeItems = [faq.featured, ...faq.items];

interface FaqProps {
	/** Defaults to the general questions that block a first contact. */
	items?: readonly { q: string; a: string }[];
	headline?: string;
	id?: string;
}

export default function Faq({ items = homeItems, headline = faq.headline, id = 'faq' }: FaqProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<Section id={id} contentClassName="flex flex-col gap-10 md:gap-14">
			<SectionHeading title={headline} />

			<ul className="border-t border-line">
				{items.map((item, i) => {
					const open = openIndex === i;
					return (
						<li key={item.q} className="border-b border-line">
							<h3 className="text-xl leading-7">
								<button
									type="button"
									aria-expanded={open}
									aria-controls={`${id}-panel-${i}`}
									id={`${id}-button-${i}`}
									onClick={() => setOpenIndex(open ? null : i)}
									className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-bold hover:text-link md:text-xl"
								>
									<span>{item.q}</span>
									<span
										aria-hidden="true"
										className="flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-lg font-medium shadow-[inset_0_0_0_1.5px_var(--color-blueprint)]"
									>
										{open ? '−' : '+'}
									</span>
								</button>
							</h3>
							<div id={`${id}-panel-${i}`} role="region" aria-labelledby={`${id}-button-${i}`} hidden={!open} className="pb-7 md:pr-18">
								<p className="text-body text-muted">{item.a}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</Section>
	);
}
