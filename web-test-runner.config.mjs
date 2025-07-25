import { chromeLauncher, defaultReporter } from "@web/test-runner";
export default {
  nodeResolve: {
    mainFields: ["module", "main", "browser"],
    exportConditions: ["production"],
  },
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
  browsers: [
    chromeLauncher({
      createPage: async ({ context }) => {
        const page = await (await context.browser().createBrowserContext()).newPage();
        await page.bringToFront();
        return page;
      },
    }),
  ],
};
