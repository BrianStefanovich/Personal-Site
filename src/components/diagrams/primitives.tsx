import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

/**
 * Shared vocabulary for the decision diagrams. Nodes are boxes, relations are directed lines with a verb,
 * Blueprint marks the action path and Copper marks risk. State never rides on color alone: the selected
 * path is heavier and the risk path is dashed.
 */

export type Tone = 'neutral' | 'selected' | 'risk';

const strokeOf = {
	neutral: 'stroke-diagram-edge',
	selected: 'stroke-diagram-selected',
	risk: 'stroke-diagram-risk',
} as const;

const fillOf = {
	neutral: 'fill-diagram-label',
	selected: 'fill-diagram-selected',
	risk: 'fill-diagram-risk',
} as const;

export function Diagram({ label, viewBox, className, children }: { label: string; viewBox: string; className?: string; children: ReactNode }) {
	return (
		<svg role="img" aria-label={label} viewBox={viewBox} fill="none" strokeWidth={1.5} className={cn('diagram-scope h-auto w-full', className)}>
			{children}
		</svg>
	);
}

/** An illustrative figure: the drawing plus a visible text equivalent that carries the same relations. */
export function DiagramFigure({
	wide,
	narrow,
	caption,
	note,
	className,
}: {
	wide?: ReactNode;
	narrow: ReactNode;
	caption: string;
	note: string;
	className?: string;
}) {
	return (
		<figure className={cn('diagram-scope m-0 flex flex-col gap-4', className)}>
			{wide ? (
				<>
					<div className="hidden md:block">{wide}</div>
					<div className="md:hidden">{narrow}</div>
				</>
			) : (
				narrow
			)}
			<figcaption className="flex flex-col gap-1.5 text-sm leading-[1.5] text-muted">
				<span className="label-mono text-sm tracking-[0.08em] text-diagram-label">{note}</span>
				<span>{caption}</span>
			</figcaption>
		</figure>
	);
}

export function Text({
	x,
	y,
	anchor = 'start',
	tone = 'neutral',
	children,
}: {
	x: number;
	y: number;
	anchor?: 'start' | 'middle' | 'end';
	tone?: Tone;
	children: string;
}) {
	return (
		<text
			x={x}
			y={y}
			textAnchor={anchor}
			aria-hidden="true"
			className={cn('font-mono text-[13px] font-medium uppercase tracking-[0.06em]', fillOf[tone])}
			stroke="none"
		>
			{children}
		</text>
	);
}

/** The verb that names a relation: lowercase, quieter than a node label. */
export function Verb({ x, y, anchor = 'start', tone = 'neutral', children }: { x: number; y: number; anchor?: 'start' | 'middle' | 'end'; tone?: Tone; children: string }) {
	return (
		<text
			x={x}
			y={y}
			textAnchor={anchor}
			aria-hidden="true"
			stroke="none"
			className={cn('font-mono text-xs font-medium', tone === 'neutral' ? 'fill-diagram-node' : fillOf[tone])}
		>
			{children}
		</text>
	);
}

export function Edge({ d, tone = 'neutral', dashed = false }: { d: string; tone?: Tone; dashed?: boolean }) {
	return <path d={d} strokeDasharray={dashed ? '5 5' : undefined} className={strokeOf[tone]} />;
}

/** The action path: heavier, Blueprint, and drawn as it scrolls into view. */
export function Flow({ d }: { d: string }) {
	return <path d={d} pathLength={1} strokeWidth={2.5} strokeLinecap="round" className="draw stroke-diagram-selected" />;
}

const chevron = {
	right: (x: number, y: number) => `M${x - 6} ${y - 5} L${x} ${y} L${x - 6} ${y + 5}`,
	left: (x: number, y: number) => `M${x + 6} ${y - 5} L${x} ${y} L${x + 6} ${y + 5}`,
	down: (x: number, y: number) => `M${x - 5} ${y - 6} L${x} ${y} L${x + 5} ${y - 6}`,
	up: (x: number, y: number) => `M${x - 5} ${y + 6} L${x} ${y} L${x + 5} ${y + 6}`,
} as const;

export function Arrowhead({ x, y, dir, tone = 'neutral' }: { x: number; y: number; dir: keyof typeof chevron; tone?: Tone }) {
	return <path d={chevron[dir](x, y)} strokeLinecap="round" strokeLinejoin="round" className={strokeOf[tone]} />;
}

export function Point({ x, y, r = 5, tone = 'neutral' }: { x: number; y: number; r?: number; tone?: Tone }) {
	return <circle cx={x} cy={y} r={r} stroke="none" className={cn(tone === 'neutral' ? 'fill-diagram-node' : fillOf[tone])} />;
}

/** The point where a decision resolves: a ring around a dot. */
export function Terminal({ x, y, tone = 'selected' }: { x: number; y: number; tone?: Tone }) {
	return (
		<>
			<circle cx={x} cy={y} r={11} strokeWidth={2} className={strokeOf[tone]} />
			<Point x={x} y={y} r={4.5} tone={tone} />
		</>
	);
}

/** A named thing. `y` is the vertical center; the optional `sub` is a second, lowercase line. */
export function Step({
	x,
	y,
	w,
	label,
	sub,
	tone = 'neutral',
	align = 'start',
}: {
	x: number;
	y: number;
	w: number;
	label: string;
	sub?: string;
	tone?: Tone;
	align?: 'start' | 'middle';
}) {
	const h = sub ? 50 : 34;
	const tx = align === 'middle' ? x + w / 2 : x + 12;
	return (
		<>
			<rect
				x={x}
				y={y - h / 2}
				width={w}
				height={h}
				rx={4}
				strokeWidth={tone === 'selected' ? 2 : 1.5}
				className={tone === 'neutral' ? 'stroke-diagram-node' : strokeOf[tone]}
			/>
			<Text x={tx} y={sub ? y - 3 : y + 4.5} anchor={align} tone={tone === 'neutral' ? 'neutral' : tone}>
				{label}
			</Text>
			{sub && (
				<Verb x={tx} y={y + 14} anchor={align}>
					{sub}
				</Verb>
			)}
		</>
	);
}
