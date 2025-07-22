import { aTimeout, elementUpdated, expect, fixture } from "@open-wc/testing";

import { UserOrgGroupSelect } from "../index";
const initItems = [
  { label: "User 1", value: "user1", type: "user" },
  { label: "User 2", value: "user2", type: "user" },
  { label: "User 3", value: "user3", type: "user" },
  { label: "Group 1", value: "group1", type: "group" },
  { label: "Group 2", value: "group2", type: "group" },
  { label: "Group 3", value: "group3", type: "group" },
  { label: "Organization 1", value: "org1", type: "org" },
  { label: "Organization 2", value: "org2", type: "org" },
];

describe("UserOrgGroupSelect", () => {
  describe("icon", () => {
    it("should be displayed picker icon when set icon to org", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        icon: "org",
      });
      const el = await fixture(container);
      const pickerIconEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__picker",
      ) as HTMLButtonElement;
      expect(pickerIconEl.hasAttribute("hidden")).to.equal(false);
    });
    it("should not be displayed picker icon when set icon to invalid type", async () => {
      const container = new UserOrgGroupSelect({
        items: initItems,
        icon: "invalid-icon",
      });
      const el = await fixture(container);
      const pickerIconEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__picker",
      ) as HTMLButtonElement;
      expect(pickerIconEl.hasAttribute("hidden")).to.equal(true);
    });
  });
});