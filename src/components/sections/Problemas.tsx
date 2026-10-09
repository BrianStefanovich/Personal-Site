import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { problema, servicios } = es.home;

export default function Problemas() {
	return (
		<Section>
			<div className="flex flex-col gap-6">
				<SectionHeading title={problema.headline} />
				<p className="text-body max-w-[65ch] text-muted">{problema.subhead}</p>
			</div>

			<ol className="mt-10 grid border-t border-line md:mt-[4.5rem] lg:grid-cols-3">
				{problema.situations.map((situation, i) => {
					const service = servicios.items[i];
					return (
						<li
							key={situation.title}
							className="flex flex-col gap-5 border-b border-line py-10 last:border-b-0 lg:border-b-0 lg:border-r lg:px-10 lg:pb-0 lg:last:border-r-0 lg:first:pl-0 lg:last:pr-0"
						>
							<p className="label-mono text-sm text-link">{situation.tag}</p>
							<h3 className="text-balance">{situation.title}</h3>
							<p className="text-body text-muted">{situation.body}</p>
							<a
								href={`#${service.id}`}
								className="label-mono mt-2 inline-flex min-h-11 items-center text-sm tracking-[0.05em] text-link hover:text-ink"
							>
								{problema.doorLabel}&nbsp;→
							</a>
						</li>
					);
				})}
			</ol>
		</Section>
	);
}
