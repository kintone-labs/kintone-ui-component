import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("maxFiles", () => {
    it("should limit added files to maxFiles", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ maxFiles: 2 });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "a.txt"));
      list.items.add(new File(["content"], "b.txt"));
      list.items.add(new File(["content"], "c.txt"));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(2);
      expect(triggeredEvent.detail.files[0].name).to.equal("a.txt");
      expect(triggeredEvent.detail.files[1].name).to.equal("b.txt");
    });

    it("should hide browse button when maxFiles reached", async () => {
      const container = new Attachment({
        maxFiles: 1,
        files: [{ name: "existing.txt", size: "100" }],
      });
      const el = await fixture(container);
      const browseButton = el.querySelector(
        ".kuc-attachment__group__files__browse-button",
      ) as HTMLElement;
      expect(browseButton.hasAttribute("hidden")).to.equal(true);
    });

    it("should show browse button when under maxFiles", async () => {
      const container = new Attachment({
        maxFiles: 3,
        files: [{ name: "existing.txt", size: "100" }],
      });
      const el = await fixture(container);
      const browseButton = el.querySelector(
        ".kuc-attachment__group__files__browse-button",
      ) as HTMLElement;
      expect(browseButton.hasAttribute("hidden")).to.equal(false);
    });

    it("should not add files when maxFiles already reached", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({
        maxFiles: 1,
        files: [{ name: "existing.txt", size: "100" }],
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const dragEl = el.querySelector(
        ".kuc-attachment__group__files",
      ) as HTMLDivElement;
      const dropEl = el.querySelector(
        ".kuc-attachment__group__files__droppable",
      ) as HTMLDivElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "new.txt"));
      dragEl.dispatchEvent(
        new DragEvent("dragenter", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        }),
      );
      dragEl.dispatchEvent(
        new DragEvent("dragover", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        }),
      );
      dropEl.dispatchEvent(
        new DragEvent("drop", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        }),
      );
      await elementUpdated(container);
      expect(triggeredEvent).to.equal(null);
    });

    it("should fill remaining slots only", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({
        maxFiles: 3,
        files: [{ name: "existing.txt", size: "100" }],
      });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "a.txt"));
      list.items.add(new File(["content"], "b.txt"));
      list.items.add(new File(["content"], "c.txt"));
      list.items.add(new File(["content"], "d.txt"));
      list.items.add(new File(["content"], "e.txt"));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(3);
      expect(triggeredEvent.detail.files[1].name).to.equal("a.txt");
      expect(triggeredEvent.detail.files[2].name).to.equal("b.txt");
    });

    it("should allow unlimited files when maxFiles is undefined", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment();
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "a.txt"));
      list.items.add(new File(["content"], "b.txt"));
      list.items.add(new File(["content"], "c.txt"));
      list.items.add(new File(["content"], "d.txt"));
      list.items.add(new File(["content"], "e.txt"));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(5);
    });

    it("should treat negative maxFiles as unlimited", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ maxFiles: -5 });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "a.txt"));
      list.items.add(new File(["content"], "b.txt"));
      list.items.add(new File(["content"], "c.txt"));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(3);
    });

    it("should treat zero maxFiles as unlimited", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ maxFiles: 0 });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "a.txt"));
      list.items.add(new File(["content"], "b.txt"));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(2);
    });

    it("should prevent drag-enter when maxFiles reached", async () => {
      const container = new Attachment({
        maxFiles: 1,
        files: [{ name: "existing.txt", size: "100" }],
      });
      const el = await fixture(container);
      const dragEl = el.querySelector(
        ".kuc-attachment__group__files",
      ) as HTMLDivElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "new.txt"));
      dragEl.dispatchEvent(
        new DragEvent("dragenter", {
          dataTransfer: list,
          cancelable: true,
          bubbles: true,
        }),
      );
      await elementUpdated(container);
      const droppable = el.querySelector(
        ".kuc-attachment__group__files__droppable",
      ) as HTMLDivElement;
      expect(droppable.hasAttribute("hidden")).to.equal(true);
    });

    it("should truncate decimal maxFiles to integer", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ maxFiles: 2.7 });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "a.txt"));
      list.items.add(new File(["content"], "b.txt"));
      list.items.add(new File(["content"], "c.txt"));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(2);
      expect(triggeredEvent.detail.files[0].name).to.equal("a.txt");
      expect(triggeredEvent.detail.files[1].name).to.equal("b.txt");
    });
  });
});
