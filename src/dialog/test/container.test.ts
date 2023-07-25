import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("container", () => {
    it("should be append to body when not assign on constructor", async () => {
      const container = new Dialog();
      container.open();
      await elementUpdated(container);

      const parrentEl = container.parentNode as HTMLElement;
      expect(parrentEl.nodeName).to.equal("BODY");
    });

    it("should be append to container when assign on constructor", async () => {
      const rootElement = document.createElement("div");
      rootElement.id = "root";
      document.body.appendChild(rootElement);
      const container = new Dialog({ container: rootElement });
      container.open();
      await elementUpdated(container);

      const parrentEl = container.parentNode as HTMLElement;
      expect(container.hasAttribute("opened")).to.equal(true);
      expect(parrentEl.id).to.equal("root");
    });

    it("should not display when assign null on constructor", async () => {
      const container = new Dialog({ container: null });
      container.open();
      await elementUpdated(container);
      expect(container.hasAttribute("opened")).to.equal(false);
    });

    it("should not display when setting to null by setter", async () => {
      const container = new Dialog();
      container.open();
      await elementUpdated(container);
      expect(container.hasAttribute("opened")).to.equal(true);

      container.container = null;
      await elementUpdated(container);
      expect(container.hasAttribute("opened")).to.equal(false);
    });

    it("should not display when setting to undefined by setter", async () => {
      const container = new Dialog();
      container.open();
      await elementUpdated(container);
      expect(container.hasAttribute("opened")).to.equal(true);

      container.container = undefined;
      await elementUpdated(container);
      expect(container.hasAttribute("opened")).to.equal(false);
    });

    it("should close component when assign invalid value while open by setter", async () => {
      const container = new Dialog();
      container.open();
      await elementUpdated(container);
      expect(container.hasAttribute("opened")).to.equal(true);

      container.container = "invalid value";
      await elementUpdated(container);
      expect(container.hasAttribute("opened")).to.equal(false);
    });

    it("should throw error when assign invalid value on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'container' property is not HTMLElement.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new Dialog({ container: "container" });
      fixture(container);
    });

    it("should throw error when assign invalid value by setter", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'container' property is not HTMLElement.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new Dialog();
      fixture(container);
      container.container = "container";
      container.open();
    });
  });
});
