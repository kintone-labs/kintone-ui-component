// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/okaidia');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const versions = require('./versions.json');

function getLatestVersionName() {
  return versions[0];
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kintone UI Component · Be a smart kintone developer.',
  tagline: 'It will support your UI customization project.',
  url: 'https://cybozu-sd.github.io/',
  baseUrl: '/kuc-docusaurus-v2/',
  onBrokenLinks: 'warn', // throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kuc_box_yellow.png',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cybozu-SD', // Usually your GitHub org/user name.
  projectName: 'kuc-docusaurus-v2', // Usually your repo name.

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
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/kuc-custom.css')
          ],
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cybozu Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'QJ2QB6FCE5',
        apiKey: '636c5f8d218f77cc2f87c81fbd95a9b8',
        indexName: 'kuc-usaurus-v2',
        contextualSearch: true,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-5N49D3',
      },
    ],
  ],
};

module.exports = config;
