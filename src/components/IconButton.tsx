import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

/** 48px circle with a 2px Blueprint ring and no fill. */
export function IconButton({ className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type="button"
			className={cn(
				'flex size-12 items-center justify-center rounded-full border-2 border-blueprint text-current transition hover:brightness-125',
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
