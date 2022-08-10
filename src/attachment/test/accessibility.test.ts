import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { Attachment } from "../index";

describe("Attachment", () => {
  describe("accessibility", () => {
    it("should be focused the next remove button in files when press tab key on any remove button of file", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({
        files: [
          { name: "filename.jpg", size: "150" },
          { name: "file.txt", size: "200" },
        ],
        requiredIcon: true,
      });
      const el = await fixture(container);
      // await elementUpdated(container);
      // await elementUpdated(el);
      const buttonsEl = el.querySelectorAll(
        ".kuc-attachment__group__files__display-area__item__remove-button__container__button"
      );
      console.log(buttonsEl);
      const divsEl = el.querySelectorAll(
        ".kuc-attachment__group__files__display-area__item__remove-button__container"
      );
      console.log(divsEl);

      // divsEl[1].addEventListener("focus", (event: Event) => {
      //   triggeredEvent = event;
      //   console.log(triggeredEvent);
      // });
      (buttonsEl[1] as HTMLButtonElement).addEventListener(
        "focus",
        (event: Event) => {
          triggeredEvent = event;
          console.log(triggeredEvent);
        }
      );
      (divsEl[1] as HTMLDivElement).addEventListener(
        "focus",
        (event: Event) => {
          triggeredEvent = event;
          console.log(triggeredEvent);
        }
      );
      const buttonEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input"
      );
      (buttonEl as HTMLDivElement).addEventListener("focus", (event: Event) => {
        triggeredEvent = event;
        console.log(triggeredEvent);
      });
      // (buttonsEl[0] as HTMLButtonElement).dispatchEvent(
      //   new KeyboardEvent("keydown", { key: "Tab" })
      // );
      (buttonsEl[1] as HTMLDivElement).dispatchEvent(
        new KeyboardEvent("keydown", { key: "Tab" })
      );

      // await elementUpdated(el);
      // expect(triggeredEvent.type).to.equal("focus");

      await elementUpdated(el);
      expect(triggeredEvent.type).to.equal("focus");
    });
  });
});
