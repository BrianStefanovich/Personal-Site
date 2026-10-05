import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const { faq } = es.home;

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<Section id="faq">
			<div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16">
				<div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
					<SectionHeading eyebrow={faq.eyebrow} title={faq.headline} />
					<h3 className="reveal mt-8">{faq.featured.q}</h3>
					<p className="reveal measure mt-4 text-base md:text-lg">{faq.featured.a}</p>
				</div>

				<ul className="border-y border-line">
					{faq.items.map((item, i) => {
						const open = openIndex === i;
						return (
							<li key={item.q} className="border-t border-line first:border-t-0">
								<h4>
									<button
										type="button"
										aria-expanded={open}
										aria-controls={`faq-panel-${i}`}
										id={`faq-button-${i}`}
										onClick={() => setOpenIndex(open ? null : i)}
										className="flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left font-display text-lg font-bold hover:text-link md:text-xl"
									>
										<span>{item.q}</span>
										<Plus
											aria-hidden="true"
											size={24}
											strokeWidth={2}
											className={`shrink-0 text-link transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
										/>
									</button>
								</h4>
								<div
									id={`faq-panel-${i}`}
									role="region"
									aria-labelledby={`faq-button-${i}`}
									hidden={!open}
									className="pb-6 pr-12 text-base md:text-lg"
								>
									<p className="measure">{item.a}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</Section>
	);
}
