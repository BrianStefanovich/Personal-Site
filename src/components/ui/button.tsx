import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 rounded-[2px] font-display font-semibold transition-colors focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-accent text-white hover:bg-accent-soft',
				soft: 'bg-accent-soft text-accent-fg hover:bg-accent',
				outline: 'border border-line bg-surface text-foreground hover:border-accent',
				ghost: 'text-foreground hover:bg-black/5',
			},
			size: {
				sm: 'px-4 py-2 text-base leading-6',
				md: 'px-6 py-3 text-base leading-6',
				lg: 'px-8 py-4 text-base leading-6',
			},
			full: {
				true: 'w-full',
				false: '',
			},
		},
		defaultVariants: { variant: 'default', size: 'md', full: false },
	},
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, full, ...props }: ButtonProps) {
	return <button className={cn(buttonVariants({ variant, size, full }), className)} {...props} />;
}

export { buttonVariants };