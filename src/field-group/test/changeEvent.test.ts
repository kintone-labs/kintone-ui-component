import { expect, fixture } from "@open-wc/testing";

import { Text } from "../../text/index";
import { FieldGroup } from "../index";

const DEFAULT_WIDTH = "517px";

function getFieldGroupContent() {
  const divEl = document.createElement("div");
  divEl.style.width = "600px";
  const textComponent = new Text({ value: "Orange" });
  divEl.appendChild(textComponent);

  return divEl;
}

describe("FieldGroup", () => {
  describe("changeEvent", () => {
    it("should be expanded the content when focus and press Enter key at toggle button", async () => {
      const container = new FieldGroup({
        label: "FieldGroup's label",
        content: "FieldGroup's content",
      });

      const el = await fixture(container);
      const buttonToggle = el.querySelector(
        ".kuc-field-group__group__toggle",
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
        ".kuc-field-group__group__toggle",
      ) as HTMLButtonElement;
      buttonToggle.click();

      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.expanded).to.equal(false);
    });

    it("should be not trigger changeEvent the component inside FieldGroup changed", async () => {
      let triggeredEvent: any = null;
      const container = new FieldGroup({
        label: "FieldGroup's label",
        content: getFieldGroupContent(),
        expanded: true,
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-text__group__input-form__input-outer__input",
      ) as HTMLInputElement;
      inputEl.value = "Apple";
      inputEl.dispatchEvent(new CustomEvent("change"));

      expect(triggeredEvent).to.equal(null);
    });

    it("should be update the width if the width of content greater than 517px (default width)", async () => {
      const container = new FieldGroup({
        content: getFieldGroupContent(),
      });
      const el = await fixture(container);
      requestAnimationFrame(() => {
        const groupEl = el.querySelector(
          ".kuc-field-group__group",
        ) as HTMLElement;
        const groupWidth = getComputedStyle(groupEl).width;
        expect(groupWidth).not.equal(DEFAULT_WIDTH);
      });
    });
  });
});
