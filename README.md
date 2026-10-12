# AP Portfolio

A static portfolio built with Astro, React islands, Tailwind CSS, and shadcn-compatible UI primitives.

## Development

```sh
npm install
cp .env.example .env
npm run dev
```

Set `PUBLIC_SITE_URL` to the public canonical origin before a production build. `PUBLIC_GA_MEASUREMENT_ID` is optional; when present, Google Analytics 4 is added only to production output.

```sh
PUBLIC_SITE_URL=https://your-domain.example npm run build
```

## Content

All page copy lives in `src/i18n/es.ts` as a typed dictionary. Components read it through `getTranslations()` from `src/i18n`, so adding a language means adding a new dictionary file, registering it in `src/i18n/config.ts`, and listing the locale in the `i18n` block of `astro.config.mjs`.

Spanish is the default locale and is served unprefixed at `/`.

Service pages live at `/services/[slug]` and are generated from `home.services.items`, with the index of all three at `/services`; case pages at `/cases/[slug]` from `home.cases.items`, with the full list at `/cases`; legal pages at `/privacy` and `/terms` (from `src/i18n/legal.ts`). Routes, anchors, ids and dictionary keys are always English; only the dictionary values are translated. Diagrams are in `src/components/diagrams/` and read their text from `es.diagrams`. Analytics events are declared with `data-track*` attributes (see `src/lib/analytics.ts`).

Contact CTAs open the Cal.com booking popup directly through `src/components/CalLauncher.tsx` (`@calcom/embed-react`), with no intermediate step; if the embed fails to load it opens the public booking page.

## Quality checks

```sh
npm run lint
npm run typecheck
npm run build
```

The production build generates static pages, a sitemap, and `robots.txt`. Configure static hosting to publish the `dist/` directory.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
