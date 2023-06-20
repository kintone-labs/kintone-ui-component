---
id: version
title: version
sidebar_label: version
---

## Overview

The version feature allows the user to retrieve the version information of the package.

---
## Specification

You can retrieve the package's version information of the version property value in package.json.

---
## Sample Code
Here is a sample code when accessing the version information:

### Use the UMD

```javescript
console.log(Kuc.version);
```

### Use the npm package

```javescript
import { version } from 'kintone-ui-component/lib/version';
console.log(version);
```
