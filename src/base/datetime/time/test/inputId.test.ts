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

    it('should be "options-id" when assigned by setter', async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.inputId = "options-id";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.inputId).to.equal("options-id");
      expect(inputEl.id).to.equal("options-id-label");
    });

    it('should be "replace-id" when changed to "replace-id"', async () => {
      const container = document.createElement("kuc-base-time") as BaseDateTime;
      container.inputId = "options-id";
      container.inputId = "replace-id";
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-base-time__group__input"
      ) as HTMLInputElement;

      expect(container.inputId).to.equal("replace-id");
      expect(inputEl.id).to.equal("replace-id-label");
    });
  });
});
