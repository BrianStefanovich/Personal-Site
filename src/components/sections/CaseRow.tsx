import type { ReactNode } from 'react';

/** One line of a case record: a mono label and its statement. Result rows take the Copper consequence tone. */
export function CaseRow({ label, tone, children }: { label: string; tone?: 'consequence'; children: ReactNode }) {
	return (
		<div className="grid gap-2 border-t border-line py-5 last:border-b md:grid-cols-[11.25rem_minmax(0,1fr)] md:gap-x-6">
			<dt className={`label-mono text-sm ${tone === 'consequence' ? 'text-consequence' : 'text-muted'}`}>{label}</dt>
			<dd className={`text-body max-w-[65ch] ${tone === 'consequence' ? '' : 'text-muted'}`}>{children}</dd>
		</div>
	);
}
