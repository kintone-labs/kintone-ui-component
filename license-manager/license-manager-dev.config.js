const { isMatchPackage } = require("@cybozu/license-manager");

const OSS_LICENSE = [
  "GPL-2.0-only", // https://bozuman.cybozu.com/k/8979/show#record=1
  "GPL-3.0-only", // https://bozuman.cybozu.com/k/8979/show#record=1
  "EUPL-1.1", // https://bozuman.cybozu.com/k/8979/show#record=3
  "MPL-1.0", // https://bozuman.cybozu.com/k/8979/show#record=4
  "MPL-1.1", // https://bozuman.cybozu.com/k/8979/show#record=4
  "MPL-2.0", // https://bozuman.cybozu.com/k/8979/show#record=4
  "LGPL-2.0-only", // https://bozuman.cybozu.com/k/8979/show#record=5
  "LGPL-2.1-only", // https://bozuman.cybozu.com/k/8979/show#record=5
  "LGPL-3.0-only", // https://bozuman.cybozu.com/k/8979/show#record=5
  "CDDL-1.0", // https://bozuman.cybozu.com/k/8979/show#record=6
  "CDDL-1.1", // https://bozuman.cybozu.com/k/8979/show#record=6
  "CPL-1.0", // https://bozuman.cybozu.com/k/8979/show#record=7
  "EPL-1.0", // https://bozuman.cybozu.com/k/8979/show#record=8
  "EPL-2.0", // https://bozuman.cybozu.com/k/8979/show#record=8
  "YPL-1.0", // https://bozuman.cybozu.com/k/8979/show#record=9
  "YPL-1.1", // https://bozuman.cybozu.com/k/8979/show#record=9
  "0BSD", // https://bozuman.cybozu.com/k/8979/show#record=10
  "BSD", // https://bozuman.cybozu.com/k/8979/show#record=10
  "BSD-2-Clause", // https://bozuman.cybozu.com/k/8979/show#record=10
  "BSD-3-Clause", // https://bozuman.cybozu.com/k/8979/show#record=10
  "BSD-4-Clause", // https://bozuman.cybozu.com/k/8979/show#record=10
  "Apache-2.0", // https://bozuman.cybozu.com/k/8979/show#record=11
  "MIT", // https://bozuman.cybozu.com/k/8979/show#record=12
  "Sendmail", // https://bozuman.cybozu.com/k/8979/show#record=13
  "OpenSSL", // https://bozuman.cybozu.com/k/8979/show#record=14
  "CPOL-1.02", // https://bozuman.cybozu.com/k/8979/show#record=15
  "ISC", // https://bozuman.cybozu.com/k/8979/show#record=16
  "Artistic-1.0", // https://bozuman.cybozu.com/k/8979/show#record=17
  "Artistic-2.0", // https://bozuman.cybozu.com/k/8979/show#record=17
  "WTFPL", // https://bozuman.cybozu.com/k/8979/show#record=18
  "Zlib", // https://bozuman.cybozu.com/k/8979/show#record=20
  "OFL-1.1", // https://bozuman.cybozu.com/k/8979/show#record=26
  "Unlicense", // https://bozuman.cybozu.com/k/8979/show#record=27
  "CC0-1.0", // https://bozuman.cybozu.com/k/8979/show#record=28
  "CC-BY-3.0", // https://bozuman.cybozu.com/k/8979/show#record=29
  "CC-BY-4.0", // https://bozuman.cybozu.com/k/8979/show#record=29
  "ZPL-2.1", // https://bozuman.cybozu.com/k/8979/show#record=31
  "CC-BY-SA-3.0", // https://bozuman.cybozu.com/k/8979/show#record=34
  "CC-BY-SA-4.0", // https://bozuman.s.cybozu.com/k/8979/show#record=34
  "FTL", // https://bozuman.cybozu.com/k/8979/show#record=38
  "BSL-1.0", // https://bozuman.cybozu.com/k/8979/show#record=39
  "X11", // https://bozuman.cybozu.com/k/8979/show#record=40
  "TCL", // https://bozuman.cybozu.com/k/8979/show#record=44
  "BSD-3-Clause-Attribution", // https://bozuman.cybozu.com/k/8979/show#record=45
  "MIT-0", // https://bozuman.cybozu.com/k/8979/show#record=47
  "BlueOak-1.0.0", // https://bozuman.cybozu.com/k/8979/show#record=48
  "OLDAP-2.8", // https://bozuman.cybozu.com/k/8979/show#record=50
  "Unicode-3.0", // https://bozuman.cybozu.com/k/8979/show#record=51
];

const OVERRIDE_LICENSES = {
  "eslint-plugin-kuc-v1@1.0.0": "MIT"
};

const OVERRIDE_LICENSES_TEXT = {};

const config = {
  analyze: {
    query: ":root > .dev", // license-manager uses npm query to search packages.
    allowLicenses: OSS_LICENSE, // If any package is found for which this option is not specified, analyze command will output errors.
    allowPackages: [], // Packages specified with this option are allowed regardless of the license.
  },
  extract: {
    query: ":root > .dev",
    format: "json",
    output: "licenses-dev.json",
    excludePackages: ["eslint-plugin-kuc-v1", "@web/test-runner"],
  },
  overrideLicense: (dep) => {
    for (const packageName of Object.keys(OVERRIDE_LICENSES)) {
      if (isMatchPackage(dep, packageName)) {
        return OVERRIDE_LICENSES[packageName];
      }
    }
    return undefined;
  },
  overrideLicenseText: (dep) => {
    for (const packageName of Object.keys(OVERRIDE_LICENSES_TEXT)) {
      if (isMatchPackage(dep, packageName)) {
        return OVERRIDE_LICENSES_TEXT[packageName];
      }
    }
    return undefined;
  },
};

module.exports = config;
