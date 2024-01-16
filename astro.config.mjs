import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/static';
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: "https://sattiyans.com",
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark-dimmed' },
      gfm: true,
    }),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ],
  adapter: vercel({
    analytics: true,
  }),
  redirects: {
    '/talk': 'mailto:hey@sattiyans.com',
    '/text': 'https://wa.me/60143072966'
  },
});
