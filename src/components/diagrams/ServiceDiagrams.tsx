import { Box, Diagram, Label, Node, Path } from '@/components/diagrams/primitives';
import { es } from '@/i18n/es';

const { diagrams } = es.home.servicios;

/** Complexity to clarity: a tangled system with one risky dependency, then a single direction. */
export function ExistingSystemDiagram({ className }: { className?: string }) {
	const d = diagrams.existing;
	const nodes = [
		[28, 56],
		[112, 34],
		[88, 118],
		[172, 100],
		[40, 194],
		[146, 200],
	] as const;
	const links = [
		[0, 1],
		[0, 2],
		[1, 3],
		[1, 2],
		[2, 4],
		[3, 5],
		[4, 5],
		[0, 4],
		[2, 5],
	] as const;

	return (
		<Diagram label={d.label} viewBox="0 0 420 260" className={className}>
			{links.map(([a, b]) => (
				<line
					key={`${a}-${b}`}
					x1={nodes[a][0]}
					y1={nodes[a][1]}
					x2={nodes[b][0]}
					y2={nodes[b][1]}
					className="stroke-current"
					strokeOpacity={0.55}
				/>
			))}
			<Path d={`M${nodes[2][0]} ${nodes[2][1]} L${nodes[3][0]} ${nodes[3][1]}`} tone="consequence" width={3} />
			{nodes.map(([x, y]) => (
				<Node key={`${x}-${y}`} x={x} y={y} r={5} />
			))}
			<Label x={nodes[2][0] + 40} y={nodes[2][1] + 34} anchor="middle" tone="consequence">
				{d.risk}
			</Label>
			<Label x={0} y={nodes[0][1] - 24}>
				{d.dependency}
			</Label>

			<path d="M206 126 H250" className="stroke-current" />
			<path d="M244 120 L250 126 L244 132" className="stroke-current" />

			<Path d="M270 126 H390" />
			<Node x={270} y={126} r={5} tone="link" />
			<Node x={330} y={126} r={5} tone="link" />
			<circle cx={390} cy={126} r={10} strokeWidth={2} className="stroke-link" />
			<Node x={390} y={126} r={4} tone="link" />
			<Label x={390} y={98} anchor="end" tone="link">
				{d.direction}
			</Label>
		</Diagram>
	);
}

/** Not every path ends in code: validate the hypothesis first, build later. */
export function NewProductDiagram({ className }: { className?: string }) {
	const d = diagrams.newProduct;

	return (
		<Diagram label={d.label} viewBox="0 0 420 260" className={className}>
			<path d="M24 130 H150" className="stroke-current" />
			<path d="M150 130 C 190 130, 190 196, 230 196" className="stroke-current" />
			<Path d="M150 130 C 190 130, 190 64, 230 64" />
			<path d="M340 196 H366" className="stroke-current" strokeDasharray="4 4" />

			<Node x={24} y={130} r={6} />
			<Label x={0} y={108}>
				{d.opportunity}
			</Label>
			<Node x={150} y={130} r={6} />
			<Label x={150} y={108} anchor="middle">
				{d.hypothesis}
			</Label>

			<Box x={230} y={64} w={110} selected />
			<Label x={242} y={68} tone="link">
				{d.validate}
			</Label>
			<Box x={230} y={196} w={110} />
			<Label x={242} y={200}>
				{d.build}
			</Label>
			<Box x={366} y={196} w={48} />
			<Label x={376} y={200}>
				{d.mvp}
			</Label>
		</Diagram>
	);
}

/** Fractional architect as a transversal capability: the point where product, team and business meet. */
export function FractionalDiagram({ className }: { className?: string }) {
	const d = diagrams.fractional;
	const sources = [
		[50, d.product],
		[130, d.team],
		[210, d.business],
	] as const;

	return (
		<Diagram label={d.label} viewBox="0 0 420 260" className={className}>
			{sources.map(([y]) => (
				<path key={y} d={`M110 ${y} C 170 ${y}, 170 130, 222 130`} className="stroke-current" />
			))}
			<Path d="M240 130 H300" />

			{sources.map(([y, text]) => (
				<g key={y}>
					<Box x={10} y={y} w={100} />
					<Label x={22} y={y + 4}>
						{text}
					</Label>
				</g>
			))}

			<circle cx={231} cy={130} r={10} strokeWidth={2} className="stroke-link" />
			<Node x={231} y={130} r={4} tone="link" />
			<Label x={231} y={104} anchor="middle" tone="link">
				{d.decision}
			</Label>

			<Box x={300} y={130} w={114} selected />
			<Label x={312} y={134} tone="link">
				{d.architecture}
			</Label>
		</Diagram>
	);
}
