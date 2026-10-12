import { RichText } from '@/components/ui/RichText';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { es } from '@/i18n/es';

const { proceso } = es.home;

/** The last stage trails off in open rings: deliveries and validations repeat, so the timeline has no finish line. */
const FOLLOW_UP_MARKERS = [0, 1];

/** How the engagement runs, in four stages. The second (visiting the operation) is the differentiator and gets its own surface. */
export default function ProcessSteps() {
	const lastIndex = proceso.steps.length - 1;

	return (
		<Section id="como-trabajo">
			<div className="flex flex-col gap-12 xl:gap-16">
				<SectionHeading title={proceso.headline} className="max-w-3xl" />

				<ol className="relative -mx-4 flex flex-col xl:-mx-5 xl:grid xl:grid-cols-4 xl:before:absolute xl:before:inset-x-5 xl:before:top-9 xl:before:h-px xl:before:bg-line">
					{proceso.steps.map((step, index) => {
						const featured = index === 1;
						const last = index === lastIndex;

						return (
							<li
								key={step.title}
								className={cn(
									'relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 px-4 py-6 xl:block xl:px-5 xl:pt-6 xl:pb-8',
									'before:absolute before:top-0 before:bottom-0 before:left-9 before:w-px before:bg-line first:before:top-6 xl:before:hidden',
									featured
										? 'rounded-card bg-card [--chip:var(--surface-card)] shadow-[inset_0_0_0_1px_var(--border-hairline)]'
										: 'bg-page [--chip:var(--surface-page)]',
								)}
							>
								<div
									aria-hidden="true"
									className="relative z-10 flex flex-col items-center gap-3 xl:mb-5 xl:h-6 xl:flex-row"
								>
									<span className="label-mono bg-(--chip) py-0.5 text-sm leading-none text-link">
										{String(index + 1).padStart(2, '0')}
									</span>
									<span className="size-2.5 shrink-0 rounded-full bg-link xl:order-first" />
									{last &&
										FOLLOW_UP_MARKERS.map((marker) => (
											<span
												key={marker}
												className="size-2 shrink-0 rounded-full border border-link bg-(--chip) xl:ml-5"
											/>
										))}
								</div>

								<div className="flex flex-col gap-2 xl:gap-3">
									<h3>{step.title}</h3>
									<p className="max-w-prose text-base leading-relaxed text-muted">
										<RichText parts={step.body} />
									</p>
								</div>
							</li>
						);
					})}
				</ol>

				<div className="flex flex-col gap-2 border-t border-line pt-6 xl:flex-row xl:items-baseline xl:gap-10">
					<p className="font-display text-lg font-bold xl:shrink-0">{proceso.closingTitle}</p>
					<p className="max-w-prose text-base text-muted">{proceso.closing}</p>
				</div>
			</div>
		</Section>
	);
}
