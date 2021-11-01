import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTime } from "../index";

describe("BaseTime", () => {
  describe("accessibility", () => {
    describe("hour", () => {
      it("should select minute range when arrowright key down on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        const el = await fixture(container);

        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;
        inputEl.focus();
        inputEl.dispatchEvent(
          new KeyboardEvent("keydown", { key: "ArrowRight" })
        );
        expect(inputEl.selectionStart).to.equal(3);
      });

      it("should select minute range when enter key down on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        const el = await fixture(container);

        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;
        inputEl.focus();
        inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
        expect(inputEl.selectionStart).to.equal(3);
      });

      it("should select minute range when tab key down on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        const el = await fixture(container);

        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;
        inputEl.focus();
        inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
        expect(inputEl.selectionStart).to.equal(3);
      });

      it("should select hour range when arrow left key down on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        const el = await fixture(container);

        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;
        inputEl.focus();
        inputEl.setSelectionRange(3, 5);
        inputEl.dispatchEvent(
          new KeyboardEvent("keydown", { key: "ArrowLeft" })
        );
        expect(inputEl.selectionStart).to.equal(0);
      });

      it("should select hour range when shift tab key down on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        const el = await fixture(container);

        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;
        inputEl.focus();
        inputEl.setSelectionRange(3, 5);
        inputEl.dispatchEvent(
          new KeyboardEvent("keydown", { key: "Tab", shiftKey: true })
        );
        expect(inputEl.selectionStart).to.equal(0);
      });

      //   it("should blur input when shift tab key down on input", async () => {
      //     const container = document.createElement(
      //       "kuc-base-time"
      //     ) as BaseDateTime;
      //     container.value = "05:30";
      //     const el = await fixture(container);

      //     const inputEl = el.querySelector(
      //       ".kuc-base-time__group__input"
      //     ) as HTMLInputElement;
      //   });

      it("should select hour range when click on input", async () => {
        const container = document.createElement(
          "kuc-base-time"
        ) as BaseDateTime;
        container.value = "05:30";
        const el = await fixture(container);

        const inputEl = el.querySelector(
          ".kuc-base-time__group__input"
        ) as HTMLInputElement;
        inputEl.click();
        expect(inputEl.selectionStart).to.equal(0);
      });
    });
  });
});
