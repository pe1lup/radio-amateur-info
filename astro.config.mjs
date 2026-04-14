import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Radio Amateur Info',
      description:
        'Een wiki over digitale communicatiemogelijkheden voor de zendamateur: van APRS en PSK31 tot RTTY en professionele modi zoals Coquelet.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Nederlands',
          lang: 'nl',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      sidebar: [
        {
          label: 'Welkom',
          translations: { en: 'Welcome' },
          link: '/',
        },
        {
          label: 'Digitale modes',
          translations: { en: 'Digital modes' },
          items: [
            {
              label: 'Digitale amateur modes',
              translations: { en: 'Digital amateur modes' },
              link: '/digitale-amateur-modes/',
            },
            {
              label: 'Digitale professionele mode',
              translations: { en: 'Digital professional modes' },
              link: '/digitale-professionele-mode/',
            },
          ],
        },
      ],
      social: [],
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
    }),
  ],
  site: 'https://pe1lup.github.io',
  base: process.env.CI ? '/radio-amateur-info' : undefined,
});
