// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TamalWeb by Tamal Chowdhury',
  tagline: 'Helping you become a dangerous frontend engineer',
  url: 'https://tamalweb.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tamalchowdhury', // Usually your GitHub org/user name.
  projectName: 'tamalwebsite', // Usually your repo name.

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7311484130323419',
      async: true,
    },
  ],

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
        sitemap: {
          changefreq: 'daily',
        },
        blog: {
          blogTitle:
            'TamalWeb, Frontend Engineer, Reactjs Technical Writer, Developer Advocate',
          blogDescription:
            'Read articles, and learn best practices about ReactJS, NodeJS, be a great web dev. Contact or hire Tamal Chowdhury',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} TamalWeb`,
          },
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          editUrl: 'https://github.com/tamalchowdhury/tamalwebsite/tree/master',
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
            label: 'Start Web Dev',
            to: '/start',
            position: 'left',
          },
          {
            label: 'Resources',
            to: '/resources',
            position: 'left',
          },
          {
            label: 'Portfolio',
            to: '/portfolio',
            position: 'left',
          },
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
            href: 'https://twitter.com/tamalchow',
            label: 'Twitter',
            position: 'right',
          },
          {
            href: 'https://linkedin.com/in/tamalchowdhury',
            label: 'Linkedin',
            position: 'right',
          },
          {
            label: 'Resume',
            href: 'https://tamalchowdhury.com',
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
                label: 'Sitemap',
                href: 'https://tamalweb.com/sitemap.xml',
              },
              {
                label: 'RSS',
                href: 'https://tamalweb.com/rss.xml',
              },
              {
                label: 'Atom',
                href: 'https://tamalweb.com/atom.xml',
              },
            ],
          },

          {
            title: 'Projects',
            items: [
              {
                label: 'MySocial',
                href: 'https://mysoci.al',
              },
              {
                label: 'Cashout Charge',
                href: 'https://cashoutcharge.com',
              },
              {
                label: 'Periodic Table',
                href: 'https://periodictableonline.netlify.app/',
              },
              {
                label: 'Hide YouTube End Cards',
                href: 'https://chrome.google.com/webstore/detail/hide-youtube-endscreen/ifmbbceocmponbpifmpkkhnidmgopmmf?hl=en',
              },
              {
                label: 'Reaction Poll',
                href: 'https://reactionpoll.com',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/tamalchow',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@tamalchowdhury',
              },
              {
                label: 'Github',
                href: 'https://github.com/tamalchowdhury',
              },
              {
                label: 'Linkedin',
                href: 'https://linkedin.com/in/tamalchowdhury',
              },
              {
                label: 'Resume',
                href: 'https://tamalchowdhury.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TamalWeb, Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsDark'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },
    }),
}

module.exports = config
