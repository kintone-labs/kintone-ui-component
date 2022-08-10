import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { Attachment } from "../index";

describe("Attachment", () => {
  describe("accessibility", () => {
    it("should be focused the input element when press tab key on last remove button in files", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({
        files: [
          { name: "filename.jpg", size: "150" },
          { name: "file.txt", size: "200" },
        ],
        requiredIcon: true,
      });
      const el = await fixture(container);

      const buttonsEl = el.querySelectorAll(
        ".kuc-attachment__group__files__display-area__item__remove-button__container__button"
      );
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input"
      );
      (inputEl as HTMLInputElement).addEventListener(
        "focus",
        (event: Event) => {
          triggeredEvent = event;
          console.log(event);
        }
      );
      (buttonsEl[1] as HTMLButtonElement).focus();
      (buttonsEl[1] as HTMLButtonElement).dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab" })
      );
      // (buttonsEl[1] as HTMLButtonElement).click();
      await elementUpdated(el);
      expect(triggeredEvent.type).to.equal("focus");
    });
  });
});
