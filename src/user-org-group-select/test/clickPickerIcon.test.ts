import { elementUpdated, expect, fixture } from "@open-wc/testing";

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

describe("UserOrgGroup", () => {
  describe("clickPickerIcon", () => {
    it("should be triggered when click on picker icon", async () => {
      let triggeredEvent: any = null;
      const container = new UserOrgGroupSelect({
        items: initItems,
        label: "Select User/Group/Organization",
        value: [initItems[0].value],
        icon: "group",
      });
      const el = await fixture(container);
      const pickerIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__picker__button",
      ) as HTMLButtonElement;
      container.addEventListener("click-picker-icon", (event: any) => {
        triggeredEvent = event;
      });
      pickerIconButtonEl.click();
      await elementUpdated(container);
      expect(triggeredEvent.type).to.equal("click-picker-icon");
    });
  });
});
