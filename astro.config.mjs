import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { loco } from '@locolabo/theme';

export default defineConfig({
  site: 'https://locoensayo.org',
  integrations: [
    starlight(
      loco({
        project: 'loco-ensayo',
        title: 'LocoEnsayo',
        description: 'AI-driven rehearsal environments for teaching and learning',
        home: 'https://locoensayo.org',
        github: 'loco-ensayo',
        accent: { low: '#1a1502', main: '#eab308', high: '#fef3c7' },
        favicon: '/favicon.svg',
        logo: {
          alt: 'LocoEnsayo',
          src: './src/assets/ensayo.svg',
          replacesTitle: false,
        },
        customCss: ['./src/styles/custom.css'],
        sidebar: [
          {
            label: 'Internship Simulation',
            items: [{ label: 'WorkReady', slug: 'workready' }],
          },
          {
            label: 'Scenarios',
            items: [
              { label: 'CloudCore Networks', slug: 'cloudcore' },
              { label: 'TalkBuddy', slug: 'talk-buddy' },
              { label: 'TechNova Systems', slug: 'technova' },
              { label: 'RetailFlow', slug: 'retailflow' },
              { label: 'Pinnacle Events', slug: 'pinnacles-travel' },
            ],
          },
          {
            label: 'AI Development Toolkit',
            items: [
              { label: 'SimpleBot', slug: 'simplebot' },
              { label: 'HandsOnAI', slug: 'hands-on-ai' },
              { label: 'SimLab', slug: 'sim-lab' },
            ],
          },
          { label: 'For Educators', slug: 'for-educators' },
        ],
      })
    ),
  ],
});
