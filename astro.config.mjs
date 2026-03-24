import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://martinabaradel.com',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it", "jp"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
