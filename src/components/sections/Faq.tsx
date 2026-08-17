import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import type { Translations } from '@/i18n';

const VISIBLE_COUNT = 4;

interface FaqProps {
	content: Translations['home']['faq'];
}

export default function Faq({ content: faq }: FaqProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	const [showAll, setShowAll] = useState(false);
	const visibleItems = showAll ? faq.items : faq.items.slice(0, VISIBLE_COUNT);
	const hiddenCount = faq.items.length - VISIBLE_COUNT;

	return (
		<section className="bg-background md:bg-[#f7f3eb]">
			<div className="container flex flex-col gap-8 py-12 md:items-center md:gap-12 md:py-32">
				<div className="flex flex-col gap-2 md:w-full md:items-center md:gap-4">
					<p className="font-mono text-xs leading-4 tracking-[0.06em] text-accent-soft uppercase md:text-center md:tracking-[0.1em] md:text-accent">
						{faq.number} / {faq.label}
					</p>
					<h2 className="font-display text-[36px] leading-[43px] font-semibold text-foreground md:text-center md:text-5xl md:leading-[54px] md:font-bold md:tracking-[-0.01em]">
						{faq.heading}
					</h2>
				</div>

				{/* Mobile collapses into an accordion; the desktop design keeps every answer visible. */}
				<p className="font-mono text-xs leading-4 tracking-[0.06em] text-muted uppercase md:hidden">{faq.mobileHint}</p>
				<ul className="flex flex-col gap-6 md:hidden">
					{visibleItems.map((item, index) => {
						const open = openIndex === index;
						return (
							<li key={item.question} className="border-b border-line pb-4">
								<h3>
									<button
										type="button"
										aria-expanded={open}
										aria-controls={`faq-panel-${index}`}
										id={`faq-trigger-${index}`}
										onClick={() => setOpenIndex(open ? null : index)}
										className="flex w-full items-center justify-between gap-4 text-left"
									>
										<span className="font-display text-base leading-6 font-semibold text-foreground">
											{item.question}
										</span>
										<ChevronDown
											aria-hidden
											size={12}
											className={`shrink-0 text-foreground transition-transform ${open ? 'rotate-180' : ''}`}
										/>
									</button>
								</h3>
								<div
									id={`faq-panel-${index}`}
									role="region"
									aria-labelledby={`faq-trigger-${index}`}
									hidden={!open}
									className="pt-3"
								>
									<p className="text-sm leading-5 text-body">{item.answer}</p>
								</div>
							</li>
						);
					})}
				</ul>

				<dl className="hidden w-full max-w-[896px] md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8">
					{visibleItems.map((item) => (
						<div key={item.question} className="flex flex-col gap-2">
							<dt className="font-display text-base leading-6 text-foreground">{item.question}</dt>
							<dd className="m-0 text-sm leading-5 text-body">{item.answer}</dd>
						</div>
					))}
				</dl>

				{hiddenCount > 0 && (
					<button
						type="button"
						onClick={() => setShowAll((value) => !value)}
						className="font-display text-sm leading-5 font-semibold text-accent underline underline-offset-2"
					>
						{showAll ? faq.showLess : `${faq.showMore} (${hiddenCount})`}
					</button>
				)}
			</div>
		</section>
	);
}

