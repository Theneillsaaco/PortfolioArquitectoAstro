// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://Theneillsaaco.github.io',
  base: '/PortfolioArquitectoAstro',

  server:{
      host: true,
      port: 4321,
  },

  vite: {
      plugins: [tailwindcss()]
  },
  
  integrations: [icon()],
});