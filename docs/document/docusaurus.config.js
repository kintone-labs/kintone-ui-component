// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.palenight;
const darkCodeTheme = require('prism-react-renderer').themes.palenight;
const versions = require('./versions.json');

function getLatestVersionName() {
  return versions[0];
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kintone UI Component · Be a smart kintone developer.',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Be a smart kintone developer'
      },
    },
  ],
  tagline: 'It will support your UI customization project.',
  url: 'https://ui-component.kintone.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn', // throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kuc_box_yellow.png',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kintone-labs', // Usually your GitHub org/user name.
  projectName: 'kintone-ui-component', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  scripts: ["https://unpkg.com/kintone-ui-component/umd/kuc.min.js"],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          lastVersion: `${getLatestVersionName()}`,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/kuc-custom.css')
          ],
        },
        googleTagManager: {
          containerId: 'GTM-5N49D3',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'kintone UI Component',
          src: 'img/kuc_logo_white.png',
        },
        items: [
          {
            type: 'docsVersion',
            position: 'left',
            to: '/versions',
            className: 'versions'
          },
          {
            type: 'doc',
            docId: 'getting-started/quick-start',
            position: 'right',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'releases/release-notes',
            position: 'right',
            label: 'Releases',
          },
          {
            href: 'https://github.com/kintone-labs/kintone-ui-component',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/getting-started/quick-start',
              },
              {
                label: 'Components',
                to: '/docs/components/desktop/attachment',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub issue',
                href: 'https://github.com/kintone-labs/kintone-ui-component/issues',
              }
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://cybozu.co.jp/privacy/',
              },
              {
                label: 'License',
                href: 'https://github.com/kintone-labs/kintone-ui-component/blob/master/docs/document/LICENSE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cybozu Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "diff", "json"],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'ETPAGY3L8I',
        apiKey: 'f0ba69d7d57a6bf274f3991502d2a4d4',
        indexName: 'kintone',
        contextualSearch: true,
      },
      metadata: [
        { name: 'twitter:card', content: 'summary' },
        { property: 'og:type', content: 'website' },
      ],
      image: 'img/kuc_box_yellow.png',
    }),
};

module.exports = config;
