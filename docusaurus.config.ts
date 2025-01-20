import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SYNTHRUS',
  tagline: 'Advanced Chemistry Documentation for the Modern Era',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://renocrypt.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/synthrus-chem/', // Match the repository name here

  // GitHub pages deployment config.
  organizationName: 'renocrypt', // GitHub username or org name
  projectName: 'synthrus-chem', // Repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/renocrypt/synthrus-chem/edit/main/', // Match your GitHub repo structure
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/renocrypt-social-card.jpg',
    navbar: {
      title: 'Synthrus',
      logo: {
        alt: 'Synthrus Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Content',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/renocrypt/synthrus-chem',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Content',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/renocrypt',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/renocrypt',
            },
            {
              label: 'X',
              href: 'https://x.com/renocrypt',
            },
          ],
        },
        {
          title: 'Beyond Docs',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/renocrypt/synthrus-chem',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Renocrypt, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
