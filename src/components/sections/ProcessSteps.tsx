import { SectionEyebrow } from '@/components/sections/SectionEyebrow';
import { cn } from '@/lib/utils';

interface Step {
	number: string;
	title: string;
	description: string;
}

interface ProcessStepsProps {
	id?: string;
	number?: string;
	short?: string;
	long?: string;
	heading: string;
	steps: readonly Step[];
}

export default function ProcessSteps({ id, number, short, long, heading, steps }: ProcessStepsProps) {
	return (
		<section id={id} className="container flex flex-col gap-8 py-12 md:gap-10 md:py-[64px]">
			<div className="flex flex-col gap-2">
				{number && short && long ? <SectionEyebrow number={number} short={short} long={long} /> : null}
				<h2 className="pt-2 font-display text-[36px] leading-[43px] font-semibold text-foreground text-balance md:max-w-[768px] md:pt-4 md:text-[44px] md:leading-[54px]">
					{heading}
				</h2>
			</div>

			<ol className="flex flex-col gap-4 md:grid md:grid-cols-4 md:gap-8">
				{steps.map((step, index) => {
					const isOrphan = index === steps.length - 1 && steps.length % 4 === 1;
					return (
						<li
							key={step.number}
							className={cn(
								'flex flex-col gap-2 rounded-[2px] border border-line bg-surface p-5 md:min-h-[270px]',
								isOrphan && 'md:col-start-2 md:col-span-2',
							)}
						>
							<span className="font-mono text-xl leading-6 text-accent-soft">{step.number}</span>
							<h3 className="font-display text-base leading-6 font-semibold text-foreground">{step.title}</h3>
							<p className="text-[13px] leading-5 text-body">{step.description}</p>
						</li>
					);
				})}
			</ol>
		</section>
	);
}
