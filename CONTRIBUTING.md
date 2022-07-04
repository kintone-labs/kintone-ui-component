# Contributing Guideline

Contributions are always welcome!<br>
If you discover a bug or have a feature request, please [create an issue on GitHub](https://github.com/kintone-labs/kintone-ui-component/issues/new/choose).<br>

Pull requests are also welcome when you find a trivial bug or typo.<br>

We use [Discussions feature of GitHub](https://github.com/kintone-labs/kintone-ui-component/discussions) as our community page.<br>

We use English for all commit messages, code comments, issues, pull requests.<br>

Please follow [Note for Naming Rule](#note-for-naming-rule) when creating an issue or a pull request.<br>


Here is the guide on the command options and how to develop the package.

## Command Guide

The commands are provided as npm-scritpts, so please execute `npm run { Command }` in the terminal.

|Command| Summary|
| :---- | :---- |
|build:umd_dev|package and generate the development version of the umd file|
|build:umd_prod|package and generate the production version of the umd file|
|build:esm|package and generate the ECMAScript Modules (ESM)|
|build:storybook|build a static storybook|
|storybook|start storybook for building UI components|
|test|unit test|
|es-lint|eslint check|
## How to develop

### Clone and create branch

#### 1. Clone from GitHub repository [here](https://github.com/kintone-labs/kintone-ui-component) to local

```sh
git clone git@github.com:kintone-labs/kintone-ui-component.git
```

#### 2. Checkout to branch for development
Please refer to [Branch naming rule](#Branch) and create a new branch for development from the next version branch.
```sh
git branch <branch name>
git checkout <branch name>
```
### Setup
This repository is a Single Repo using npm.
```sh
cd kintone-ui-component
npm ci
```
### Develop
#### 1. Implement your functions/features
#### 2. ESlint check
```sh
npm run es-lint
```
#### 3. Start storybook to confirm your functions/features
```sh
npm run storybook
```
#### 4. Commit and Create Pull Request
Please refer to [Pull Request naming rule](#Pull-Request).

### Build
```sh
npm run build:umd_dev
or
npm run build:umd_prod
or
npm run build:esm
```
### Update document
Please refer to [Document with Docusaurus](https://github.com/kintone-labs/kintone-ui-component/blob/master/docs/document/README.md).


## Note for Naming Rule

### Branch

You can create several other child branches to implement source code for functions/features and/or unit tests and/or user guides.

The format of the Branch Name is as follows:
```sh
{Version Number}_Title
```
For example:
```sh
origin/master/v1.1.0
  |__origin/master/v1.1.0_Button_src
  |__origin/master/v1.1.0_Button_unit_test
  |__origin/master/v1.1.0_Button_docs
  |__origin/master/v1.1.0_Notification_docs
  |__origin/master/v1.1.0_Text_src
```
### Pull Request

If you finish the implementation under the child branches, you should merge from the parent branch before creating a pull request against it.<br>

The format of the Pull Request Title is as follows:
```sh
[Pull Request Type] Title
```

Pull Request types are as follows:
| Type | Example |
| :---- | :---- |
| Bugfix | [BugFix] Fix a bug |
| HotFix | [HotFix] Urgently fix something |
| CS | [CS] Fix coding style |
| Feature | [Feature] Write a new feature |
| Update | [Update] Change a doc file |
| Refactor | [Refactor] Refactor a certain function |

### Issue

The format of the Issue Title is as follows:
```sh
[Issue Type] Title
```
|Type| Example|
|:----|:----|
|BugReport| [BugReport] Found a bug about XXX |
|FeatureRequest|[FeatureRequest] Suggest an idea about XXX|
