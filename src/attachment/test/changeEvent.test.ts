import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { Attachment } from "../index";

describe("Attachment", () => {
  describe("changeEvent", () => {
    it("should be triggered when input element triggered add file event", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment();
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input"
      ) as HTMLInputElement;
      const list = new DataTransfer();
      const file = new File(["content"], "filename.jpg");
      list.items.add(file);
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.files[0].name).to.equal("filename.jpg");
      expect(triggeredEvent.detail.type).to.equal("add-file");
    });

    it("should be triggered when click remove file button", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({
        files: [
          { name: "filename.jpg", size: "150" },
          { name: "icon.jpg", size: "200" },
        ],
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const buttonsEl = el.querySelectorAll(
        ".kuc-attachment__group__files__display-area__item__remove-button__container__button"
      );
      (buttonsEl[0] as HTMLButtonElement).click();
      await elementUpdated(container);
      expect(triggeredEvent.type).to.equal("change");
      expect(
        triggeredEvent.detail.oldFiles[triggeredEvent.detail.fileIndex[0]].name
      ).to.equal("filename.jpg");
      expect(triggeredEvent.detail.type).to.equal("remove-file");
    });
  });
});
