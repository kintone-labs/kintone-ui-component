# [Website](https://kintone-ui-component.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/25994a27-19a5-485c-8628-3372bd214533/deploy-status)](https://app.netlify.com/sites/kintone-ui-component/deploys)

This is the website project for kintone ui component powered by [Docusaurus](https://docusaurus.io/) and [Netlify](https://www.netlify.com/).  
You can try and develop by following steps.

## Install and Run Locally

1. Go into the project root.

```sh
cd kintone-ui-component
```

2. Go into the document portion of the project and install the npm dependencies.

```sh
cd docs/document/
npm install
```

3. Go into the website portion of the project and install the npm dependencies.

```sh
cd website/
npm install
```

4. Start the development server locally.

```sh
npm run start
```

5. Open `http://localhost:3000/` to open the site in your browser.

For more information about installation, click [here](https://docusaurus.io/docs/en/installation).

## Add content

### Add docs page

Please follow the guide below if you want to add component reference page / Tips page.

1. Create a new markdown file at `docs/document/docs/` directory.  
ex. docs/components/desktop/button.md

```markdown
---
id: button
title: Button
---

My new content here..
```

2. Specify the id of the new page in `docs/document/website/sidebars.json`.

```json
// Add button to the Getting Started category of docs
{
  "docs": {
    "Components": [
      {
        "type": "subcategory",
        "label": "Desktop",
        "ids": [
          "components/desktop/button",
          "components/desktop/checkbox"
        ]
      }
    ]
  }
}
```

For more information about docs page, click [here](https://docusaurus.io/docs/en/tutorial-create-pages).

### Add website/blog page

Please follow the guide below if you want to add Blog page.

1. Check there is a link to the Blog at `headerLinks` in `docs/document/website/siteConfig.js`.

```js
headerLinks: [
    { blog: true, label: 'Blog' },
]
```

2. Create a new markdown file at `docs/document/website/blog` with the following naming rule. (`YYYY-MM-DD-{Blog title}.md`)  
ex. website/blog/2017-12-14-introducing-docusaurus.md

```markdown
---
author: Mikei
title: New Blog Post
---

My new content here...
```

For more information about blog page, click [here](https://docusaurus.io/docs/en/adding-blog).

### Add item to the navigation bar

1. Specify the documentation / custom / external page link at `headerLinks` in `docs/document/website/siteConfig.js`.

```js
{
  headerLinks: [
    /* you can add docs */
    { doc: 'my-examples', label: 'Examples' },
    /* you can add custom pages */
    { page: 'help', label: 'Help' },
    /* you can add external links */
    { href: 'https://github.com/facebook/docusaurus', label: 'GitHub' },
  ],
}
```

For more information about navigation, click [here](https://docusaurus.io/docs/en/navigation).

### Add custom page

Docusaurus uses React Components to create page.
The components will be stored in `docs/document/website/page/en` as JavaScript file.

1. Create a new page in `docs/document/website/pages/en`.
2. Specify the link to the page at `headerLinks` in `docs/document/website/siteConfig.js`.

```js
{
  headerLinks: [
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
  ],
}
```

For more information about custom page, click [here](https://docusaurus.io/docs/en/custom-pages).

## Build

1. Go into the `docs/document/website/` directory and execute build.

```sh
cd docs/document/website/
npm run build
```

2. Confirm that a `build/` directory containing all documents and .html of other pages is generated in the `docs/document/website/` directory.

For more information about build, click [here](https://docusaurus.io/docs/en/publishing#building-static-html-pages).

## Versioning

1. Go into the `docs/document/website/` directory and create new version documents specifying version number.

```sh
cd docs/document/website/
npm run version <version number>
```

2. Confirm that `website/versioned_docs/version-{version number}` and `website/versioned_sidebars/version-{version number}-sidebars.json` files are generated.
3. Confirm that the specified version is added in `docs/document/website/versions.json`.

For more information about versioning, click [here](https://docusaurus.io/docs/en/versioning).

## Translation

Not for now.

For more information about translation, click [here](https://docusaurus.io/docs/en/translation).

## Hosting

We host the website using [Netlify](https://www.netlify.com/).  
It will detect the commit to the master branch and automatically build and deploy.

For more information about hosting, click [here](https://docusaurus.io/docs/en/publishing#hosting-on-netlify).

## Full Documentation

Please refer to the detailed documents at [Docusaurus Website](https://docusaurus.io/).
