import { defaultLocale, locales, type Locale } from '@/i18n/config';
import { es } from '@/i18n/es';
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/contact';

export type JsonLd = Record<string, unknown>;

export interface BreadcrumbItem {
	name: string;
	path: string;
}

/** `hreflang` tags use language-region codes; Open Graph uses underscores. Add an entry here when a locale is published. */
const localeTags: Record<Locale, { hreflang: string; og: string }> = {
	es: { hreflang: 'es', og: 'es_CL' },
};

export const ogLocale = (locale: Locale) => localeTags[locale].og;

/** Static output serves every route as a directory, so every URL carries a trailing slash. */
export function absoluteUrl(path: string, site: URL): string {
	return new URL(path.endsWith('/') || path.includes('#') ? path : `${path}/`, site).toString();
}

/** Path of a page in another locale. The default locale keeps its current, unprefixed routes. */
export function localizedPath(path: string, locale: Locale): string {
	if (locale === defaultLocale) return path;
	return `/${locale}${path === '/' ? '' : path}`;
}

export interface Alternate {
	hreflang: string;
	href: string;
}

/**
 * `hreflang` alternates for a page. Empty until a second locale exists, because a lone self-reference adds nothing;
 * once `locales` has more entries, every page lists all of them plus `x-default`, and each translation keeps its own canonical.
 */
export function alternatesFor(path: string, site: URL): Alternate[] {
	if (locales.length < 2) return [];
	const alternates = locales.map((locale) => ({
		hreflang: localeTags[locale].hreflang,
		href: absoluteUrl(localizedPath(path, locale), site),
	}));
	return [...alternates, { hreflang: 'x-default', href: absoluteUrl(localizedPath(path, defaultLocale), site) }];
}

const ids = (site: URL) => ({
	website: `${site.origin}/#website`,
	person: `${site.origin}/#brian`,
	business: `${site.origin}/#business`,
});

interface GraphInput {
	site: URL;
	locale: Locale;
	url: string;
	title: string;
	description: string;
	image: string;
	breadcrumbs?: readonly BreadcrumbItem[];
	extra?: readonly JsonLd[];
}

/** Structured data shared by every page: who the site is about, the business behind it, and where the page sits. */
export function buildJsonLd({ site, locale, url, title, description, image, breadcrumbs = [], extra = [] }: GraphInput): JsonLd {
	const id = ids(site);
	const { company } = es.footer;
	const [street] = company.address;
	const inLanguage = localeTags[locale].hreflang;
	const trail = [{ name: es.nav.homeCrumb, path: '/' }, ...breadcrumbs];

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': id.website,
				url: absoluteUrl('/', site),
				name: es.nav.name,
				inLanguage,
				publisher: { '@id': id.business },
			},
			{
				'@type': 'Person',
				'@id': id.person,
				name: es.nav.name,
				jobTitle: es.home.hero.eyebrow,
				url: absoluteUrl('/', site),
				image: new URL('/images/brian-portrait.webp', site).toString(),
				email: CONTACT_EMAIL,
				sameAs: [LINKEDIN_URL],
				worksFor: { '@id': id.business },
				knowsAbout: ['Arquitectura de software', 'Consultoría de software', 'Modernización de sistemas', 'Validación de productos digitales', 'MVP'],
			},
			{
				'@type': 'ProfessionalService',
				'@id': id.business,
				name: es.nav.name,
				legalName: company.name,
				url: absoluteUrl('/', site),
				image: new URL('/og-default.png', site).toString(),
				email: CONTACT_EMAIL,
				founder: { '@id': id.person },
				address: {
					'@type': 'PostalAddress',
					streetAddress: street,
					addressLocality: 'Las Condes',
					addressRegion: 'Región Metropolitana de Santiago',
					addressCountry: 'CL',
				},
				areaServed: [{ '@type': 'Country', name: 'Chile' }, 'Worldwide'],
				availableLanguage: ['es', 'en'],
				sameAs: [LINKEDIN_URL],
			},
			{
				'@type': 'WebPage',
				'@id': `${url}#webpage`,
				url,
				name: title,
				description,
				inLanguage,
				isPartOf: { '@id': id.website },
				about: { '@id': id.business },
				primaryImageOfPage: { '@type': 'ImageObject', url: image },
				...(breadcrumbs.length > 0 && { breadcrumb: { '@id': `${url}#breadcrumb` } }),
			},
			...(breadcrumbs.length > 0
				? [
						{
							'@type': 'BreadcrumbList',
							'@id': `${url}#breadcrumb`,
							itemListElement: trail.map((item, index) => ({
								'@type': 'ListItem',
								position: index + 1,
								name: item.name,
								item: absoluteUrl(item.path, site),
							})),
						},
					]
				: []),
			...extra,
		],
	};
}

/** Safe to embed in a `<script>`: a literal `</script>` or `<!--` inside any string cannot close or alter the tag. */
export const serializeJsonLd = (data: JsonLd) => JSON.stringify(data).replace(/</g, '\\u003c');
