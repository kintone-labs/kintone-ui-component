import { elementUpdated, expect } from "@open-wc/testing";

import { Notification } from "../index";

describe("Notification", () => {
  describe("container", () => {
    it("should be append to body when not assign on constructor", async () => {
      const container = new Notification();
      container.open();
      await elementUpdated(container);

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");
    });

    it("should be append to body when assign invalid element on constructor", async () => {
      const container = new Notification({
        container: document.getElementById("some-id"),
      });
      container.open();
      await elementUpdated(container);

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");
    });

    it("should be append to container when assign on constructor", async () => {
      const rootElement = document.createElement("div");
      rootElement.id = "root";
      document.body.appendChild(rootElement);
      const container = new Notification({ container: rootElement });
      container.open();
      await elementUpdated(container);

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.id).to.equal("root");
    });
  });
});
