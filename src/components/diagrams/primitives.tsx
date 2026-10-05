import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

/** Shared SVG vocabulary: neutral linework in muted ink, one Blueprint path per diagram, Copper only for risk. */

export function Diagram({ label, viewBox, className, children }: { label: string; viewBox: string; className?: string; children: ReactNode }) {
	return (
		<svg role="img" aria-label={label} viewBox={viewBox} fill="none" strokeWidth={1.5} className={cn('h-auto w-full text-muted', className)}>
			{children}
		</svg>
	);
}

export function Label({
	x,
	y,
	anchor = 'start',
	tone = 'ink',
	children,
}: {
	x: number;
	y: number;
	anchor?: 'start' | 'middle' | 'end';
	tone?: 'ink' | 'link' | 'consequence';
	children: string;
}) {
	return (
		<text
			x={x}
			y={y}
			textAnchor={anchor}
			aria-hidden="true"
			className={cn(
				'font-mono text-[13px] font-medium uppercase tracking-[0.06em]',
				tone === 'ink' && 'fill-ink',
				tone === 'link' && 'fill-link',
				tone === 'consequence' && 'fill-consequence',
			)}
		>
			{children}
		</text>
	);
}

/** The path that carries the decision: Blueprint, drawn on scroll. */
export function Path({ d, tone = 'link', width = 2.5 }: { d: string; tone?: 'link' | 'consequence'; width?: number }) {
	return (
		<path
			d={d}
			pathLength={1}
			strokeWidth={width}
			strokeLinecap="round"
			className={cn('draw', tone === 'link' ? 'stroke-link' : 'stroke-consequence')}
		/>
	);
}

export function Node({ x, y, r = 5, tone = 'ink' }: { x: number; y: number; r?: number; tone?: 'ink' | 'link' | 'consequence' }) {
	return (
		<circle
			cx={x}
			cy={y}
			r={r}
			strokeWidth={0}
			className={cn(tone === 'ink' && 'fill-ink', tone === 'link' && 'fill-link', tone === 'consequence' && 'fill-consequence')}
		/>
	);
}

export function Box({ x, y, w, h = 34, selected = false }: { x: number; y: number; w: number; h?: number; selected?: boolean }) {
	return (
		<rect
			x={x}
			y={y - h / 2}
			width={w}
			height={h}
			rx={4}
			strokeWidth={selected ? 2 : 1.5}
			className={selected ? 'stroke-link' : 'stroke-current'}
		/>
	);
}
