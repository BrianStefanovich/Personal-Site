import { Arrowhead, Diagram, DiagramFigure, Edge, Flow, Point, Step, Terminal, Text, Verb } from '@/components/diagrams/primitives';
import { es } from '@/i18n/es';

const { diagrams } = es;

/** The system the client already has: a problem, a diagnosis, five equivalent options, and no recommendation drawn in advance. */
export function ExistingSystemMap({ className }: { className?: string }) {
	const d = diagrams.existing;
	const wideY = [30, 90, 150, 210, 270] as const;
	const narrowY = [130, 176, 222, 268, 314] as const;

	const wide = (
		<Diagram label={d.label} viewBox="0 0 396 300">
			<Point x={14} y={150} r={6} />
			<Text x={0} y={126}>
				{d.problem}
			</Text>
			<Flow d="M14 150 H70" />
			<Point x={76} y={150} r={5} />
			<Text x={96} y={180} anchor="end">
				{d.diagnosis}
			</Text>
			<Edge d="M76 150 H106 M106 30 V270 M322 30 V270 M322 150 H357" />
			{d.options.map((label, i) => {
				const y = wideY[i];
				return (
					<g key={label}>
						<Edge d={`M106 ${y} H126`} />
						<Arrowhead x={130} y={y} dir="right" />
						<Step x={130} y={y} w={172} label={label} />
						<Edge d={`M302 ${y} H322`} />
					</g>
				);
			})}
			<Terminal x={368} y={150} />
			<Text x={396} y={184} anchor="end" tone="selected">
				{d.decision}
			</Text>
		</Diagram>
	);

	const narrow = (
		<Diagram label={d.label} viewBox="0 0 270 390">
			<Point x={14} y={16} r={6} />
			<Text x={32} y={21}>
				{d.problem}
			</Text>
			<Flow d="M14 22 V64" />
			<Point x={14} y={70} r={5} />
			<Text x={32} y={75}>
				{d.diagnosis}
			</Text>
			<Edge d="M14 70 V314" />
			<Edge d="M244 130 V360" />
			{d.options.map((label, i) => {
				const y = narrowY[i];
				return (
					<g key={label}>
						<Edge d={`M14 ${y} H40`} />
						<Arrowhead x={44} y={y} dir="right" />
						<Step x={44} y={y} w={176} label={label} />
						<Edge d={`M220 ${y} H244`} />
					</g>
				);
			})}
			<Terminal x={244} y={360} />
			<Text x={224} y={365} anchor="end" tone="selected">
				{d.decision}
			</Text>
		</Diagram>
	);

	return <DiagramFigure className={className} wide={wide} narrow={narrow} note={diagrams.note} caption={d.caption} />;
}

/** Hypothesis, test, evidence, then a decision that can go three ways. A validation map, not formal UML. */
export function ValidationMap({ className }: { className?: string }) {
	const d = diagrams.validation;
	const [hypothesis, test, evidence] = d.steps;

	const wide = (
		<Diagram label={d.label} viewBox="0 0 420 200">
			<Step x={0} y={48} w={104} label={hypothesis} />
			<Flow d="M104 48 H128" />
			<Arrowhead x={132} y={48} dir="right" tone="selected" />
			<Step x={134} y={48} w={88} label={test} />
			<Flow d="M222 48 H246" />
			<Arrowhead x={250} y={48} dir="right" tone="selected" />
			<Step x={252} y={48} w={104} label={evidence} />
			<Flow d="M356 48 H388" />
			<Terminal x={400} y={48} />
			<Text x={420} y={14} anchor="end" tone="selected">
				{d.decision}
			</Text>

			<Edge d="M400 59 V118 H52" />
			<Verb x={64} y={108}>
				{d.branch}
			</Verb>
			{[
				{ x: 0, w: 104, label: d.outcomes[0] },
				{ x: 140, w: 88, label: d.outcomes[1] },
				{ x: 282, w: 88, label: d.outcomes[2] },
			].map(({ x, w, label }) => (
				<g key={label}>
					<Edge d={`M${x + w / 2} 118 V147`} />
					<Arrowhead x={x + w / 2} y={151} dir="down" />
					<Step x={x} y={168} w={w} label={label} />
				</g>
			))}
		</Diagram>
	);

	const outcomeY = [250, 296, 342] as const;
	const narrow = (
		<Diagram label={d.label} viewBox="0 0 270 370">
			<Step x={0} y={20} w={150} label={hypothesis} />
			<Flow d="M75 37 V61" />
			<Arrowhead x={75} y={67} dir="down" tone="selected" />
			<Step x={0} y={84} w={150} label={test} />
			<Flow d="M75 101 V125" />
			<Arrowhead x={75} y={131} dir="down" tone="selected" />
			<Step x={0} y={148} w={150} label={evidence} />
			<Flow d="M75 165 V184" />
			<Terminal x={75} y={196} />
			<Text x={96} y={201} tone="selected">
				{d.decision}
			</Text>
			<Verb x={96} y={228}>
				{d.branch}
			</Verb>
			<Edge d="M75 207 V342" />
			{d.outcomes.map((label, i) => (
				<g key={label}>
					<Edge d={`M75 ${outcomeY[i]} H96`} />
					<Arrowhead x={100} y={outcomeY[i]} dir="right" />
					<Step x={100} y={outcomeY[i]} w={130} label={label} />
				</g>
			))}
		</Diagram>
	);

	return <DiagramFigure className={className} wide={wide} narrow={narrow} note={diagrams.note} caption={d.caption} />;
}

/** Who decides, who directs, who builds: four messages between three roles. Copper carries the risk message. */
export function ResponsibilityMap({ className }: { className?: string }) {
	const d = diagrams.responsibility;
	const lanes = [54, 160, 266] as const;
	const [prioritize, guide, deliver, warn] = d.messages;

	const narrow = (
		<Diagram label={d.label} viewBox="0 0 320 250">
			{d.roles.map((role, i) => (
				<g key={role.name}>
					<Step x={lanes[i] - 48} y={30} w={96} label={role.name} sub={role.sub} align="middle" />
					<Edge d={`M${lanes[i]} 55 V240`} dashed />
				</g>
			))}

			<Edge d="M54 98 H150" />
			<Arrowhead x={156} y={98} dir="right" />
			<Verb x={107} y={90} anchor="middle">
				{prioritize}
			</Verb>

			<Flow d="M160 138 H254" />
			<Arrowhead x={260} y={138} dir="right" tone="selected" />
			<Verb x={213} y={130} anchor="middle" tone="selected">
				{guide}
			</Verb>

			<Edge d="M266 178 H172" />
			<Arrowhead x={166} y={178} dir="left" />
			<Verb x={219} y={170} anchor="middle">
				{deliver}
			</Verb>

			<Edge d="M160 218 H64" dashed tone="risk" />
			<Arrowhead x={58} y={218} dir="left" tone="risk" />
			<Verb x={109} y={210} anchor="middle" tone="risk">
				{warn}
			</Verb>
		</Diagram>
	);

	return <DiagramFigure className={className} narrow={narrow} note={diagrams.note} caption={d.caption} />;
}
