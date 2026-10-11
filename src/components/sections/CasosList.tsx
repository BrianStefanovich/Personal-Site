import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CaseCard } from '@/components/sections/CaseCard';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { casos } = es.home;

/** Index of every published case, one card each with a short description. Lives on /cases. */
export default function CasosList() {
	return (
		<Section>
			<Breadcrumbs trail={[{ label: es.nav.links[1].label }]} />
			<div className="flex flex-col gap-6">
				<SectionHeading as="h1" title={casos.headline} />
				<p className="text-body max-w-[65ch] text-muted">{casos.intro}</p>
			</div>

			<div className="mt-10 grid gap-6 md:mt-[4.5rem] md:grid-cols-2">
				{casos.items.map((item, index) => (
					<CaseCard key={item.slug} item={item} index={index} location="index" as="h2" detailed />
				))}
			</div>
		</Section>
	);
}
