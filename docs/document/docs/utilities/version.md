---
id: version
title: version
sidebar_label: version
---

## Overview

The version feature allows the user to define or retrieve the version information of the package.

---

## Specification

You can define or retrieve the package's version information of the version property value in package.json.<br>
When you defining, about the format, please refer to the [npm document](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#version).

## Sample Code
Here is a sample code when accessing the version information:

### Use the UMD

```javescript
console.log( Kuc.version );
```

### Use the npm package

```javescript
import { version } from "kintone-ui-component";
console.log(version);
```
