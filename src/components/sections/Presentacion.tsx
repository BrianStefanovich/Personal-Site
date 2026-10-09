import { RichText } from '@/components/ui/RichText';
import { Section } from '@/components/ui/Section';
import { es } from '@/i18n/es';

const { presentacion } = es.home;

export default function Presentacion() {
	return (
		<Section tone="inverse" contentClassName="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-x-24">
			<h2 className="text-display">{presentacion.headline}</h2>
			<div className="flex flex-col gap-6 lg:pt-2">
				<p className="text-lead">
					<RichText parts={presentacion.paragraphs[0]} />
				</p>
				<p className="text-body text-muted [&_strong]:font-bold [&_strong]:text-ink">
					<RichText parts={presentacion.paragraphs[1]} />
				</p>
			</div>
		</Section>
	);
}
