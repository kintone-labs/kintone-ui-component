import { elementUpdated, expect, fixture, nextFrame } from "@open-wc/testing";

import { Spinner } from "../index";

describe("Spinner", () => {
  describe("container", () => {
    it("should be append to body when not assign on constructor", async () => {
      const container = new Spinner();
      container.open();
      await elementUpdated(container);

      const parentEl = container.parentNode as HTMLElement;
      expect(parentEl.nodeName).to.equal("BODY");
    });

    it("should be append to container when assign on constructor", async () => {
      const rootElement = document.createElement("div");
      rootElement.id = "root";
      document.body.appendChild(rootElement);
      const container = new Spinner({ container: rootElement });
      container.open();
      await elementUpdated(container);

      const parentEl = container.parentNode as HTMLElement;
      expect(parentEl.id).to.equal("root");
    });

    it("should not display when assign null on constructor", async () => {
      const container = new Spinner({ container: null });
      container.open();
      await nextFrame();
      expect(document.body.contains(container)).to.equal(false);
    });

    it("should not display when setting to null by setter", async () => {
      const container = new Spinner();
      container.open();
      await elementUpdated(container);
      expect(document.body.contains(container)).to.equal(true);

      container.container = null;
      await elementUpdated(container);
      expect(document.body.contains(container)).to.equal(false);
    });

    it("should not display when setting to undefined by setter", async () => {
      const container = new Spinner();
      container.open();
      await elementUpdated(container);
      expect(document.body.contains(container)).to.equal(true);

      container.container = undefined;
      await elementUpdated(container);
      expect(document.body.contains(container)).to.equal(false);
    });

    it("should throw error when assign invalid value on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'container' property is not HTMLElement.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new Spinner({ container: "container" });
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
      const container = new Spinner();
      container.open();

      fixture(container);
      container.container = "container";
      container.open();
    });
  });
});
