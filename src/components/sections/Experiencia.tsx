import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { casos } = es.home;

function CaseBody({ item }: { item: (typeof casos.items)[number] }) {
	return (
		<>
			<h3>{item.name}</h3>
			<h4 className="mt-4 font-display text-lg font-bold leading-snug md:text-xl">{item.headline}</h4>
			<div className="measure mt-4 space-y-4 text-base md:text-lg">
				{item.body.map((text) => (
					<p key={text}>{text}</p>
				))}
			</div>
			<p className="label-mono mt-auto pt-6 text-sm text-link">{item.tags}</p>
		</>
	);
}

export default function Experiencia() {
	const [featured, ...others] = casos.items;

	return (
		<Section id="casos">
			<SectionHeading eyebrow={casos.eyebrow} title={casos.headline} subhead={casos.subhead} />
			<p className="reveal measure mt-4 text-base md:text-lg">{casos.intro}</p>

			<div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-10">
				<article className="reveal surface-ink flex flex-col p-6 md:p-10">
					<CaseBody item={featured} />
				</article>

				<div className="flex flex-col divide-y divide-line border-y border-line">
					{others.map((item) => (
						<article key={item.name} className="reveal flex flex-1 flex-col py-8 first:pt-6 last:pb-6">
							<CaseBody item={item} />
						</article>
					))}
				</div>
			</div>
		</Section>
	);
}
