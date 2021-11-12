---
id: version-1.2.0-version
title: version
sidebar_label: version
original_id: version
---

## Overview

version 機能は、パッケージのバージョン情報を取得することができます。

---
## Specification

package.json の version プロパティ値のパッケージバージョン情報を取得することができます。

---
## Sample Code
バージョン情報にアクセスする際のサンプルコードです。

### UMD を利用する

```javescript
console.log(Kuc.version);
```

### npm パッケージを利用する

```javescript
import { version } from "kintone-ui-component/lib/version";
console.log(version);
```
