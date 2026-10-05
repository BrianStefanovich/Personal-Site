import { DecisionPaths } from '@/components/diagrams/DecisionPaths';
import { RichText } from '@/components/ui/RichText';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { presentacion } = es.home;

export default function Presentacion() {
	return (
		<Section tone="inverse">
			<div className="grid items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-16">
				<div>
					<SectionHeading eyebrow={presentacion.eyebrow} title={presentacion.headline} titleClassName="max-w-[33rem]" />
					<div className="measure mt-8 space-y-5 text-base md:text-lg">
						{presentacion.paragraphs.map((parts, i) => (
							<p key={i} className="reveal">
								<RichText parts={parts} />
							</p>
						))}
					</div>
				</div>

				<DecisionPaths className="reveal mx-auto max-w-[26rem] lg:max-w-none" />
			</div>
		</Section>
	);
}
