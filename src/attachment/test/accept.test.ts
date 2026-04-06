import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("accept", () => {
    it("should set accept attribute on input element", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: ".txt,.pdf" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      expect(inputEl.getAttribute("accept")).to.equal(".txt,.pdf");

      const list = new DataTransfer();
      list.items.add(new File(["content"], "test.txt", { type: "text/plain" }));
      list.items.add(
        new File(["content"], "test.pdf", { type: "application/pdf" }),
      );
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(2);
      expect(triggeredEvent.detail.files[0].name).to.equal("test.txt");
      expect(triggeredEvent.detail.files[1].name).to.equal("test.pdf");
    });

    it("should filter files by extension", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: ".txt" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      list.items.add(new File(["content"], "pic.jpg", { type: "image/jpeg" }));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(1);
      expect(triggeredEvent.detail.files[0].name).to.equal("doc.txt");
    });

    it("should filter files by MIME wildcard type", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: "image/*" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "pic.png", { type: "image/png" }));
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      console.log(triggeredEvent.detail.files.length, "nvh");
      expect(triggeredEvent.detail.files.length).to.equal(1);
      expect(triggeredEvent.detail.files[0].name).to.equal("pic.png");
    });

    it("should accept all image subtypes with image/*", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: "image/*" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "pic.png", { type: "image/png" }));
      list.items.add(new File(["content"], "pic.jpg", { type: "image/jpeg" }));
      list.items.add(new File(["content"], "pic.gif", { type: "image/gif" }));
      list.items.add(
        new File(["content"], "pic.svg", { type: "image/svg+xml" }),
      );
      list.items.add(
        new File(["content"], "doc.pdf", { type: "application/pdf" }),
      );
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(4);
      expect(triggeredEvent.detail.files[0].name).to.equal("pic.png");
      expect(triggeredEvent.detail.files[1].name).to.equal("pic.jpg");
      expect(triggeredEvent.detail.files[2].name).to.equal("pic.gif");
      expect(triggeredEvent.detail.files[3].name).to.equal("pic.svg");
    });

    it("should filter files by exact MIME type", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: "application/pdf" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(
        new File(["content"], "doc.pdf", { type: "application/pdf" }),
      );
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(1);
      expect(triggeredEvent.detail.files[0].name).to.equal("doc.pdf");
    });

    it("should accept all files when accept is empty", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: "" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      list.items.add(new File(["content"], "pic.jpg", { type: "image/jpeg" }));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(2);
      expect(triggeredEvent.detail.files[0].name).to.equal("doc.txt");
      expect(triggeredEvent.detail.files[1].name).to.equal("pic.jpg");
    });

    it("should not trigger change event when all files are filtered out", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: ".pdf" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent).to.equal(null);
    });

    it("should filter invalid accept tokens and still match valid ones", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: "123,.txt" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      list.items.add(new File(["content"], "pic.jpg", { type: "image/jpeg" }));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(1);
      expect(triggeredEvent.detail.files[0].name).to.equal("doc.txt");
    });

    it("should handle spaces between extensions in accept", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: ".png,   .jpg,.jpeg" });
      container.addEventListener("change", (event: any) => {
        triggeredEvent = event;
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__input-container__input",
      ) as HTMLInputElement;
      const list = new DataTransfer();
      list.items.add(new File(["content"], "photo.png", { type: "image/png" }));
      list.items.add(
        new File(["content"], "photo.jpg", { type: "image/jpeg" }),
      );
      list.items.add(
        new File(["content"], "photo.jpeg", { type: "image/jpeg" }),
      );
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      inputEl.files = list.files;
      inputEl.dispatchEvent(new Event("change"));
      await elementUpdated(container);
      expect(triggeredEvent.detail.files.length).to.equal(3);
      expect(triggeredEvent.detail.files[0].name).to.equal("photo.png");
      expect(triggeredEvent.detail.files[1].name).to.equal("photo.jpg");
      expect(triggeredEvent.detail.files[2].name).to.equal("photo.jpeg");
    });

    it("should filter files on drag and drop", async () => {
      let triggeredEvent: any = null;
      const container = new Attachment({ accept: ".txt" });
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
      list.items.add(new File(["content"], "doc.txt", { type: "text/plain" }));
      list.items.add(new File(["content"], "pic.jpg", { type: "image/jpeg" }));
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
      expect(triggeredEvent.detail.files.length).to.equal(1);
      expect(triggeredEvent.detail.files[0].name).to.equal("doc.txt");
    });
  });
});
