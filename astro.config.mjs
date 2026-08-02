import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* `site` is required for SEO: canonical URLs, the sitemap and OG tags are
   derived from it. Must match the CNAME file in public/. */
export default defineConfig({
  site: 'https://octaglot.qd.je',
  integrations: [sitemap()],
});
