import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://launchpad.sammc.net",
  integrations: [tailwind(), image()]
  output: 'server',
  adapter: netlify(),
});