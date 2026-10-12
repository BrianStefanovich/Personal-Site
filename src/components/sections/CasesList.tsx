import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CaseCard } from '@/components/sections/CaseCard';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { cases } = es.home;

/** Index of every published case, one card each with a short description. Lives on /cases. */
export default function CasesList() {
	return (
		<Section>
			<Breadcrumbs trail={[{ label: es.nav.links[1].label }]} />
			<div className="flex flex-col gap-6">
				<SectionHeading as="h1" title={cases.headline} />
				<p className="text-body max-w-[65ch] text-muted">{cases.intro}</p>
			</div>

			<div className="mt-10 grid gap-6 md:mt-[4.5rem] md:grid-cols-2">
				{cases.items.map((item, index) => (
					<CaseCard key={item.slug} item={item} index={index} location="index" as="h2" detailed />
				))}
			</div>
		</Section>
	);
}
