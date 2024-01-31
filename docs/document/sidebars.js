/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: {
    "Getting Started": [
      "getting-started/quick-start",
      "getting-started/custom-css",
      "getting-started/usage-with-typescript",
    ],
    Components: [
      {
        type: "category",
        collapsible: true,
        collapsed: false,
        label: "Desktop",
        items: [
          "components/desktop/attachment",
          "components/desktop/button",
          "components/desktop/checkbox",
          "components/desktop/combobox",
          "components/desktop/date-picker",
          "components/desktop/datetime-picker",
          "components/desktop/dialog",
          "components/desktop/dropdown",
          "components/desktop/field-group",
          "components/desktop/multichoice",
          "components/desktop/notification",
          "components/desktop/radio-button",
          "components/desktop/readonly-table",
          "components/desktop/spinner",
          "components/desktop/table",
          "components/desktop/tabs",
          "components/desktop/text",
          "components/desktop/textarea",
          "components/desktop/time-picker",
          "components/desktop/tooltip"
        ],
      },
      {
        type: "category",
        collapsible: true,
        collapsed: false,
        label: "Mobile",
        items: [
          "components/mobile/mobile-button",
          "components/mobile/mobile-checkbox",
          "components/mobile/mobile-date-picker",
          "components/mobile/mobile-datetime-picker",
          "components/mobile/mobile-dropdown",
          "components/mobile/mobile-multichoice",
          "components/mobile/mobile-notification",
          "components/mobile/mobile-radio-button",
          "components/mobile/mobile-text",
          "components/mobile/mobile-textarea",
          "components/mobile/mobile-time-picker",
        ],
      },
    ],
    Utilities: ["utilities/version"],
    Guides: [
      "guides/comparison-v0-v1",
      "guides/search-box-customization",
      "guides/search-box-customization-with-typescript",
      "guides/mobile-timecard-customization",
      "guides/cleaning-check-list-customization",
      "guides/bulk-update-customization",
      "guides/format-setting-plugin",
      "guides/version-conflicts-issue-solution",
      "guides/attachment-customization",
      "guides/table-readonly-table-customization",
      "guides/tabs-customization",
      "guides/in-office-day-list-customization",
    ],
  },
  "release-notes": {
    Releases: [
      "releases/release-notes",
      "releases/release-notes-v1.4.0",
      "releases/release-notes-v1.3.2",
      "releases/release-notes-v1.3.1",
      "releases/release-notes-v1.3.0",
      "releases/release-notes-v1.2.0",
      "releases/release-notes-v1.1.1",
      "releases/release-notes-v1.1.0",
      "releases/release-notes-v1.0.5",
      "releases/release-notes-v1.0.4",
      "releases/release-notes-v1.0.3",
      "releases/release-notes-v1.0.2",
      "releases/release-notes-v1.0.1",
      "releases/release-notes-v1.0.0",
    ],
  },
};

module.exports = sidebars;
