// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import process from 'node:process';

// https://astro.build/config
const site = process.env.PUBLIC_SITE_URL ?? 'https://example.com';

export default defineConfig({
	site,
	output: 'static',
	i18n: {
		defaultLocale: 'es',
		locales: ['es'],
		routing: { prefixDefaultLocale: false },
	},
	integrations: [react(), sitemap({ filter: (page) => !page.endsWith('/robots.txt') })],
	vite: {
		plugins: [tailwindcss()],
	},
});
