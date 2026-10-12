import { CtaButton } from '@/components/CtaButton';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { about, cases } = es.home;
const [firstLine, secondLine] = about.titleLines;
const [lead, ...paragraphs] = about.paragraphs;

/** The About band: the headline first, then a portrait card with the identity, the bio, and two pieces of proof. */
export default function About() {
	return (
		<Section id="about">
			<div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-y-12">
				<SectionHeading
					className="lg:col-span-2"
					titleClassName="text-hero"
					title={
						<>
							<span className="block">{firstLine}</span>
							<span className="block text-muted">{secondLine}</span>
						</>
					}
				/>

				<aside className="surface-photo flex items-center gap-4 overflow-hidden p-3 lg:col-start-1 lg:row-start-2 lg:flex-col lg:items-stretch lg:gap-0 lg:p-0">
					<div className="order-2 flex min-w-0 flex-col gap-1 lg:order-1 lg:p-8 lg:pb-6">
						<p className="font-display text-xl font-bold leading-tight lg:text-headline">{about.identityName}</p>
						<p className="text-[0.9375rem] leading-snug text-muted lg:text-base">{about.identityRole}</p>
					</div>
					<div className="relative order-1 h-44 w-36 shrink-0 overflow-hidden rounded-lg lg:order-2 lg:h-auto lg:min-h-[22rem] lg:w-full lg:flex-1 lg:rounded-none">
						<img
							src="/images/brian-portrait.webp"
							alt={about.imageAlt}
							width={1000}
							height={1200}
							loading="lazy"
							className="absolute inset-0 size-full object-cover object-[50%_8%]"
						/>
					</div>
				</aside>

				<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-2">
					<p className="text-lead max-w-[42rem]">{lead}</p>
					{paragraphs.map((paragraph) => (
						<p key={paragraph} className="text-body max-w-[42rem] text-muted">
							{paragraph}
						</p>
					))}
					<p className="mt-2 border-t border-line pt-8 font-display text-headline font-bold">
						{about.mottoLines.map((line) => (
							<span key={line} className="block text-balance">
								{line}
							</span>
						))}
					</p>
				</div>
			</div>

			<div className="mt-16 flex flex-col gap-6 lg:mt-20">
				<h3>{about.experienceTitle}</h3>
				<ul className="grid gap-6 md:grid-cols-2">
					{about.experience.map((item) => {
						const project = cases.items.find((entry) => entry.slug === item.slug);
						return (
							<li key={item.slug} className="surface-card flex flex-col gap-4 p-6 md:p-8">
								<h4 className="font-display text-[1.375rem] font-bold leading-[1.25]">{item.title}</h4>
								<p className="text-base leading-[1.6] text-muted">{item.body}</p>
								{project && (
									<p className="mt-auto flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-line pt-4">
										<span className="font-display font-bold">{project.name}</span>
										<span className="label-mono text-sm text-muted">{project.tags}</span>
									</p>
								)}
							</li>
						);
					})}
				</ul>
				<CtaButton
					variant="link"
					href="/cases"
					data-track="case_open"
					data-track-case="all"
					data-track-location="about"
					className="justify-start whitespace-normal text-left"
				>
					{about.casesCta}
				</CtaButton>
			</div>
		</Section>
	);
}
