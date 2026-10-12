import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';
import { useState } from 'react';

const { faq, hero } = es.home;

interface FaqItem {
	q: string;
	/** One entry per paragraph. */
	a: readonly string[];
	/** A single memorable sentence that closes the answer. */
	highlight?: string;
}

interface FaqProps {
	/** Defaults to the general questions that block a first contact. */
	items?: readonly FaqItem[];
	headline?: string;
	intro?: string;
	/** Repeats the hero's booking CTA under the questions. */
	showCta?: boolean;
	id?: string;
}

export default function Faq({ items = faq.items, headline = faq.headline, intro, showCta = false, id = 'faq' }: FaqProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<Section id={id} contentClassName="flex flex-col gap-10 md:gap-14">
			<div className="flex flex-col gap-4">
				<SectionHeading title={headline} />
				{intro && <p className="text-lead max-w-[37.5rem]">{intro}</p>}
			</div>

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
									className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-bold hover:text-link md:text-lg"
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
							<div id={`${id}-panel-${i}`} role="region" aria-labelledby={`${id}-button-${i}`} hidden={!open} className="flex flex-col gap-3 pb-7 md:pr-18">
								{item.a.map((paragraph) => (
									<p key={paragraph} className="text-body text-muted">
										{paragraph}
									</p>
								))}
								{item.highlight && <p className="text-body font-display font-bold text-ink">{item.highlight}</p>}
							</div>
						</li>
					);
				})}
			</ul>

			{showCta && (
				<div className="flex flex-col items-start gap-3">
					<CtaButton intent="other" location="faq">
						{hero.cta}
					</CtaButton>
					<p className="max-w-[34rem] text-sm leading-[1.5] text-muted">{hero.ctaNote}</p>
				</div>
			)}
		</Section>
	);
}
