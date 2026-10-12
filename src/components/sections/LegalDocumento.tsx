import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { LegalDocument } from '@/i18n/legal';

/** A long-form legal page: one reading column, headings that carry the structure, bullets in the site's square-marker style. */
export default function LegalDocumento({ doc }: { doc: LegalDocument }) {
	return (
		<Section>
			<Breadcrumbs trail={[{ label: doc.crumb }]} />
			<div className="flex max-w-[48rem] flex-col gap-6">
				<SectionHeading as="h1" title={doc.title} />
				{doc.updated && <p className="label-mono text-sm text-muted">{doc.updated}</p>}
			</div>

			<div className="mt-10 flex max-w-[65ch] flex-col gap-5 md:mt-14">
				{doc.blocks.map((block, index) => {
					if ('h2' in block)
						return (
							<h2 key={index} className="mt-8 text-balance text-headline first:mt-0">
								{block.h2}
							</h2>
						);
					if ('h3' in block)
						return (
							<h3 key={index} className="mt-4 text-balance first:mt-0">
								{block.h3}
							</h3>
						);
					if ('p' in block)
						return (
							<p key={index} className="text-body">
								{block.p}
							</p>
						);
					return (
						<ul key={index} className="flex flex-col gap-3">
							{block.ul.map((item) => (
								<li
									key={item}
									className="text-body relative pl-6 before:absolute before:left-0 before:top-[0.65em] before:size-2 before:bg-blueprint"
								>
									{item}
								</li>
							))}
						</ul>
					);
				})}
			</div>
		</Section>
	);
}
