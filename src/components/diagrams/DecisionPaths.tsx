import { Box, Diagram, Label, Node, Path } from '@/components/diagrams/primitives';
import { es } from '@/i18n/es';
import type { CSSProperties } from 'react';

const { diagram } = es.home.presentacion;

const OPTION_Y = [45, 115, 185, 255] as const;
const CHOSEN = 1;

/** One problem, four real options, one chosen direction. With `intro` it draws once on load: options branch out, then the decision resolves. */
export function DecisionPaths({ className, intro = false }: { className?: string; intro?: boolean }) {
	const at = (ms: number) => (intro ? ({ '--d': `${ms}ms` } as CSSProperties) : undefined);
	const line = intro ? 'intro-draw stroke-current' : 'stroke-current';
	const pop = intro ? 'intro-pop' : undefined;
	const delay = (ms: number) => (intro ? ms : undefined);
	let branch = 0;

	return (
		<Diagram label={diagram.label} viewBox="0 0 390 300" className={className}>
			<path d="M22 150 H64" pathLength={1} style={at(120)} className={line} />
			{OPTION_Y.map((y, i) =>
				i === CHOSEN ? null : (
					<path key={y} d={`M64 150 C 94 150, 94 ${y}, 124 ${y}`} pathLength={1} style={at(320 + branch++ * 100)} className={line} />
				),
			)}
			<Path d={`M64 150 C 94 150, 94 ${OPTION_Y[CHOSEN]}, 124 ${OPTION_Y[CHOSEN]}`} delay={delay(520)} />
			<Path d={`M264 ${OPTION_Y[CHOSEN]} H328`} delay={delay(1150)} />

			<g className={pop} style={at(0)}>
				<Node x={22} y={150} r={6} />
				<Label x={0} y={128}>
					{diagram.problem}
				</Label>
			</g>

			{OPTION_Y.map((y, i) => (
				<g key={y} className={pop} style={at(620 + i * 90)}>
					<Box x={124} y={y} w={140} selected={i === CHOSEN} />
					<Label x={136} y={y + 4} tone={i === CHOSEN ? 'link' : 'ink'}>
						{diagram.options[i]}
					</Label>
				</g>
			))}

			<g className={pop} style={at(1600)}>
				<circle cx={338} cy={OPTION_Y[CHOSEN]} r={11} strokeWidth={2} className="stroke-link" />
				<Node x={338} y={OPTION_Y[CHOSEN]} r={5} tone="link" />
				<Label x={338} y={OPTION_Y[CHOSEN] + 34} anchor="middle" tone="link">
					{diagram.decision}
				</Label>
			</g>
		</Diagram>
	);
}
