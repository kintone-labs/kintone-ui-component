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
Please install docusaurus before  proceeding to the next step .  

The docs folder structure includes translation configurations:
```sh
The content is written in 2 languages: English, Japanese and default is English.

Folder docs : use article in English (only for backup).

Folder website/translated_docs/ja is used in Japanese .

Folder website/versioned_docs/ is used in English.  
```
#### Directory Structure
```sh
/root/docs/document/
  |__ docs
  |    |__ assets
  |    |__ components
  |    |__ getting-started
  |    |__ guides
  |    |__ releases
  |    |      |__ release-notes.md // latest version
  |    |      |__ release-notes-v1.0.0.md
  |    |      |__ release-notes-v1.0.1.md
  |    |      |__ ...
  |__ website
  |    |__ pages
  |    |    |__ en
  |    |        |__ index.js
  |    |        |__ version.js 
  |    |__ translated_docs/ja
  |    |         |__ version-1.0.0
  |    |         |__ version-1.0.1
  |    |         |__ version-1.0.2
  |    |         |__ version-....
  |    |__ versioned_docs
  |    |         |__ version-1.0.0
  |    |         |__ version-1.0.1
  |    |         |__ version-1.0.2
  |    |         |__ version-....
  |    |__ versioned_sidebars
  |    |         |__ version-1.0.0-sidebars.json
  |    |         |__ version-1....-sidebars.json
  |    |__ sidebars.json
  |    |__ siteConfig.js
  |    |__ versions.json
  package.json
  README.md 
```
#### Add new versions
Each time a new version is added, Let’s modify website/versions.json file
```sh
[
  ...
  "1.x.x"
  "1.0.3",
  "1.0.2",
  "1.0.1",
  "1.0.0"
]

```
#### Enabling multi language option
To enable the language displayed in the page, create language.js in website folder in our repository (website/languages.js)  
```sh
const languages = [
  {
    enabled: true,
    name: "English",
    tag: "en"
  },
  {
    enabled: true,
    name: "日本語",
    tag: "ja"
  }
];
module.exports = languages;

```
Enable configuration “languages“ properties at website/siteConfig.js  
```sh
const siteConfig = {
  headerLinks: [
    { languages: true }
  ]
}
```
#### Sidebar

You configure the contents of the sidebar, in the website/sidebars.json file
Please add all version "release-notes" at here for backup  
```sh
{
  "docs": {
    "Getting Started": ["getting-started/quick-start"],
    "Components": [
      ...
    ],
    "Guides": [
      ...
    ]
  },
  "release-notes": {
    "Releases": [
      "releases/release-notes", // latest version
      ...
      "releases/release-notes-v1.0.3",
      "releases/release-notes-v1.0.2",
      "releases/release-notes-v1.0.1",
      "releases/release-notes-v1.0.0"
    ]
  }
}
```
If you want to change the documentation for a past version, you can store the files at **website/versioned_sidebars**
```sh
// This is a example for sidebar version 1.0.4
// website/versioned_sidebars/version-1.0.4-sidebars.json
{
  "version-1.0.4-docs": {
    "Getting Started": [
      "version-1.0.4-getting-started/quick-start"
    ],
    "Components": [
      {
        "type": "subcategory",
        "label": "Desktop",
        "ids": [
          "version-1.0.4-components/desktop/button",
          ...
        ]
      },
      {
        "type": "subcategory",
        "label": "Mobile",
        "ids": [
          "version-1.0.4-components/mobile/mobile-button",
          ...
        ]
      }
    ],
    "Guides": [
      "version-1.0.4-guides/comparison-v0-v1",
      "version-1.0.4-guides/search-box-customization"
    ]
  },
  "version-1.0.4-release-notes": {
    "Releases": [
      "version-1.0.4-releases/release-notes",
      "version-1.0.4-releases/release-notes-v1.0.3",
      "version-1.0.4-releases/release-notes-v1.0.2",
      "version-1.0.4-releases/release-notes-v1.0.1",
      "version-1.0.4-releases/release-notes-v1.0.0"
    ]
  }
}
```
#### Translating on pages
Translating pages in docusaurus should be placed in website/pages/en directory.  
```sh
|__ website
  |    |__ pages
  |    |    |__ en
  |    |         |__ index.js
  |    |         |__ version.js
```
#### Translating our existing docs

##### 1. Document japan translation
You have to create **ja** folder in **website/translated_docs** directory and create folder name starting with “**version-1.x.x**“  

```sh
|__ website
  |    |__ translated_docs
  |    |    |__ ja
  |    |    |    |__ version-1.0.0
  |    |    |    |         |__ components
  |    |    |    |         |      |__ desktop
  |    |    |    |         |            |__ button.md (1)
  |    |    |    |         |__ getting-started
  |    |    |    |         |__ guides
  |    |    |    |         |__ releases
  |    |    |    |                |__ release-notes.md
  |    |    |    |                |__ release-notes-v1.0.0.md
  |    |    |    |                |__ ....
  |    |    |    |__ version-1.0.1
  |    |    |    |         |__ components
  |    |    |    |         |      |__ desktop
  |    |    |    |         |            |__ button.md (2)
  |    |    |    |         |__ getting-started
  |    |    |    |         |__ guides
  |    |    |    |         |__ releases
  |    |    |    |                |__ release-notes.md
  |    |    |    |__ version-...
  |    |    |    |         |__ components
  |    |    |    |         |__ getting-started
  |    |    |    |         |__ guides
  |    |    |    |         |__ releases
  |    |    |    |                |__ release-notes.md
```
##### 2.Document english translation
You have to create folder name starting with “**version-1.x.x**“ in **website/versioned_docs** directory  
```sh
|__ website
  |    |__ versioned_docs
  |    |        |__ version-1.0.0
  |    |        |         |__ components
  |    |        |         |      |__ desktop
  |    |        |         |            |__ button.md (1)
  |    |        |         |__ getting-started
  |    |        |         |__ guides
  |    |        |         |__ releases
  |    |        |         |      |__ release-notes.md
  |    |        |         |      |__ release-notes-v1.0.0.md
  |    |        |         |      |__ ....
  |    |        |__ version-1.0.1
  |    |        |         |__ components
  |    |        |         |      |__ desktop
  |    |        |         |            |__ button.md (2)
  |    |        |         |__ getting-started
  |    |        |         |__ releases
  |    |        |                |__ release-notes.md
  |    |        |__ version-...  
```
The markdown header for each versioned doc is "version-1.x.x-id"  
The file button.md(1) has content  
```sh
---
id: version-1.0.0-button
title: Button
sidebar_label: Button
original_id: button
---
## Description button version 1.0.0
```

The file button.md(2) has content  
```sh
---
id: version-1.0.1-button
title: Button
sidebar_label: Button
original_id: button
---
## Description button version 1.0.1
```

#### How to deploy a new application version
There is the example for deploy a new application version (ex: 1.0.4)  

##### Step 1: Update versions.json file
```sh
[
  "1.0.4",
  "1.0.3",
  "1.0.2",
  "1.0.1",
  "1.0.0"
]
```
##### Step 2: Translating release notes
At the folder **docs/releases**  (for backup)  
Let’s rename file **release-notes.md** to **release-notes-v1.0.3.md** and update id of file from id:   
release-notes to id: release-notes-v1.0.3
```sh
|__ releases
|      |__ release-notes.md
|      |__ release-notes-v1.0.0.md
|      |__ release-notes-v1.0.1.md
|      |__ release-notes-v1.0.2.md
|      |__ release-notes-v1.0.3.md
```

Create a file name is **release-notes.md** (this is latest version), The content uses English language in article  
```sh
---
id: release-notes
title: v1.0.4 Release Notes
sidebar_label: v1.0.4 Release Notes
---

### Release note version 1.0.4
```

At the folder **website/translated_docs/ja**  

The folder **version-1.0.0/releases** includes all version and uses Japanese language  
```sh
|__ releases
|      |__ release-notes.md
|      |__ release-notes-v1.0.0.md
|      |__ release-notes-v1.0.1.md
|      |__ release-notes-v1.0.2.md
|      |__ release-notes-v1.0.3.md
|      |__ release-notes-v1.0.4.md
```
Create a file name is release-notes-v1.0.4.md  
```sh
---
id: version-1.0.0-release-notes-v1.0.4
title: v1.0.4 Release Notes
sidebar_label: v1.0.4 Release Notes
original_id: release-notes-v1.0.4
---
## 概要
```

The folder **version-1.0.4/releases** include 1 file is **release-notes.md**  
```sh
// version-1.0.4/releases/release-notes.md
---
id: version-1.0.4-release-notes
title: v1.0.4 Release Notes
sidebar_label: v1.0.4 Release Notes
original_id: release-notes
---
## 概要
```
At the folder **versioned_docs**  
The folder **version-1.0.0/releases** include all version and uses English language
```sh
|__ releases
|      |__ release-notes.md
|      |__ release-notes-v1.0.0.md
|      |__ release-notes-v1.0.1.md
|      |__ release-notes-v1.0.2.md
|      |__ release-notes-v1.0.3.md
|      |__ release-notes-v1.0.4.md
```
The folder **version-1.0.4/releases** include 1 file is **release-notes.md**
```sh
// version-1.0.4/releases/release-notes.md
---
id: version-1.0.4-release-notes
title: v1.0.4 Release Notes
sidebar_label: v1.0.4 Release Notes
original_id: release-notes
---

### Release note version 1.0.4
### Article English language
```

##### Step 3: Updating sidebar
Update sidebars.json  
```sh
{
  "docs": {
    "Getting Started": ["getting-started/quick-start"],
    "Components": [...],
    "Guides": [...]
  },
  "release-notes": {
    "Releases": [
      "releases/release-notes",
      "releases/release-notes-v1.0.3",
      "releases/release-notes-v1.0.2",
      "releases/release-notes-v1.0.1",
      "releases/release-notes-v1.0.0"
    ]
  }
}
```
Create file “version-1.0.4-sidebars.json“  
```sh
{
  "version-1.0.4-docs": {
    "Getting Started": [
      "version-1.0.4-getting-started/quick-start"
    ],
    "Components": [
      {
        "type": "subcategory",
        "label": "Desktop",
        "ids": [
          "version-1.0.4-components/desktop/dialog"
          ...
        ]
      },
      {
        "type": "subcategory",
        "label": "Mobile",
        "ids": [...]
      }
    ],
    "Guides": [...]
  },
  "version-1.0.4-release-notes": {
    "Releases": [
      "version-1.0.4-releases/release-notes",
      "version-1.0.4-releases/release-notes-v1.0.3",
      "version-1.0.4-releases/release-notes-v1.0.2",
      "version-1.0.4-releases/release-notes-v1.0.1",
      "version-1.0.4-releases/release-notes-v1.0.0"
    ]
  }
}
```
##### In case something needs to be updated
If version 1.0.4 change only 1 file is quick-start.md , you just need to update quick-start.md  

- If **version 1.0.4** there is Quick Start article update
  - Create folder getting-started under translated_docs/ja/version-1.0.4
    - Create file "quick-start.md" inside getting-started folder
    - Update id file to: id: version-1.0.4-quick-start
    - ```sh
      |__ website
      |    |__ translated_docs
      |    |    |__ ja
      |    |    |    |__ version-1.0.4
      |    |    |    |         |__ getting-started
      |    |    |    |         |         |__ quick-start.md
      ```
    - ```sh
      ---
      id: version-1.0.4-quick-start
      title: Quick Start
      sidebar_label: Quick Start
      original_id: quick-start
      ---
      ## Quick Start for Japan version 1.0.4
      ```
  - Create folder **getting-started** under **versioned_docs/version-1.0.4**
    - Create file "quick-start.md" inside getting-started folder
    - Update id file to: id: version-1.0.4-quick-start
    - ```sh
      |__ website
      |    |__ versioned_docs
      |    |        |__ version-1.0.4
      |    |        |         |__ getting-started
      |    |        |         |         |__ quick-start.md
      ```
    - ```sh
      ---
      id: version-1.0.4-quick-start
      title: Quick Start
      sidebar_label: Quick Start
      original_id: quick-start
      ---
      ## Quick Start for English version 1.0.4

      ```
- If version **1.0.4** has a new component (ex: dialog), and you wanna update sidebar
  - Update file sidebars.json
  - ```sh
    {
      "docs": {
        "Getting Started": ["getting-started/quick-start"],
        "Components": [
          {
            "type": "subcategory",
            "label": "Desktop",
            "ids": [
              "components/desktop/dialog",
              ...
            ]
          },
          {
            "type": "subcategory",
            "label": "Mobile",
            "ids": [
              ...
            ]
          }
        ],
        "Guides": [
          ...
        ]
      },
      "release-notes": {
        "Releases": [
          "releases/release-notes",
          "releases/release-notes-v1.0.3",
          "releases/release-notes-v1.0.2",
          "releases/release-notes-v1.0.1",
          "releases/release-notes-v1.0.0"
        ]
      }
    }
    ```
  - Create or update file “version-1.0.4-sidebars.json“
  - ```sh
    {
      "version-1.0.4-docs": {
        "Getting Started": [
          "version-1.0.4-getting-started/quick-start"
        ],
        "Components": [
          {
            "type": "subcategory",
            "label": "Desktop",
            "ids": [
              "version-1.0.4-components/desktop/dialog",
              ...
            ]
          },
          {
            "type": "subcategory",
            "label": "Mobile",
            "ids": [...]
          }
        ],
        "Guides": [...]
      },
      "version-1.0.4-release-notes": {
        "Releases": []
      }
    }
    ```

#### Testing on local
If you wan to test build before deploying to a production

```sh
npm start
```

#### Deployment
Make sure you configure in website/siteConfig.js is right
```sh
const siteConfig = {
  url: "https://kintone-ui-component.netlify.app",
  baseUrl: "/",
  projectName: "kintone-ui-component",
  organizationName: "kintone-labs",
}
```
Deploying on Netlify: [Netlify: Develop & deploy the best web experiences in record time](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)  

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




