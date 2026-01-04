import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Switch } from "../index";

describe("Switch", () => {
  describe("changeEvent", () => {
    it("should be triggered when input element triggered change event", async () => {
      let triggeredEvent: any = null;
      const container = new Switch();
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-switch__group__switch__input",
      ) as HTMLInputElement;

      inputEl.checked = true;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(el);

      await expect(triggeredEvent.type).to.equal("change");
      await expect(triggeredEvent.detail.checked).to.equal(true);
    });

    it("should be triggered after clicked labels", async () => {
      let triggeredEvent: any = null;
      const container = new Switch();
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);

      const groupLabelEl = el.querySelector(
        ".kuc-switch__group__label",
      ) as HTMLLabelElement;
      groupLabelEl.click();
      await elementUpdated(el);
      await expect(triggeredEvent.type).to.equal("change");
      await expect(triggeredEvent.detail.checked).to.equal(true);

      const trackLabelEl = el.querySelector(
        ".kuc-switch__group__switch__track",
      ) as HTMLLabelElement;
      trackLabelEl.click();
      await elementUpdated(el);
      await expect(triggeredEvent.type).to.equal("change");
      await expect(triggeredEvent.detail.checked).to.equal(false);

      const handleLabelEl = el.querySelector(
        ".kuc-switch__group__switch__handle",
      ) as HTMLLabelElement;
      handleLabelEl.click();
      await elementUpdated(el);
      await expect(triggeredEvent.type).to.equal("change");
      await expect(triggeredEvent.detail.checked).to.equal(true);
    });

    it("should not be triggered when disabled", async () => {
      let triggeredEvent: any = null;
      const container = new Switch({ disabled: true });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });

      const el = await fixture(container);

      const groupLabelEl = el.querySelector(
        ".kuc-switch__group__label",
      ) as HTMLLabelElement;
      groupLabelEl.click();
      await elementUpdated(el);
      await expect(triggeredEvent).to.equal(null);

      const trackLabelEl = el.querySelector(
        ".kuc-switch__group__switch__track",
      ) as HTMLLabelElement;
      trackLabelEl.click();
      await elementUpdated(el);
      await expect(triggeredEvent).to.equal(null);

      const handleLabelEl = el.querySelector(
        ".kuc-switch__group__switch__handle",
      ) as HTMLLabelElement;
      handleLabelEl.click();
      await elementUpdated(el);
      await expect(triggeredEvent).to.equal(null);
    });
  });
});
