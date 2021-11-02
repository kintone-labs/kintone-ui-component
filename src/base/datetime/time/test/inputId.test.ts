import { expect, fixture } from "@open-wc/testing";
import { BaseDateTime } from "../index";

describe("BaseTime", () => {
  describe("inputId", () => {
    it("should be empty string when not assigning", async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.inputId).to.equal("");
      expect(inputEl.id).to.equal("-label");
    });

    it('should be "my-inputid" when assigned by setter', async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.inputId = "my-inputid";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.inputId).to.equal("my-inputid");
      expect(inputEl.id).to.equal("my-inputid-label");
    });

    it('should be "newid" when changed to "newid"', async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.inputId = "my-inputid";
      container.inputId = "newid";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.inputId).to.equal("newid");
      expect(inputEl.id).to.equal("newid-label");
    });
  });
});
