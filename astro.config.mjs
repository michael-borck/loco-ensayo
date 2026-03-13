import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://locoensayo.org',
  base: '/docs',
  integrations: [
    starlight({
      title: 'LocoEnsayo',
      description: 'AI-driven rehearsal environments for teaching and learning',
      favicon: '/favicon.svg',
      social: [
        { icon: 'external', label: 'Home', href: 'https://locoensayo.org' },
        { icon: 'external', label: 'LocoLab', href: 'https://locolabo.org' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/michael-borck/loco-ensayo' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Scenarios',
          items: [
            { label: 'CloudCore Networks', slug: 'cloudcore' },
            { label: 'TalkBuddy', slug: 'talk-buddy' },
            { label: 'Pinnacles Travel', slug: 'pinnacles-travel' },
          ],
        },
        {
          label: 'For Educators',
          slug: 'for-educators',
        },
        {
          label: 'Research',
          items: [
            { label: 'LocoLab', link: 'https://locolabo.org' },
            { label: 'LocoLLM', link: 'https://locollm.org' },
          ],
        },
      ],
    }),
  ],
});
