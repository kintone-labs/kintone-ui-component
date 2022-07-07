import { expect, fixture } from "@open-wc/testing";
import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("disabled", () => {
    it("does not exists on element when initializing without props option", async () => {
      const container = new MobileDatePicker();
      const el = await fixture(container);
      const inputEl = el.querySelector(".kuc-mobile-base-date__group__input");
      expect(inputEl).not.to.have.attr("disabled");
    });

    it("exists on element when initializing disabled value is true", async () => {
      const container = new MobileDatePicker({
        disabled: true,
      });
      const el = await fixture(container);
      const inputEl = el.querySelector(".kuc-mobile-base-date__group__input");
      expect(inputEl).to.have.attr("disabled");
    });

    it("exists on element when changing by setter", async () => {
      const container = new MobileDatePicker({
        disabled: false,
      });
      container.disabled = true;
      const el = await fixture(container);
      const inputEl = el.querySelector(".kuc-mobile-base-date__group__input");
      expect(inputEl).to.have.attr("disabled");
    });

    it("does not exists on element when changing by setter", async () => {
      const container = new MobileDatePicker({
        disabled: true,
      });
      container.disabled = false;
      const el = await fixture(container);
      const inputEl = el.querySelector(".kuc-mobile-base-date__group__input");
      expect(inputEl).not.to.have.attr("disabled");
    });
  });
});
