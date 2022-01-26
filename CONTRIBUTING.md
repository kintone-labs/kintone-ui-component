# Contributing Guide

Contributions are always welcome!  
If you have discovered a bug or have a feature request, [please create an issue on GitHub](https://github.com/kintone-labs/kintone-ui-component/issues/new/choose).  
Pull requests are also welcome when you find trivial bugs or typos. 

We use English for all commit messages, code comments, issues, pull requests.  

Please follwing [Note for Naming Rule](#note-for-naming-rule).  


This guide to develop and the explanation of the command options.

## Command Guide

The commands are providing as npm-critpts, please executing `npm run {{ Command }}` in the terminal.  

|Command| Summary|
| :---- | :---- |
|build|build:umd(production) and build:esm|
|build:esm|package and generate the ECMAScript Modules (ESM)|
|build:umd|package and generate the production version of the umd file|
|build:umd:dev|package and generate the development version of the umd file|
|transpile|compile and build TypeScript code|
|test|unit test|
|eslint|eslint check|
## How to develop
### Clone and create branch

#### 1.Please clone from GitHub repository at [here](https://github.com/kintone-labs/kintone-ui-component) to local

```sh
git clone git@github.com:kintone-labs/kintone-ui-component.git
```

#### 2.Check out to branch for dev
Please refer [Branch naming rule](#Branch) and create a new branch(base on [branch:v0_dev](https://github.com/kintone-labs/kintone-ui-component/tree/v0_dev/)) for developing. 
```sh
git checkout <branch v0_dev>
git branch <branch name>
git checkout <branch name>
```
### Setup
This repository is a Siggle-repo Monolith using npm.
```sh
cd kintone-ui-component
npm ci
```
### Develop
#### 1. Implement your functions/features
#### 2. Eslint check
#### 3. Commit and Create Pull-Request(Naming Rule refer [here](#Pull-Request))

### Build
```sh
npm run build:umd
```
### Update document
Please refer [Document with MKDocs](https://github.com/kintone-labs/kintone-ui-component/blob/v0_dev/docs/README.md).


## Note for Naming Rule

### Branch

You can create many other child branches to implement source code for functions/features and/or unit tests and/or user guides.

The format of the Branch Name is as follows  
```sh
[Version No]_Title
```
For example
```sh
origin/master/v1.1.0
  |__origin/master/v1.1.0_Button_src
  |__origin/master/v1.1.0_Button_unit_test
  |__origin/master/v1.1.0_Button_docs
  |__origin/master/v1.1.0_Notification_docs  
  |__origin/master/v1.1.0_Text_src

origin/v0_dev/v0.8.3
  |__origin/v0_dev/v0.8.3_Button_src
  |__origin/v0_dev/v0.8.3_Button_unit_test
  |__origin/v0_dev/v0.8.3_Button_docs
  |__origin/v0_dev/v0.8.3_Notification_docs  
  |__origin/v0_dev/v0.8.3_Text_src
```
### Pull Request

If you finish the implementation of the child branches, you should merge from the parent branch before creating a pull request against it.  

The format of the PR title is as follows  
```sh
[PR Type] PR Title
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

### Issue

The format of the issue title is as follows  
```sh
[Issue Type] Issue Title  
```
|Type| Example|
|:----|:----|
|Bug report| [Bug report] Found a bug about XXX |
|Feature request|[Feature request] Suggest an idea about XXX|