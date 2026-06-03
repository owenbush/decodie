// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://decodie.owenbush.dev',
  integrations: [
    starlight({
      title: 'Decodie',
      favicon: '/favicon.png',
      logo: {
        src: './public/assets/decodie-icon.png',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/owenbush/decodie' },
      ],
      customCss: [],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs' },
            { label: 'Installation', slug: 'docs/installation' },
            { label: 'Provider Setup', slug: 'docs/provider-setup' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Skills', slug: 'docs/guides/commands' },
            { label: 'VS Code Extension', slug: 'docs/guides/vscode' },
            { label: 'Local UI', slug: 'docs/guides/local-ui' },
            { label: 'GitHub Action', slug: 'docs/guides/github-action' },
            { label: 'GitHub Bot', slug: 'docs/guides/github-bot' },
            { label: 'DDEV Add-on', slug: 'docs/guides/ddev' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Supported Providers', slug: 'docs/reference/providers' },
            { label: 'Environment Variables', slug: 'docs/reference/env-vars' },
            { label: 'Configuration', slug: 'docs/reference/configuration' },
          ],
        },
      ],
    }),
  ],
});
