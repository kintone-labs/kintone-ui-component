# Contributing Guide

## For Contributors

Contributions are always welcome!
If you have discovered a bug or have a feature request, [please create an issue on GitHub](https://github.com/kintone-labs/kintone-ui-component/issues/new/choose).  
Pull requests are also welcome when you find trivial bugs or typos.

We use English for all commit messages, code comments, issues, pull requests.

### Setup
This repository is a monorepo using npm.
```sh
% cd kintone-ui-component
% npm ci
```

### Build
The project should be Setup before Build.
```sh
% cd kintone-ui-component
% npm run build:umd_prod
```

### Development
The project should be Setup before Development.

```sh
% cd kintone-ui-component
% npm run build:umd_dev
```

### Unit Test
Unit test confirm DOM is correct and that if necessary throw error.  
```sh
% cd kintone-ui-component
% npm run test
```

### Storybook
Storybook Controls gives you a graphical UI to interact with a component's arguments dynamically, without needing to code. It creates an addon panel next to your component examples ("stories"), so you can edit them live.  
```sh
% cd kintone-ui-component
% npm run storybook
```

### Docusaurus
Docusaurus now has version 2, but it is still alpha (Build optimized websites quickly, focus on your content | Docusaurus ).  
So We will use version 1 (https://v1.docusaurus.io/).  
#### Directory Structure
```sh
{project-name}/
     ┣ docs/document/
     ┃    ┠ assets (contains such as the images used in document)
     ┃    ┃    ┠ result.png
     ┃    ┃    ┗ …
     ┃    ┃    
     ┃    ┠ components (contains the references of components)
     ┃    ┃    ┠ Button.md
     ┃    ┃    ┠ Checkbox.md
     ┃    ┃    ┗ …
     ┃    ┃    
     ┃    ┠ getting-started (contains the Quick Start page)
     ┃    ┃    ┗ quick-start.md
     ┃    ┃    
     ┃    ┗ guides (contains the article tips for customizations)
     ┃           ┗ customization.md
     ┃
     ┣ website
     ┃    ┠ releases  (contains release notes)
     ┃    ┃    ┠ {title name}.md
     ┃    ┃    ┗ …
     ┃    ┃    
     ┃    ┠ core
     ┃    ┃    ┠ Footer.js  (footer component settings)
     ┃    ┃    ┗ RemarkablePlugin.js (kuc component displaying functions)
     ┃    ┃
     ┃    ┠ i18n（Language settings）
     ┃    ┃    ┠ en.json
     ┃    ┃    ┗ ja.json
     ┃    ┃
     ┃    ┠ pages/en（top-level page）
     ┃    ┃    ┠ help.js (React components of Help page)
     ┃    ┃    ┠ index.js (React components of Top page)
     ┃    ┃    ┗ versions.js (React components of version managing page）
     ┃    ┃
     ┃    ┠ static (contains the static files used for files of website directory)
     ┃    ┃    ┠ css
     ┃    ┃    ┃    ┠ code-block-button.css (CSS of Copy button in code)
     ┃    ┃    ┃    ┗ custom.css (CSS settings of pages)
     ┃    ┃    ┃    
     ┃    ┃    ┠ img
     ┃    ┃    ┃    ┗ …
     ┃    ┃    ┃    
     ┃    ┃    ┗ js
     ┃    ┃           ┠ code-block-button.js (Copy button’s JS code)
     ┃    ┃           ┗ extra.js
     ┃    ┃
     ┃    ┠ translated_docs/ja (Translation Results)
     ┃    ┃    ┠ components
     ┃    ┃    ┠ getting-started
     ┃    ┃    ┠ overview
     ┃    ┃    ┠ version-{version number}
     ┃    ┃    ┗ …
     ┃    ┃
     ┃    ┠ versioned_docs/version-{version number} (contains documents for each versions)
     ┃    ┃    ┠ components
     ┃    ┃    ┠ getting-started
     ┃    ┃    ┗ overview
     ┃    ┃
     ┃    ┠ versioned_sidebars (sidebar’s link of each versions)
     ┃    ┃    ┗ version-{version number}-sidebars.json
     ┃    ┃
     ┃    ┠ README.md
     ┃    ┠ language.js (Enable/Disable Language settings)
     ┃    ┠ package-lock.json
     ┃    ┠ package.json (Managing packages)
     ┃    ┠ sidebars.json (sidebar’s link)
     ┃    ┠ siteConfig.js (docusaurus’s settings)
     ┃    ┗ versions.json (version list)
     ┃
     ┣ .eslintrc.js (ESLint setting)
     ┣ .gitignore (The gitignore list by git commit )
     ┗ crowdin.yaml (Translation setting)
```
#### Set up environment
##### 1.Please clone from GitHub repository at [here](https://github.com/kintone-labs/kintone-ui-component) to local
```sh
% git clone git@github.com:kintone-labs/kintone-ui-component.git
```
##### 2.Move to the branch for corresponding
*Create a new branch according to this naming rule: kuc-doc-{ correspond content }-dev if there is no branch yet.
```sh
% git checkout -b <branch name>
```
##### 3.After moving to website/directory, run npm install to install the necessary packages
```sh
% cd wesite/
% npm install
```
##### 4.Check the display on localhost 
```sh
% npm run start
```

#### Adding Contents

##### Adding docs page
If you want to add a reference page for a component, follow this guide to add.
###### 1.Create a new markdown file in the docs/ directory
Ex) docs/components/Button.md
```sh
---
id: button
title: Button
---

My new content here..
```
###### 2.Specify id of the newly added page in website/sidebars.json
```sh
// Add button to the Getting Started category of docs
{
  "docs": {
    "components": [
      "attachment",
      "button" // new doc here
    ],
    ...
  },
  ...
}
```
##### Adding website/blog page
If you want to add blog articles, follow this guide to add.  
###### 1.Verify that there is a Link  to Blog in headerLinks of website/siteConfig.js
```sh
headerLinks: [
    ...
    { blog: true, label: 'Releases' },
    ...
]
```
###### 2.Create a new file in website/blog with this naming rule: YYYY-MM-DD-{Releases title}.md
Ex) website/blog/2017-12-14-introducing-docusaurus.md
```sh
---
author: Mikei
authorURL: https://twitter.com/mikei
authorFBID: 503283835
title: New Blog Post
---

My new content here...
```
##### Adding items for Top navigation bar
###### 1.Specify external links, custom pages, documents that you want to add in the headerLinks of website/siteConfig.js
```sh
{
  headerLinks: [
    ...
    /* you can add docs */
    { doc: 'my-examples', label: 'Examples' },
    /* you can add custom pages */
    { page: 'help', label: 'Help' },
    /* you can add external links */
    { href: 'https://github.com/facebook/docusaurus', label: 'GitHub' },
    ...
  ],
  ...
}
```
##### Adding custom page
docusaurus uses React components to build a page.  
components are saved as JS files in website/pages/en  
###### 1.Create a page in website/pages/en
###### 2.Specify this page in the headerLinks of website/siteConfig.js If you want to link it to the top navigation bar.
```sh
{
  headerLinks: [
    ...
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
    ...
  ],
  ...
}
```
#### Build
##### 1.Move to  website/directory, run npm run build to build
```sh
cd website/
npm run build
```
##### 2. Verify that a build/directory is created and it contains the .html of other pages and all the documents in the website/ directory

#### Versioning
##### 1.After moving to the website/ directory, specify the version’s number to generate the document of this corresponding version.
```sh
cd website/
npm run version <version number>
```
##### 2.Verify that website/versioned_docs/version-{version number} and website/versioned_sidebars/version-{version number}-sidebars.jsonare created.
##### 3.Verify the specified version is added in website/versions.json


### Script Execution

We provide the following npm-scripts.  
You should to enter the command "npm run ****" in the terminal to execute them.

"build:umd_dev": "webpack --mode development",  
"build:umd_prod": "webpack --mode production",  
"build:esm": "tsc -p tsconfig.esm.json && webpack --config webpack.esm.config.js",  
"build:storybook": "build-storybook -o ./docs/storybook/",  
"storybook": "start-storybook",  
"test": "rm -rf ./unit_test && tsc -p tsconfig.test.json && karma start --coverage",  
"es-lint": "node_modules/.bin/eslint src/**/**.ts src/**.ts src/**/**.js src/mobile/**/**.js src/mobile/**/**.ts"  

for example:

```sh
% cd kintone-ui-component
% npm run es-lint
```

### Creating Branch

#### 1.Please clone from GitHub repository at [here](https://github.com/kintone-labs/kintone-ui-component) to local

```sh
% git clone git@github.com:kintone-labs/kintone-ui-component.git
```

#### 2.Check out to branch for dev, if you’ve not created branch yet, please create a new branch for developing 
```sh
% git branch <branch name>
% git checkout <branch name>
```

### Branch and PR and Issue Naming Rule

#### 1.Branch Naming Rule
From v1.1.0 branch, you can create many other child branches to implement source code for functions/features and/or unit tests and/or user guides.

For example
```sh
origin/master/v1.1.0
  |__origin/master/v1.1.0_Button_src
  |__origin/master/v1.1.0_Button_unit_test
  |__origin/master/v1.1.0_Button_docs
  |__origin/master/v1.1.0_Notification_docs  
  |__origin/master/v1.1.0_SSR-xxx
```

#### 2.Pull Request Naming Rule
If you finish the implementation of the child branches, you should merge from the parent branch before creating a pull request against it.  

The format of the PR title is as follows  
```sh
[PR Type] (Task Number) PR Title
```

PR types are as follows  
| Type |	Example |
| :---- | :---- |
| Bugfix |	[BugFix] Fix a bug |
| HotFix |	[HotFix] Urgently fix something |
| CS | [CS] Fix Coding Style |
| Feature | [Feature] Wrote a new feature |
| Update | [Update] Changed a doc file |
| Refactor | [Refactor] Refactored a certain function |

#### 3.Issue Naming Rule
The format of the issue title is as follows  
```sh
[Issue Type] Issue Title  
```
|Type| Example|
|:----|:----|
|Bug report| [Bug report] Found a bug about XXX |
|Feature request|[Feature request] Suggest an idea about XXX|




