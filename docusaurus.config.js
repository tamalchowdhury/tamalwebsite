// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TamalWeb',
  tagline: 'Helping you become a dangerous frontend engineer',
  url: 'https://tamalweb.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tamalweb', // Usually your GitHub org/user name.
  projectName: 'tamalwebsite', // Usually your repo name.

  presets: [
    [
      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          editUrl: 'https://github.com/tamalweb/tamalwebsite',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TamalWeb',
        logo: {
          alt: 'Tamalweb Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/tamalweb',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://linkedin.com/in/tamalweb',
            label: 'Linkedin',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },

          {
            title: 'Projects',
            items: [
              {
                label: 'Reaction Poll',
                href: 'https://reactionpoll.com',
              },
              {
                label: 'Periodic Table',
                href: 'https://periodictable.website',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/tamalweb',
              },
              {
                label: 'Github',
                href: 'https://github.com/tamalweb',
              },
              {
                label: 'Linkedin',
                href: 'https://linkedin.com/in/tamalweb',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TamalWeb, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
