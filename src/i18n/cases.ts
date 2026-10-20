import source from './cases.es.json';

/** Logo as supplied by the company. `surface` is the plate it needs: white wordmarks only read on Carbon. */
export interface CaseLogo {
	src: string;
	width: number;
	height: number;
	surface: 'light' | 'dark';
	/** Logo height as a fraction of the plate height; each artwork carries a different amount of built-in padding. */
	fit: number;
}

const logos: Record<string, CaseLogo> = {
	rollkall: { src: '/images/logos/rollkall-white.svg', width: 427, height: 120, surface: 'dark', fit: 0.3 },
	kepler: { src: '/images/logos/kepler-coach.png', width: 1000, height: 455, surface: 'light', fit: 0.62 },
	csbyte: { src: '/images/logos/csbyte.png', width: 228, height: 59, surface: 'light', fit: 0.24 },
	grumantech: { src: '/images/logos/grumantech.png', width: 484, height: 213, surface: 'light', fit: 0.5 },
	vangwe: { src: '/images/logos/vangwe.svg', width: 137, height: 24, surface: 'light', fit: 0.16 },
	globaluy: { src: '/images/logos/globaluy-white.svg', width: 638, height: 184, surface: 'dark', fit: 0.3 },
	crunchloop: { src: '/images/logos/crunchloop.svg', width: 209, height: 36, surface: 'light', fit: 0.2 },
};

/** The relationship with the company, as it must be stated: via another firm, inside it, or freelance. */
const viaLogo: Record<string, string> = { rollkall: 'crunchloop' };

/** Companies with several cases need a distinct search title for each one; the rest are identified by the company name. */
const seoTitles: Record<string, string> = {
	'presupuestos-globaluy': 'Aplicación de presupuestos para GlobalUY',
	'netsuite-globaluy': 'Integración con NetSuite para GlobalUY',
	'cms-financieros-globaluy': 'CMS para instituciones financieras en GlobalUY',
};

const serviceIds: Record<string, string> = {
	'Consultoría técnica': 'existing-systems',
	'Consultoría y desarrollo de MVP': 'new-ventures',
	'Arquitecto fraccional': 'fractional-architect',
};

type Source = (typeof source.cases)[number];

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

function toCase(entry: Source) {
	const [name, ...scope] = entry.company.split(' · ');
	const ongoing = /en curso|en desarrollo/i.test(entry.status);
	const [first, ...rest] = entry.status.split(' · ');
	// Only work still under way is labelled; finished experience keeps just its attribution (via, inside, freelance).
	const state = ongoing ? first : null;
	const detail = (ongoing ? rest : [first]).filter(Boolean).join(' · ');
	const via = viaLogo[entry.id];

	return {
		slug: entry.id,
		name,
		seoTitle: seoTitles[entry.id] ?? null,
		scope: scope.length ? capitalize(scope.join(' · ')) : null,
		/** Companies without a verified logo are set as plain text; a namesake's identity is never borrowed. */
		logo: logos[entry.logo] ?? null,
		via: via ? { name: 'Crunchloop', logo: logos[via] } : null,
		service: serviceIds[entry.service] ?? null,
		serviceLabel: entry.service,
		state,
		detail: detail ? capitalize(detail) : null,
		ongoing,
		role: entry.role,
		title: entry.title,
		card: entry.card,
		story: entry.story,
		takeaway: entry.takeaway,
		cta: entry.cta,
		featured: entry.home_priority,
	};
}

export type CaseItem = ReturnType<typeof toCase>;

/**
 * Public copy only. `cases.es.json` is generated from Casos_Brian_Stefanovich_recursos/casos_web.json keeping the
 * publishable fields of the entries cleared for publication: editorial notes, sources and drafts (Bavastro) never
 * reach the client bundle.
 */
export const publishedCases: readonly CaseItem[] = source.cases.map(toCase);

export const casesSection = {
	title: source.section_title,
	intro: source.section_intro,
};

/** Every company with a verified logo that Brian has worked with, in the order they are shown in the logo strip. */
export const workedWith: readonly { name: string; logo: CaseLogo }[] = [
	{ name: 'Crunchloop', logo: logos.crunchloop },
	{ name: 'RollKall', logo: logos.rollkall },
	{ name: 'Kepler Coach', logo: logos.kepler },
	{ name: 'GlobalUY', logo: logos.globaluy },
	{ name: 'CSBYTE', logo: logos.csbyte },
	{ name: 'Vangwe', logo: logos.vangwe },
	{ name: 'GrumanTech', logo: logos.grumantech },
];
