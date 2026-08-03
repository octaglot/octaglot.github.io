import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* `site` is required for SEO: canonical URLs, the sitemap and OG tags are
   derived from it. The repository is named octaglot.github.io, so Pages serves
   it at the organisation root and GitHub's wildcard certificate covers it. */
export default defineConfig({
  site: 'https://octaglot.github.io',
  integrations: [sitemap()],
});
