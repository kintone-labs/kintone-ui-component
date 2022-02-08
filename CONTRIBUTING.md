# Contributing Guide

Contributions are always welcome!  
If you discover a bug or have a feature request, please [create an issue on GitHub](https://github.com/kintone-labs/kintone-ui-component/issues/new/choose).  
Pull requests are also welcome when you find a trivial bug or a typo.  

We use English for all commit messages, code comments, issues, pull requests.  

Please follow [Note for Naming Rule](#note-for-naming-rule) when creating an issue or a pull request.  


Here is the guide on the command options and how to develop the package.  

## Command Guide

The commands are provided as npm-scritpts, so please execute `npm run {Command}` in the terminal.  

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

#### 1. Clone from GitHub repository [here](https://github.com/kintone-labs/kintone-ui-component) to local

```sh
git clone git@github.com:kintone-labs/kintone-ui-component.git
```

#### 2. CheckOut branch for development
Please refer to [Branch naming rule](#Branch) and create a new branch(base on [branch:v0_dev](https://github.com/kintone-labs/kintone-ui-component/tree/v0_dev/)) for development from the next version branch. 
```sh
git checkout v0_dev
git branch <branch name>
git checkout <branch name>
```
### Setup
This repository is a Siggle Repo using npm.
```sh
cd kintone-ui-component
npm ci
```
### Develop
#### 1. Implement your functions/features
#### 2. ESlint check
```sh
npm run eslint
```
#### 3. Commit and Create Pull Request
Please refer to [Pull Request naming rule](#Pull-Request).

### Build
```sh
npm run build
or
npm run build:umd:dev
or
npm run build:umd
or
npm run build:esm
```
### Update document
Please refer to [Document with MKDocs](https://github.com/kintone-labs/kintone-ui-component/blob/v0_dev/docs/README.md).


## Note for Naming Rule

### Branch

You can create several other child branches to implement source code for functions/features and/or unit tests and/or user guides.

The format of the Branch Name is as follows:  
```sh
{Version Number}_Title
```
For example
```sh
origin/v0_dev/v0.8.3
  |__origin/v0_dev/v0.8.3_Button_src
  |__origin/v0_dev/v0.8.3_Button_unit_test
  |__origin/v0_dev/v0.8.3_Button_docs
  |__origin/v0_dev/v0.8.3_Notification_docs  
  |__origin/v0_dev/v0.8.3_Text_src
```
### Pull Request

If you finish the implementation under the child branches, you should merge from the parent branch before creating a pull request against it.  

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