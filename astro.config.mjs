// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import process from 'node:process';
import { defaultLocale, locales } from './src/i18n/config.ts';

// https://astro.build/config
const site = process.env.PUBLIC_SITE_URL ?? 'https://brianstefanovich.com';

export default defineConfig({
	site,
	output: 'static',
	server: {
		host: true,
		allowedHosts: [
			'4321--personal-site--personal-site--brianstefanovich.coder.brianstefanovich.com',
			'4321--workspace--personal-site--brianstefanovich.coder.brianstefanovich.com',
		],
	},
	i18n: {
		defaultLocale: 'es',
		locales: [...locales],
		routing: { prefixDefaultLocale: false },
	},
	integrations: [
		react(),
		sitemap({
			filter: (page) => !page.endsWith('/robots.txt'),
			// Adds xhtml:link alternates to the sitemap once a second locale is published (add its hreflang code here).
			...(locales.length > 1 && { i18n: { defaultLocale, locales: { es: 'es', en: 'en' } } }),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
