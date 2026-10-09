import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';
import { useState } from 'react';

const { faq } = es.home;
const items = [faq.featured, ...faq.items];

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<Section id="faq" contentClassName="flex flex-col gap-10 md:gap-14">
			<SectionHeading title={faq.headline} />

			<ul className="border-t border-line">
				{items.map((item, i) => {
					const open = openIndex === i;
					return (
						<li key={item.q} className="border-b border-line">
							<h3 className="text-xl leading-7">
								<button
									type="button"
									aria-expanded={open}
									aria-controls={`faq-panel-${i}`}
									id={`faq-button-${i}`}
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
							<div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} hidden={!open} className="pb-7 md:pr-18">
								<p className="text-body text-muted">{item.a}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</Section>
	);
}
