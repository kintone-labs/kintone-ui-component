import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { BaseDateTimeListBox } from "../index";

describe("BaseDateTimeListBox", () => {
  describe("items", () => {
    it("should be update by setter", async () => {
      const initItems = [
        { value: "0", label: "JANUARY" },
        { value: "1", label: "FEBRUARY" },
        { value: "2", label: "MARCH" },
      ];
      const container = new BaseDateTimeListBox();
      container.items = initItems;
      const el = await fixture(container);
      const itemsEl = el.querySelectorAll(
        ".kuc-base-datetime-listbox__listbox__item"
      );

      expect(itemsEl.length).to.equal(3);
      expect(itemsEl[0].getAttribute("value")).to.equal("0");
      expect(itemsEl[0].textContent?.trim()).to.equal("JANUARY");
      expect(itemsEl[1].getAttribute("value")).to.equal("1");
      expect(itemsEl[1].textContent?.trim()).to.equal("FEBRUARY");
      expect(itemsEl[2].getAttribute("value")).to.equal("2");
      expect(itemsEl[2].textContent?.trim()).to.equal("MARCH");
    });
  });
});
