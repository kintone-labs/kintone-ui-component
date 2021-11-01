import { expect, fixture } from "@open-wc/testing";
import { BaseDateTime } from "../index";

describe("BaseTime", () => {
  describe("changeEvent", () => {
    describe("hour", () => {
      it("should triggered when arrow up key on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        let triggeredEvent: any = null;
        container.addEventListener("kuc:base-time-change", (event: any) => {
          triggeredEvent = event;
        });

        const el = await fixture(container);
        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;

        inputEl.click();
        inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));

        expect(triggeredEvent.type).to.equal("kuc:base-time-change");
        expect(triggeredEvent.detail.value).to.equal("06:30");
        expect(triggeredEvent.detail.oldValue).to.equal("05:30");
      });

      it("should triggered when arrow down key on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        let triggeredEvent: any = null;
        container.addEventListener("kuc:base-time-change", (event: any) => {
          triggeredEvent = event;
        });

        const el = await fixture(container);
        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;

        inputEl.click();
        inputEl.dispatchEvent(
          new KeyboardEvent("keydown", { key: "ArrowDown" })
        );

        expect(triggeredEvent.type).to.equal("kuc:base-time-change");
        expect(triggeredEvent.detail.value).to.equal("04:30");
        expect(triggeredEvent.detail.oldValue).to.equal("05:30");
      });

      it("should triggered when typing 3 on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        let triggeredEvent: any = null;
        container.addEventListener("kuc:base-time-change", (event: any) => {
          triggeredEvent = event;
        });

        const el = await fixture(container);
        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;

        inputEl.click();
        inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "3" }));

        expect(triggeredEvent.type).to.equal("kuc:base-time-change");
        expect(triggeredEvent.detail.value).to.equal("03:30");
        expect(triggeredEvent.detail.oldValue).to.equal("05:30");
      });
    });
  });
});
