import { expect, fixture } from "@open-wc/testing";

import { Text } from "../index";

describe("Text", () => {
  describe("suffix", () => {
    it("should be null when not assigning on constructor", async () => {
      const container = new Text();
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-text__group__input-form__suffix-outer__suffix"
      ) as HTMLSpanElement;
      expect(suffixEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be 'yen' when assigning on constructor", async () => {
      const container = new Text();
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-text__group__input-form__suffix-outer__suffix"
      ) as HTMLSpanElement;
      expect(suffixEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be 'yen' when assigning by setter", async () => {
      const container = new Text();
      container.suffix = "yen";
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-text__group__input-form__suffix-outer__suffix"
      ) as HTMLSpanElement;
      expect(suffixEl.hasAttribute("hidden")).to.equal(false);
      expect(suffixEl.innerText).to.equal("yen");
    });

    it("should be replaced by 'yen' when changed by setter", async () => {
      const container = new Text({ suffix: "$" });
      container.suffix = "yen";
      const el = await fixture(container);
      const suffixEl = el.querySelector(
        ".kuc-text__group__input-form__suffix-outer__suffix"
      ) as HTMLSpanElement;
      expect(suffixEl.hasAttribute("hidden")).to.equal(false);
      expect(suffixEl.innerText).to.equal("yen");
    });
  });
});
