import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { UserOrgGroupSelect } from "../index";

const initItems = [
  {label: "User 1", value: "user1", type: "user"},
  {label: "User 2", value: "user2", type: "user"},
  {label: "User 3", value: "user3", type: "user"},
  {label: "Group 1", value: "group1", type: "group"},
  {label: "Group 2", value: "group2", type: "group"},
  {label: "Group 3", value: "group3", type: "group"},
  {label: "Organization 1", value: "org1", type: "organization"},
  {label: "Organization 2", value: "org2", type: "organization"}
];

const initItemsWithDisabled = [
  {label: "User 1", value: "user1", type: "user", disabled: true},
  {label: "User 2", value: "user2", type: "user"},
  {label: "User 3", value: "user3", type: "user"},
  {label: "Group 1", value: "group1", type: "group"},
  {label: "Group 2", value: "group2", type: "group"},
  {label: "Group 3", value: "group3", type: "group"},
  {label: "Organization 1", value: "org1", type: "organization"},
  {label: "Organization 2", value: "org2", type: "organization", disabled: true}
];
describe('UserOrgGroup', () => { 
  describe('changeEvent', () => {
    it('should be triggered when click on the item', async () => {
      let triggeredEvent: any = null;
      const container = new UserOrgGroupSelect({items: initItems, value: [initItems[0].value]});
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button"
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(".kuc-user-org-group-select__group__container__select-area__select-menu__item");
      expect(itemsEl.length).to.equal(initItems.length);
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const itemEl = itemsEl[1] as HTMLLIElement;
      itemEl.click();
      await elementUpdated(container);
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.deep.equal([initItems[0].value, initItems[1].value]);
      expect(triggeredEvent.detail.oldValue).to.deep.equal([initItems[0].value]);
    });
    it("should not be triggered when click on the item as same as the selected item", async () => {
      let triggeredEvent: any = null;
      const container = new UserOrgGroupSelect({items: initItems, value: [initItems[0].value]});
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button"
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(".kuc-user-org-group-select__group__container__select-area__select-menu__item");
      expect(itemsEl.length).to.equal(initItems.length);
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const itemEl = itemsEl[0] as HTMLLIElement;
      itemEl.click();
      await elementUpdated(container);
      expect(triggeredEvent).to.equal(null);
    });
    it("should be triggered when click on the item with multiple selection", async () => {
      let triggeredEvent: any = null;
      const container = new UserOrgGroupSelect({items: initItems, value: [initItems[0].value, initItems[1].value], multiple: true});
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button"
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(".kuc-user-org-group-select__group__container__select-area__select-menu__item");
      expect(itemsEl.length).to.equal(initItems.length);
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const itemEl = itemsEl[2] as HTMLLIElement;
      itemEl.click();
      await elementUpdated(container);
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.value).to.deep.equal([initItems[0].value, initItems[1].value, initItems[2].value]);
      expect(triggeredEvent.detail.oldValue).to.deep.equal([initItems[0].value, initItems[1].value]);
    });
    it("should not be triggered when click on the disabled item", async () => {
      let triggeredEvent: any = null;
      const container = new UserOrgGroupSelect({items: initItemsWithDisabled, value: [initItemsWithDisabled[1].value]});
      const el = await fixture(container);
      const toggleIconButtonEl = el.querySelector(
        ".kuc-user-org-group-select__group__container__select-area__toggle__icon__button"
      ) as HTMLButtonElement;
      toggleIconButtonEl.click();
      await elementUpdated(container);
      const itemsEl = el.querySelectorAll(".kuc-user-org-group-select__group__container__select-area__select-menu__item");
      expect(itemsEl.length).to.equal(initItemsWithDisabled.length);
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const itemEl = itemsEl[0] as HTMLLIElement;
      itemEl.click();
      await elementUpdated(container);
      expect(triggeredEvent).to.equal(null);
      const itemEl2 = itemsEl[7] as HTMLLIElement;
      itemEl2.click();
      await elementUpdated(container);
      expect(triggeredEvent).to.equal(null);
    });
  })
 })