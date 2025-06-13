import { expect, fixture } from "@open-wc/testing";

import { UserOrgGroupSelect } from "../index";

describe("UserOrgGroupSelect", () => {
  describe("placeholder", () => {
    it("should not display when not assigning in constructor", async () => {
        const container = new UserOrgGroupSelect();
        const el = await fixture(container);
        const toggleInput = el.querySelector(
          ".kuc-user-org-group-select__group__container__select-area__toggle__input",
        ) as HTMLInputElement;
        expect(toggleInput.hasAttribute("palceholder")).to.equal(false);
      });
      it("should display when assigning in constructor", async () => {
        const container = new UserOrgGroupSelect({ placeholder: "test" });
        const el = await fixture(container);
        const toggleInput = el.querySelector(
          ".kuc-user-org-group-select__group__container__select-area__toggle__input",
        ) as HTMLInputElement;
        expect(toggleInput.placeholder).to.equal("test");
      });
    });
  });