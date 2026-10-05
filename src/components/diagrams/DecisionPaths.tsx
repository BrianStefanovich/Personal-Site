import { Box, Diagram, Label, Node, Path } from '@/components/diagrams/primitives';
import { es } from '@/i18n/es';

const { diagram } = es.home.presentacion;

const OPTION_Y = [45, 115, 185, 255] as const;
const CHOSEN = 1;

/** One problem, four real options, one chosen direction. */
export function DecisionPaths({ className }: { className?: string }) {
	return (
		<Diagram label={diagram.label} viewBox="0 0 390 300" className={className}>
			<path d="M22 150 H64" className="stroke-current" />
			{OPTION_Y.map((y, i) =>
				i === CHOSEN ? null : <path key={y} d={`M64 150 C 94 150, 94 ${y}, 124 ${y}`} className="stroke-current" />,
			)}
			<Path d={`M64 150 C 94 150, 94 ${OPTION_Y[CHOSEN]}, 124 ${OPTION_Y[CHOSEN]}`} />
			<Path d={`M264 ${OPTION_Y[CHOSEN]} H328`} />

			<Node x={22} y={150} r={6} />
			<Label x={0} y={128}>
				{diagram.problem}
			</Label>

			{OPTION_Y.map((y, i) => (
				<g key={y}>
					<Box x={124} y={y} w={140} selected={i === CHOSEN} />
					<Label x={136} y={y + 4} tone={i === CHOSEN ? 'link' : 'ink'}>
						{diagram.options[i]}
					</Label>
				</g>
			))}

			<circle cx={338} cy={OPTION_Y[CHOSEN]} r={11} strokeWidth={2} className="stroke-link" />
			<Node x={338} y={OPTION_Y[CHOSEN]} r={5} tone="link" />
			<Label x={338} y={OPTION_Y[CHOSEN] + 34} anchor="middle" tone="link">
				{diagram.decision}
			</Label>
		</Diagram>
	);
}
