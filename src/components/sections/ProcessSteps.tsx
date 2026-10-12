import { RichText } from '@/components/ui/RichText';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { es } from '@/i18n/es';

const { proceso } = es.home;

/** The last stage trails off in open rings: deliveries and validations repeat, so the timeline has no finish line. */
const FOLLOW_UP_MARKERS = [0, 1];

/** Explicit rows keep each stage in its own row, so the zigzag never collapses into two columns. */
const ROW_START = ['md:row-start-1', 'md:row-start-2', 'md:row-start-3', 'md:row-start-4'];

/**
 * How the engagement runs, in four stages. Phones get a left-hand timeline; from tablet up the line runs down the centre and the stages
 * alternate left and right. The second stage (visiting the operation) is the differentiator and gets its own surface.
 */
export default function ProcessSteps() {
	const lastIndex = proceso.steps.length - 1;

	return (
		<Section id="como-trabajo">
			<div className="flex flex-col gap-12 md:gap-16">
				<SectionHeading eyebrow={proceso.eyebrow} title={proceso.headline} className="max-w-3xl" />

				<ol
					className={cn(
						'relative -mx-4 flex flex-col md:mx-0 md:grid md:grid-cols-2',
						// The centre line fades out after the last stage: there is no finish line.
						'md:before:absolute md:before:top-8 md:before:bottom-0 md:before:left-1/2 md:before:w-px md:before:bg-strong/70',
						'md:before:[mask-image:linear-gradient(to_bottom,#000_calc(100%-9rem),transparent)]',
					)}
				>
					{proceso.steps.map((step, index) => {
						const featured = index === 1;
						const last = index === lastIndex;
						const left = index % 2 === 0;

						return (
							<li
								key={step.title}
								className={cn(
									'relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 px-4 py-6 md:block md:p-0',
									'max-md:before:absolute max-md:before:top-0 max-md:before:bottom-0 max-md:before:left-9 max-md:before:w-px max-md:before:bg-strong/70 max-md:first:before:top-6 max-md:last:before:bottom-auto max-md:last:before:h-[6.25rem]',
									ROW_START[index],
									'md:self-start',
									left ? 'md:col-start-1 md:pr-10' : 'md:col-start-2 md:pl-10',
									index > 0 && 'md:-mt-20',
									featured
										? 'max-md:rounded-card max-md:bg-card max-md:shadow-[inset_0_0_0_1px_var(--border-hairline)] [--chip:var(--surface-card)]'
										: '[--chip:var(--surface-page)]',
								)}
							>
								<div aria-hidden="true" className="relative z-10 flex flex-col items-center gap-3 md:hidden">
									<span className="label-mono bg-(--chip) py-0.5 text-sm leading-none text-link">{String(index + 1).padStart(2, '0')}</span>
									<span className="size-2.5 shrink-0 rounded-full bg-link" />
									{last &&
										FOLLOW_UP_MARKERS.map((marker) => (
											<span key={marker} className="size-2 shrink-0 rounded-full border border-link bg-(--chip)" />
										))}
								</div>

								<div aria-hidden="true" className="hidden md:block">
									<span className={cn('absolute top-[1.9375rem] h-px w-10 bg-strong/70', left ? 'right-0' : 'left-0')} />
									<span
										className={cn(
											'absolute top-[1.625rem] z-10 size-2.5 rounded-full bg-link',
											left ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2',
										)}
									/>
									{last &&
										FOLLOW_UP_MARKERS.map((marker) => (
											<span
												key={marker}
												className="absolute left-0 z-10 size-2 -translate-x-1/2 rounded-full border border-link bg-page"
												style={{ top: `${3.375 + marker * 1.25}rem` }}
											/>
										))}
								</div>

								<div
									className={cn(
										'flex flex-col gap-2 md:gap-3 md:rounded-card md:p-6 md:pb-8 md:shadow-[inset_0_0_0_1px_var(--border-hairline)]',
										featured && 'md:bg-card',
									)}
								>
									<span aria-hidden="true" className="label-mono hidden text-sm leading-none text-link md:block">
										{String(index + 1).padStart(2, '0')}
									</span>
									<h3>{step.title}</h3>
									<p className="max-w-prose text-base leading-relaxed text-muted">
										<RichText parts={step.body} />
									</p>
								</div>
							</li>
						);
					})}
				</ol>

				<div className="surface-ink flex flex-col gap-3 p-6 md:p-10 xl:flex-row xl:items-baseline xl:gap-12">
					<p className="font-display text-xl font-bold xl:shrink-0">{proceso.closingTitle}</p>
					<p className="max-w-prose text-base text-muted">{proceso.closing}</p>
				</div>
			</div>
		</Section>
	);
}
