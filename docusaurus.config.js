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
        googleAnalytics: { trackingID: 'UA-44799005-8', anonymizeIP: true },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} TamalWeb`,
          },
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          editUrl: 'https://github.com/tamalweb/tamalwebsite/tree/master',
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
          // {
          //   label: 'Start Web Dev',
          //   to: '/start',
          //   position: 'left',
          // },
          {
            label: 'Resources',
            to: '/resources',
            position: 'left',
          },
          // {
          //   label: 'Portfolio',
          //   to: '/portfolio',
          //   position: 'left',
          // },
          // {
          //   label: 'Work With Me',
          //   to: '/work-with-me',
          //   position: 'left',
          // },
          {
            label: 'Archive',
            to: '/archive',
            position: 'left',
          },
          {
            label: 'About',
            to: '/about',
            position: 'left',
          },
          {
            label: 'Contact',
            to: '/contact',
            position: 'left',
          },
          {
            href: 'https://twitter.com/tamalweb',
            label: 'Twitter',
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
            title: 'Blog',
            items: [
              {
                label: 'Blog Archive',
                to: '/archive',
              },
              {
                label: 'RSS',
                href: '/rss.xml',
              },
              {
                label: 'Atom',
                href: '/atom.xml',
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
