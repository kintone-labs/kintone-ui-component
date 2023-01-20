import { fixture } from "@open-wc/testing";

import { TextArea } from "../index";

describe("TextArea", () => {
  describe("accessibility", () => {
    it("event mousedown", async () => {
      const container = new TextArea();
      const el = await fixture(container);
      el.querySelector(".kuc-textarea__group__resizer")!.dispatchEvent(
        new CustomEvent("mousedown")
      );
      // TODO: Update expect() logic
      // I was not found something happened on HTML when mousedown
    });

    it("event mousemove", async () => {
      const container = new TextArea();
      const event = new CustomEvent("mousemove");
      document.dispatchEvent(event);
      // TODO: Update expect() logic
      // I was not found something happened on HTML when mousedown
    });

    it("event mouseup", async () => {
      const container = new TextArea();
      const event = new CustomEvent("mouseup");
      document.dispatchEvent(event);
      // TODO: Update expect() logic
      // I was not found something happened on HTML when mousedown
    });
  });
});
