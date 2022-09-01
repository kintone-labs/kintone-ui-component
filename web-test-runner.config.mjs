import { defaultReporter } from "@web/test-runner";
export default {
  nodeResolve: { mainFields: ["module", "main", "browser"] },
  files: "./unit_test/**/test/*.test.js",
  coverage: true,
  reporters: [
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
  ],
  coverageConfig: {
    threshold: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
