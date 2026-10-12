import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CaseCard } from '@/components/sections/CaseCard';
import { CaseGridCell } from '@/components/sections/CaseGridCell';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { cases } = es.home;

const featured = cases.items.filter((item) => item.featured !== null).sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));
const more = cases.items.filter((item) => item.featured === null);

/** The /cases index: four featured cases as cards, then the rest of the experience as a compact grid. */
export default function CasesList() {
	return (
		<>
			<Section>
				<Breadcrumbs trail={[{ label: es.nav.links[1].label }]} />
				<div className="flex flex-col gap-6">
					<SectionHeading as="h1" title={cases.headline} />
					<p className="text-lead max-w-[48rem] text-muted">{cases.intro}</p>
				</div>

				<ul className="mt-10 grid gap-6 md:mt-[4.5rem] md:grid-cols-2">
					{featured.map((item) => (
						<li key={item.slug} className="flex">
							<CaseCard item={item} location="index" as="h2" />
						</li>
					))}
				</ul>
			</Section>

			<Section contentClassName="flex flex-col gap-8 md:gap-10">
				<div className="flex flex-col gap-3">
					<h2 className="text-headline">{cases.moreHeadline}</h2>
					<p className="text-body max-w-[60ch] text-muted">{cases.moreIntro}</p>
				</div>
				<ul className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
					{more.map((item) => (
						<CaseGridCell key={item.slug} item={item} />
					))}
				</ul>
			</Section>
		</>
	);
}
