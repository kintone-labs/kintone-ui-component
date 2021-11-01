import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTime } from "../index";

describe("BaseTime", () => {
  describe("inputId", () => {
    it('should be "" when not assigning on constructor', async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      const el = await fixture(container);

      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;
      expect(inputEl.id).to.equal("-label");
    });

    it('should be "inputid-label" when assigning on constructor', async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.inputId = "inputid";
      const el = await fixture(container);

      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;
      expect(inputEl.id).to.equal("inputid-label");
    });

    it('should be replaced to "replace-id" after changing by setter', async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.inputId = "inputid";
      const el = await fixture(container);
      container.inputId = "newid";
      await elementUpdated(el);

      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;
      expect(inputEl.id).to.equal("newid-label");
    });
  });
});
