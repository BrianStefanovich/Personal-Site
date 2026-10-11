import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { proceso } = es.home;

/** How work begins: a free conversation, then a scoped engagement. The point where paid work starts is stated, not hidden. */
export default function ProcessSteps() {
	return (
		<Section id="como-trabajo">
			<div className="grid gap-y-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:grid-rows-[auto_1fr] lg:gap-x-24 lg:gap-y-12">
				<SectionHeading title={proceso.headline} className="lg:col-start-1 lg:row-start-1" />

				<ol className="flex flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1">
					{proceso.steps.map((step, index) => (
						<li
							key={step.title}
							className="grid gap-2 border-t border-line py-6 last:border-b md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-x-8 md:gap-y-3 md:py-10"
						>
							<span aria-hidden="true" className="label-mono text-sm text-link md:hidden">
								{String(index + 1).padStart(2, '0')}
							</span>
							<h3>{step.title}</h3>
							<p className="text-body text-muted">{step.body}</p>
						</li>
					))}
				</ol>

				<div className="flex flex-col gap-3 rounded-card p-6 shadow-[inset_0_0_0_1px_var(--border-hairline)] md:p-8 lg:col-start-1 lg:row-start-2 lg:self-start">
					<h3>{proceso.closingTitle}</h3>
					<p className="text-base text-muted">{proceso.closing}</p>
				</div>
			</div>
		</Section>
	);
}
