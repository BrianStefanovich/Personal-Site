import type { CaseItem } from '@/i18n/cases';
import { cn } from '@/lib/utils';

type PlateSize = 'xs' | 'sm' | 'strip' | 'md' | 'lg';

/** Plate geometry per context: a fixed height drives the logo size so every brand gets the same footing. */
const sizes: Record<PlateSize, { box: string; height: string; text: string }> = {
	xs: { box: 'w-28', height: '2.75rem', text: 'text-sm' },
	sm: { box: 'w-full', height: '4.5rem', text: 'text-base' },
	strip: { box: 'w-56', height: '7rem', text: 'text-base' },
	md: { box: 'w-full', height: '10rem', text: 'text-2xl' },
	lg: { box: 'w-full', height: '15rem', text: 'text-3xl' },
};

interface LogoPlateProps {
	name: string;
	logo: CaseItem['logo'];
	size?: PlateSize;
	/** Inside a link that already names the company the image is decorative. */
	decorative?: boolean;
	className?: string;
}

/**
 * The company's own artwork on the surface it was drawn for: white plate for dark wordmarks, Carbon for white ones.
 * Without a verified logo the name is set as text; no namesake identity is borrowed.
 */
export function LogoPlate({ name, logo, size = 'md', decorative = false, className }: LogoPlateProps) {
	const { box, height, text } = sizes[size];

	return (
		<span
			style={{ height }}
			className={cn(
				'flex shrink-0 items-center justify-center gap-[0.6em] overflow-hidden rounded-lg px-3 ring-1 ring-inset',
				logo?.surface === 'dark' ? 'bg-carbon text-porcelain ring-porcelain/15' : 'bg-white text-carbon ring-carbon/15',
				box,
				className,
			)}
		>
			{logo ? (
				<img
					src={logo.src}
					width={logo.width}
					height={logo.height}
					alt={decorative ? '' : `Logo de ${name}`}
					loading="lazy"
					decoding="async"
					style={{ height: `calc(${height} * ${logo.fit})`, width: 'auto', maxWidth: '82%' }}
					className="object-contain"
				/>
			) : (
				<span className={cn('font-display text-balance text-center font-bold leading-tight', text)}>{name}</span>
			)}
		</span>
	);
}
