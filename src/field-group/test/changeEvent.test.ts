import { expect, fixture } from "@open-wc/testing";

import { FieldGroup } from "../index";

describe("FieldGroup", () => {
  describe("changeEvent", () => {
    it("should be expanded the content when focus and press Enter key at toggle button", async () => {
      const container = new FieldGroup({
        label: "FieldGroup's label",
        content: "FieldGroup's content",
      });

      const el = await fixture(container);
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle"
      ) as HTMLButtonElement;
      buttonToggle.click();
    });

    it("should be collapse when click to collapse the component", async () => {
      let triggeredEvent: any = null;
      const container = new FieldGroup({
        label: "FieldGroup's label",
        content: "FieldGroup's content",
        expanded: true,
      });

      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle"
      ) as HTMLButtonElement;
      buttonToggle.click();

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.expanded).to.equal(false);
    });
  });
});
