import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Notification } from "../index";

const CLASS_OUT = "kuc-notification-fadeout";
const CLASS_IN = "kuc-notification-fadein";

describe("Notification", () => {
  describe("container", () => {
    it("should be append to body when not assign on constructor", async () => {
      const container = new Notification();
      container.open();
      await elementUpdated(container);

      const parentEl = container.parentNode as HTMLElement;
      expect(parentEl.nodeName).to.equal("BODY");
    });

    it("should be append to body when null on constructor", async () => {
      const container = new Notification({
        container: document.getElementById("some-id"),
      });
      container.open();
      await elementUpdated(container);

      const parentEl = container.parentNode as HTMLElement;
      expect(parentEl.nodeName).to.equal("BODY");
    });

    it("should be append to container when assign on constructor", async () => {
      const rootElement = document.createElement("div");
      rootElement.id = "root";
      document.body.appendChild(rootElement);
      const container = new Notification({ container: rootElement });
      container.open();
      await elementUpdated(container);

      const parentEl = container.parentNode as HTMLElement;
      expect(parentEl.id).to.equal("root");
    });

    it("should not display when assign null on constructor", async () => {
      const container = new Notification({ container: null });
      container.open();
      await elementUpdated(container);
      expect(container.hasAttribute("opened")).to.equal(false);
    });

    it("should not display when setting to null by setter", async () => {
      const container = new Notification();
      container.open();
      await elementUpdated(container);
      expect(container.classList.contains(CLASS_IN)).to.equal(true);

      container.container = null;
      await elementUpdated(container);
      expect(container.classList.contains(CLASS_OUT)).to.equal(true);
    });

    it("should not display when setting to undefined by setter", async () => {
      const container = new Notification();
      container.open();
      await elementUpdated(container);
      expect(container.classList.contains(CLASS_IN)).to.equal(true);

      container.container = undefined;
      await elementUpdated(container);
      expect(container.classList.contains(CLASS_OUT)).to.equal(true);
    });

    it("should throw error when assign invalid value on constructor", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'container' property is not HTMLElement.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new Notification({ container: "container" });
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
      const container = new Notification();
      container.open();

      fixture(container);
      container.container = "container";
      container.open();
    });

    it("should throw error when setting invalid value by setter", (done) => {
      const handleError = (event: any) => {
        const errorMsg = event.reason.message;
        expect(errorMsg).to.equal("'container' property is not HTMLElement.");
        window.removeEventListener("unhandledrejection", handleError);
        done();
      };
      window.addEventListener("unhandledrejection", handleError);
      const container = new Notification();
      fixture(container);
      container.container = "container";
      container.open();
    });
  });
});
