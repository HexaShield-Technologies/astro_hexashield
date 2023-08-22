import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://hexashield-technologies.github.io/astro_hexashield',
  base: '/astro_hexashield/',
  integrations: [
    tailwind(),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    })
  ]
}
);