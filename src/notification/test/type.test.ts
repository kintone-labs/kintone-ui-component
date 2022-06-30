import { expect, fixture } from "@open-wc/testing";
import { Notification } from "../index";

describe("Notification", () => {
  describe("type", () => {
    describe("Notification", () => {
      describe("type", () => {
        it("should be danger when not assigning on constructor", async () => {
          const container = new Notification();
          const el = await fixture(container);
          const notificationEl = el.querySelector(
            ".kuc-notification__notification"
          ) as HTMLDivElement;
          expect(notificationEl.classList.length).to.equal(2);
          expect(notificationEl.classList[0]).to.equal(
            "kuc-notification__notification"
          );
          expect(notificationEl.classList[1]).to.equal(
            "kuc-notification__notification--danger"
          );
        });

        it("should be danger when assigning by setter", async () => {
          const container = new Notification({
            type: "info",
          });
          container.type = "danger";
          const el = await fixture(container);
          const notificationEl = el.querySelector(
            ".kuc-notification__notification"
          ) as HTMLDivElement;
          expect(notificationEl.classList.length).to.equal(2);
          expect(notificationEl.classList[0]).to.equal(
            "kuc-notification__notification"
          );
          expect(notificationEl.classList[1]).to.equal(
            "kuc-notification__notification--danger"
          );
        });

        it("should be info when assigning info by setter", async () => {
          const container = new Notification({
            type: "danger",
          });
          container.type = "info";
          const el = await fixture(container);
          const notificationEl = el.querySelector(
            ".kuc-notification__notification"
          ) as HTMLDivElement;
          expect(notificationEl.classList.length).to.equal(2);
          expect(notificationEl.classList[0]).to.equal(
            "kuc-notification__notification"
          );
          expect(notificationEl.classList[1]).to.equal(
            "kuc-notification__notification--info"
          );
        });

        it("should be success when assigning success by setter", async () => {
          const container = new Notification({
            type: "danger",
          });
          container.type = "success";
          const el = await fixture(container);
          const notificationEl = el.querySelector(
            ".kuc-notification__notification"
          ) as HTMLDivElement;
          expect(notificationEl.classList.length).to.equal(2);
          expect(notificationEl.classList[0]).to.equal(
            "kuc-notification__notification"
          );
          expect(notificationEl.classList[1]).to.equal(
            "kuc-notification__notification--success"
          );
        });
      });
    });
  });
});
