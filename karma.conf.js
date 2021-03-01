/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        {
          pattern: config.grep ? config.grep : "./test/**/test/*.test.js",
          type: "module"
        }
      ],
      esm: {
        nodeResolve: { mainFields: ["module", "main", "browser"] }
      },
      reporters: ["progress", "coverage"],
      preprocessors: {
        "./test/**/index.js": "coverage"
      },
      coverageIstanbulReporter: {
        thresholds: {
          global: {
            statements: 90,
            lines: 90,
            branches: 90,
            functions: 90
          }
        }
      }
      // you can overwrite/extend the config further
    })
  );
  return config;
};
