import type { Rich } from '@/i18n/es';

export function RichText({ parts }: { parts: Rich }) {
	return (
		<>
			{parts.map((part, i) => (typeof part === 'string' ? part : <strong key={i}>{part.b}</strong>))}
		</>
	);
}
