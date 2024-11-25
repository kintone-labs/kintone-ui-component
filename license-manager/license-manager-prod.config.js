const { isMatchPackage } = require("@cybozu/license-manager");

const OSS_LICENSE = [
  "0BSD", // https://bozuman.cybozu.com/k/8979/show#record=10
  "BSD", // https://bozuman.cybozu.com/k/8979/show#record=10
  "BSD-2-Clause", // https://bozuman.cybozu.com/k/8979/show#record=10
  "BSD-3-Clause", // https://bozuman.cybozu.com/k/8979/show#record=10
  "MIT", // https://bozuman.cybozu.com/k/8979/show#record=12
  "ISC", // https://bozuman.cybozu.com/k/8979/show#record=16
  "WTFPL", // https://bozuman.cybozu.com/k/8979/show#record=18
  "Unlicense", // https://bozuman.cybozu.com/k/8979/show#record=27
  "CC0-1.0", // https://bozuman.cybozu.com/k/8979/show#record=28
  "BlueOak-1.0.0", // https://bozuman.cybozu.com/k/8979/show#record=48
];

const OVERRIDE_LICENSES = {};

const OVERRIDE_LICENSES_TEXT = {};

const config = {
  analyze: {
    query: ":root > .prod", // license-manager uses npm query to search packages.
    allowLicenses: OSS_LICENSE, // If any package is found for which this option is not specified, analyze command will output errors.
    allowPackages: [], // Packages specified with this option are allowed regardless of the license.
  },
  extract: {
    query: ":root > .prod",
    format: "json",
    output: "licenses-prod.json",
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
