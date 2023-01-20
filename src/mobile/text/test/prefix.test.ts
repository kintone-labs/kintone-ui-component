import { expect, fixture } from "@open-wc/testing";

import { MobileText } from "../index";

describe("MobileText", () => {
  describe("prefix", () => {
    it("should be null when not assigning on constructor", async () => {
      const container = new MobileText();
      const el = await fixture(container);
      const prefixEl = el.querySelector(
        ".kuc-mobile-text__input-form__prefix"
      ) as HTMLSpanElement;
      expect(prefixEl.hasAttribute("hidden")).to.equal(true);
    });

    it("should be '$' when assigning on constructor", async () => {
      const container = new MobileText({ prefix: "$" });
      const el = await fixture(container);
      const prefixEl = el.querySelector(
        ".kuc-mobile-text__input-form__prefix"
      ) as HTMLSpanElement;
      expect(prefixEl.hasAttribute("hidden")).to.equal(false);
      expect(prefixEl.innerText).to.equal("$");
    });

    it("should be '$' when assigning by setter", async () => {
      const container = new MobileText();
      container.prefix = "$";
      const el = await fixture(container);
      const prefixEl = el.querySelector(
        ".kuc-mobile-text__input-form__prefix"
      ) as HTMLSpanElement;
      expect(prefixEl.hasAttribute("hidden")).to.equal(false);
      expect(prefixEl.innerText).to.equal("$");
    });

    it("should be replaced by '$' when changed by setter", async () => {
      const container = new MobileText({ prefix: "yen" });
      container.prefix = "$";
      const el = await fixture(container);
      const prefixEl = el.querySelector(
        ".kuc-mobile-text__input-form__prefix"
      ) as HTMLSpanElement;
      expect(prefixEl.hasAttribute("hidden")).to.equal(false);
      expect(prefixEl.innerText).to.equal("$");
    });
  });
});
