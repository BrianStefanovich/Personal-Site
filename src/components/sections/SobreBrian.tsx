import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { sobreBrian } = es.home;

export default function SobreBrian() {
	return (
		<Section id="sobre-brian" contentClassName="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-x-24">
			<div className="surface-hero flex aspect-[4/5] w-full max-w-[26rem] items-end justify-center overflow-hidden shadow-[inset_0_0_0_1px_var(--border-hairline)] lg:max-w-none">
				<img src="/images/sobre-brian.webp" alt={sobreBrian.imageAlt} width={544} height={563} loading="lazy" className="h-auto w-full" />
			</div>

			<div className="flex flex-col gap-8">
				<SectionHeading eyebrow={sobreBrian.headline} title={sobreBrian.subhead} />
				<p className="text-lead">{sobreBrian.intro}</p>
				<p className="text-body max-w-[45rem] text-muted">{sobreBrian.lead}</p>

				<dl className="mt-2 grid gap-x-12 sm:grid-cols-2">
					{sobreBrian.areas.map((area) => (
						<div key={area.title} className="flex flex-col gap-2.5 border-t border-line py-6">
							<dt className="label-mono text-sm text-link">{area.title}</dt>
							<dd className="text-base text-muted">{area.body}</dd>
						</div>
					))}
				</dl>
			</div>
		</Section>
	);
}
