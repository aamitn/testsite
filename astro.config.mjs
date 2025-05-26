import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';


export default defineConfig({
  base: "/", // <-- match the GitHub repo name/hosting path of your site
  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: ['*'],
        uis: ['*']
      }
    }),
    starlight({
      title: 'WinHider Docs',
        logo: {
        src: './src/assets/logo_small.png'
      },
      social: [
        { label: 'GitHub', href: 'https://github.com/aamitn/winhider', icon: 'github' },
        { label: 'Twitter', href: 'https://x.com/bitmutex', icon: 'x.com' }
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: 'docs/introduction' },
            { label: 'Installation', link: 'docs/installation' },
          ],
        },
        {
          label: 'Usage',
          items: [
            { label: 'GUI Mode', link: 'docs/gui-mode' },
            { label: 'CLI Mode', link: 'docs/cli-mode' },
            { label: 'Hotkeys', link: 'docs/hotkeys' },
          ],
        },
        {
          label: 'Advanced',
          items: [
            { label: 'Technical Details', link: 'docs/technical-details' },
            { label: 'FAQs', link: 'docs/faqs' },
            { label: 'Contributing', link: 'docs/contributing' },
          ],
        }
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["astro", "@astrojs/image", "@fontsource-variable/inter"],
    },
  },
});