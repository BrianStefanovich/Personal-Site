import { Reveal } from '@/components/ui/Reveal';
import { es } from '@/i18n/es';
import { useState } from 'react';

const { faq } = es.home;

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section id="faq" className="border-b border-fog bg-porcelain py-20 md:py-28">
			<div className="container max-w-3xl">
				<Reveal>
					<p className="eyebrow">{faq.eyebrow}</p>
					<h2 className="mt-4 font-display text-3xl font-bold text-carbon md:text-4xl">{faq.headline}</h2>
				</Reveal>

				<div className="tech-frame mt-10 divide-y divide-fog rounded-md">
					{faq.items.map((item, i) => {
						const isOpen = openIndex === i;
						return (
							<div key={item.q}>
								<button
									type="button"
									aria-expanded={isOpen}
									onClick={() => setOpenIndex(isOpen ? null : i)}
									className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
								>
									<span className="font-display text-base font-bold text-carbon">{item.q}</span>
									<img
										src="/images/icon-plus.svg"
										alt=""
										className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
									/>
								</button>
								{isOpen && (
									<p className="px-6 pb-5 text-sm leading-relaxed text-graphite">{item.a}</p>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
