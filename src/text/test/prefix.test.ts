import { expect, fixture } from "@open-wc/testing";

import { Text } from "../index";

describe("Text", () => {
  describe("prefix", () => {
    it("should be null when not assigning on constructor", async () => {
      const container = new Text();
      const el = await fixture(container);
      const prefixEl = el.querySelector(
        ".kuc-text__group__input-form__prefix-outer__prefix"
      ) as HTMLSpanElement;
      expect(prefixEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be '$' when assigning on constructor", async () => {
      const container = new Text({ prefix: "$" });
      const el = await fixture(container);
      const prefixEl = el.querySelector(
        ".kuc-text__group__input-form__prefix-outer__prefix"
      ) as HTMLSpanElement;
      expect(prefixEl.hasAttribute("hidden")).to.equal(false);
      expect(prefixEl.innerText).to.equal("$");
    });

    it("should be '$' when assigning by setter", async () => {
      const container = new Text();
      container.prefix = "$";
      const el = await fixture(container);
      const prefixEl = el.querySelector(
        ".kuc-text__group__input-form__prefix-outer__prefix"
      ) as HTMLSpanElement;
      expect(prefixEl.hasAttribute("hidden")).to.equal(false);
      expect(prefixEl.innerText).to.equal("$");
    });

    it("should be replaced by '$' when changed by setter", async () => {
      const container = new Text({ prefix: "yen" });
      container.prefix = "$";
      const el = await fixture(container);
      const prefixEl = el.querySelector(
        ".kuc-text__group__input-form__prefix-outer__prefix"
      ) as HTMLSpanElement;
      expect(prefixEl.hasAttribute("hidden")).to.equal(false);
      expect(prefixEl.innerText).to.equal("$");
    });
  });
});
