# [Website](https://ui-component.kintone.dev/)

This is the website project for kintone ui component powered by [Docusaurus](https://docusaurus.io/) and [Amplify](https://aws.amazon.com/amplify/).<br>
You can try and develop by following steps.

## Install and Run Locally

1. Go into the project root.

```sh
cd kintone-ui-component
```

2. Go into the document portion of the project and install the npm dependencies.

```sh
cd docs/document/
npm ci
```

3. Start the development server locally.

- English version
```sh
npm run start
```

- Japanese version
```sh
npm run start-ja
```

4. Open `http://localhost:3000/` or `http://localhost:3000/ja/` to open the site in your browser.

For more information about installation, click [here](https://docusaurus.io/docs/installation).

## Add content

### Add docs page

Please follow the guide below if you want to add component reference page / Tips page.

1. Create a new markdown file at `docs/document/docs/` directory. (`docs/document/i18n/ja/docusaurus-plugin-content-docs/current/` directory for Japanese version)<br>
ex. docs/document/docs/components/desktop/button.md

```markdown
---
id: button
title: Button
sidebar_label: Button
---

My new content here..
```

2. Specify the id of the new page in `docs/document/sidebars.js`.

```js
// Add button to the Components category of docs
const sidebars = {
  docs: {
    "Getting Started": [
      "getting-started/quick-start",
      "getting-started/custom-css",
      "getting-started/usage-with-typescript",
    ],
    Components: [
      {
        type: "category",
        collapsible: true,
        collapsed: false,
        label: "Desktop",
        items: [
          "components/desktop/attachment",
          "components/desktop/button",
          "components/desktop/checkbox",
          "components/desktop/combobox",
        ],
      },
    ],
  },
};

module.exports = sidebars;
```

For more information about docs page, click [here](https://docusaurus.io/docs/create-doc).

### Add item to the navigation bar

1. Specify the documentation / custom / external page link at `themeConfig.navbar.items` in `docs/document/docusaurus.config.js`.

```js
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        /* you can add docs */
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Docs'
        },
        /* you can add custom pages */
        {
          to: '/versions',
          label: 'Versions',
          position: 'left'
        },
        /* you can add external links */
        {
          href: 'https://github.com/facebook/docusaurus',
          position: 'right',
          className: 'header-github-link'
        }
      ]
    }
  }
};
```

For more information about navigation, click [here](https://docusaurus.io/docs/api/themes/configuration#navbar-items).

### Add custom page

Docusaurus uses React Components to create page.
The components will be stored in `docs/document/src/pages` as JavaScript file.

1. Create a new page in `docs/document/src/pages`.
2. Specify the link to the page at `themeConfig.navbar.items` in `docs/document/docusaurus.config.js`.

```js
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          to: '/my-new-custom-page',
          label: 'My New Custom Page',
        },
      ]
    }
  }
};
```

For more information about custom page, click [here](https://docusaurus.io/docs/creating-pages).

## Build

1. Go into the `docs/document` directory and execute build.

```sh
cd docs/document/
npm run build
```

2. Confirm that a `build/` directory containing all documents and .html of other pages is generated in the `docs/document/` directory.

### Testing your Build Locally

1. Execute `serve` command to test your build locally.

```sh
npm run serve
```

For more information about build, click [here](https://docusaurus.io/docs/deployment).

2. Because versioning is used, access the link with `next` to see the documents you added or modified.<br>
ex. `http://localhost:3000/docs/next/components/desktop/button` <br>
`http://localhost:3000/ja/docs/next/components/desktop/button`

For more information about versioning, click [here](https://docusaurus.io/docs/versioning).

## Hosting

We host the website using [Amplify](https://aws.amazon.com/amplify/).<br>
It will detect the commit to the master branch and automatically build and deploy.

## Full Documentation

Please refer to the detailed documents at [Docusaurus Website](https://docusaurus.io/).
