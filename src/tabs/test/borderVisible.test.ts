import { expect, fixture } from "@open-wc/testing";

import { Tabs } from "../index";

describe("Tabs", () => {
  describe("borderVisible", () => {
    it("should be default(true) when not set in constructor", async () => {
      const container = new Tabs({
        value: "tab",
        items: [{ label: "tab", value: "tab", content: "tab" }],
      });
      const el = await fixture(container);
      const tabPanel = el.querySelector(
        ".kuc-tabs__group__tab-panel"
      ) as HTMLDivElement;
      expect(tabPanel.hasAttribute("border-visible")).to.equal(true);
    });
    it("should be set to false if set false in constructor", async () => {
      const container = new Tabs({
        value: "tab",
        borderVisible: false,
        items: [{ label: "tab", value: "tab", content: "tab" }],
      });
      const el = await fixture(container);
      const tabPanel = el.querySelector(
        ".kuc-tabs__group__tab-panel"
      ) as HTMLDivElement;
      expect(tabPanel.hasAttribute("border-visible")).to.equal(false);
    });
    it("should be change to true if set true by setter", async () => {
      const container = new Tabs({
        value: "tab",
        borderVisible: false,
        items: [{ label: "tab", value: "tab", content: "tab" }],
      });
      container.borderVisible = true;

      const el = await fixture(container);
      const tabPanel = el.querySelector(
        ".kuc-tabs__group__tab-panel"
      ) as HTMLDivElement;
      expect(tabPanel.hasAttribute("border-visible")).to.equal(true);
    });
    it("should be change to false if set false by setter", async () => {
      const container = new Tabs({
        value: "tab",
        items: [{ label: "tab", value: "tab", content: "tab" }],
      });
      container.borderVisible = false;

      const el = await fixture(container);
      const tabPanel = el.querySelector(
        ".kuc-tabs__group__tab-panel"
      ) as HTMLDivElement;
      expect(tabPanel.hasAttribute("border-visible")).to.equal(false);
    });
  });
});
