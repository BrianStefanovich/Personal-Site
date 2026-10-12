import type { CaseItem } from '@/i18n/cases';
import { cn } from '@/lib/utils';

/** Relationship and state of a case. Work still under way carries a Blueprint dot so it is never read as finished. */
export function CaseStatus({ item, className }: { item: CaseItem; className?: string }) {
	if (!item.state && !item.detail) return null;

	return (
		<span className={cn('flex flex-wrap items-baseline gap-x-3 gap-y-1', className)}>
			{item.state && (
				<span className="label-mono inline-flex items-center gap-2 text-[0.8125rem] tracking-[0.08em]">
					{item.ongoing && <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-link transition-colors group-hover:bg-page" />}
					{item.state}
				</span>
			)}
			{item.detail && <span className="text-[0.9375rem] leading-snug text-muted transition-colors group-hover:text-page">{item.detail}</span>}
		</span>
	);
}
