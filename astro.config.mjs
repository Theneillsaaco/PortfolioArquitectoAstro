// @ts-check
import { defineConfig } from 'astro/config';
import icon from '@twodft/astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Theneillsaaco.github.io',
  base: '/PortfolioArquitectoAstro',

  server:{
    host: true,
    port: 4321,
    allowedHosts: true
  },

  integrations: [ icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});