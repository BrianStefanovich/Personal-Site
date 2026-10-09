import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { es } from '@/i18n/es';

const { proceso } = es.home;

export default function ProcessSteps() {
	return (
		<Section id="como-trabajo">
			<div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-x-24">
				<div className="flex flex-col gap-8 lg:gap-12">
					<SectionHeading title={proceso.subhead} />
					<div className="flex flex-col gap-3 rounded-card p-6 shadow-[inset_0_0_0_1px_var(--border-hairline)] md:p-8">
						<h3>{proceso.closingTitle}</h3>
						<p className="text-base text-muted">{proceso.closing}</p>
					</div>
				</div>

				<ol className="flex flex-col">
					{proceso.steps.map((step) => (
						<li
							key={step.title}
							className="grid gap-3 border-t border-line py-8 last:border-b md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-x-8 md:py-10"
						>
							<h3>{step.title}</h3>
							<p className="text-body text-muted">{step.body}</p>
						</li>
					))}
				</ol>
			</div>
		</Section>
	);
}
