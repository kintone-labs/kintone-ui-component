import { expect, fixture } from "@open-wc/testing";

import { MobileText } from "../index";

describe("MobileText", () => {
  describe("suffix", () => {
    it("should be null when not assigning on constructor", async () => {
      const container = new MobileText();
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-mobile-text__input-form__suffix"
      ) as HTMLSpanElement;
      expect(suffixEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be 'yen' when assigning on constructor", async () => {
      const container = new MobileText();
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-mobile-text__input-form__suffix"
      ) as HTMLSpanElement;
      expect(suffixEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be 'yen' when assigning by setter", async () => {
      const container = new MobileText();
      container.suffix = "yen";
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-mobile-text__input-form__suffix"
      ) as HTMLSpanElement;
      expect(suffixEl.hasAttribute("hidden")).to.equal(false);
      expect(suffixEl.innerText).to.equal("yen");
    });

    it("should be replaced by 'yen' when changed by setter", async () => {
      const container = new MobileText({ suffix: "$" });
      container.suffix = "yen";
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-mobile-text__input-form__suffix"
      ) as HTMLSpanElement;
      expect(suffixEl.hasAttribute("hidden")).to.equal(false);
      expect(suffixEl.innerText).to.equal("yen");
    });
  });
});
