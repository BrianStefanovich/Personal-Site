interface SectionEyebrowProps {
	number: string;
	/** Short label shown only on the mobile layout. */
	short: string;
	long: string;
}

export function SectionEyebrow({ number, short, long }: SectionEyebrowProps) {
	return (
		<div className="flex flex-col gap-2">
			<p className="font-mono text-xs leading-4 tracking-[0.06em] text-accent-soft uppercase md:hidden">
				{number} / {short}
			</p>
			<p className="font-mono text-xs leading-4 tracking-[0.06em] text-muted uppercase md:tracking-[0.08em]">
				<span className="hidden text-accent-soft md:inline">{number} / </span>
				{long}
			</p>
		</div>
	);
}
