# Contributing Guide

## For Contributors

Contributions are always welcome!
If you have discovered a bug or have a feature request, [please create an issue on GitHub](https://github.com/kintone-labs/kintone-ui-component/issues/new/choose).  
Pull requests are also welcome when you find trivial bugs or typos.

We use English for all commit messages, code comments, issues, pull requests.

### Build

```sh
% cd kintone-ui-component
% npm ci
```

### Development

```sh
% cd kintone-ui-component
% npm run build:umd_dev
```

### Unit Test

```sh
% cd kintone-ui-component
% npm run test
```

### Storybook

```sh
% cd kintone-ui-component
% npm run storybook
```

### Docusaurus

#### 1.Please clone from GitHub repository at [here](https://github.com/kintone-labs/kintone-ui-component) to local
```sh
% git clone git@github.com:kintone-labs/kintone-ui-component.git
```
#### 2.Move to the branch for corresponding
*Create a new branch according to this naming rule: kuc-doc-{ correspond content }-dev if there is no branch yet.
```sh
% git checkout -b <branch name>
```
#### 3.After moving to website/directory, run npm install to install the necessary packages
```sh
% cd wesite/
% npm install
```
#### 4.Check the display on localhost 
```sh
% npm run start
```

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

For example:  
  a: Finish v1.1.0_Button_src implementation locally.  
  b: Commit changes to v1.1.0_Button_src locally. (optionally changes can be pushed to upstream origin/master/v1.1.0_Button_src)  
  c: Merge from origin/master/v1.1.0 to local v1.1.0_Button_src.  
  d: Resolve any conflicts upon merging, then commit and push to origin/master/v1.1.0_Button_src.  
  e: Create pull request from origin/master/v1.1.0_Button_src against origin/master/v1.1.0.  

#### 3.Issue Naming Rule






