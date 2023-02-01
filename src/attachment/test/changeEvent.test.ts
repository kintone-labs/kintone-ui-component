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

    it("should be triggered add file event when drag file into drag file area ", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ disabled: true });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const dragEl = el.querySelector(
        ".kuc-attachment__group__files"
      ) as HTMLDivElement;
      const dropEL = el.querySelector(
        ".kuc-attachment__group__files__droppable"
      ) as HTMLDivElement;
      const list = new DataTransfer();
      const file = new File(["content"], "filename.jpg");
      list.items.add(file);
      dragEl.dispatchEvent(
        new DragEvent("dragenter", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        })
      );
      dragEl.dispatchEvent(
        new DragEvent("dragover", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        })
      );
      dropEL.dispatchEvent(
        new DragEvent("drop", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        })
      );
      dragEl.dispatchEvent(
        new DragEvent("dragleave", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        })
      );
      await elementUpdated(container);
      container.disabled = false;
      dragEl.dispatchEvent(
        new DragEvent("dragenter", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        })
      );
      dragEl.dispatchEvent(
        new DragEvent("dragover", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        })
      );
      dropEL.dispatchEvent(
        new DragEvent("drop", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        })
      );
      dragEl.dispatchEvent(
        new DragEvent("dragleave", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        })
      );
      await elementUpdated(container);
      expect(triggeredEvent.type).to.equal("change");
      expect(triggeredEvent.detail.files[0].name).to.equal("filename.jpg");
      expect(triggeredEvent.detail.type).to.equal("add-file");
    });

    it("should be triggered when click remove file button", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({
        files: [
          { name: "filename.jpg", size: "10737418240" },
          { size: "10485760" },
          { name: "icon.jpg", size: "2000" },
        ],
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const buttonsEl = el.querySelectorAll(
        ".kuc-attachment__group__files__display-area__item__remove-button__container__button"
      );
      (buttonsEl[2] as HTMLButtonElement).click();
      await elementUpdated(container);
      expect(triggeredEvent.type).to.equal("change");
      expect(
        triggeredEvent.detail.oldFiles[triggeredEvent.detail.fileIndex[0]].name
      ).to.equal("icon.jpg");
      expect(triggeredEvent.detail.type).to.equal("remove-file");
    });
    it("should not triggered add file event when dragging without specifying dataTransfer", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment();
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const dragEl = el.querySelector(
        ".kuc-attachment__group__files"
      ) as HTMLDivElement;
      dragEl.dispatchEvent(
        new DragEvent("dragenter", {
          cancelable: true,
          bubbles: true,
        })
      );
      expect(triggeredEvent).to.equal(null);
    });
  });
});
