import { expect, fixture } from "@open-wc/testing";
import { Checkbox } from "../index";

const initItems = [
  { label: "-----", value: "-----" },
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" }
];

describe("Checkbox", () => {
  describe("changeEvent", () => {
    it("should be triggered when input element triggered change event", async () => {
      const container = new Checkbox({
        items: initItems,
        value: [initItems[1].value],
        error: ""
      });
      container.addEventListener("change", (event: any) => {
        expect(event.detail.oldValue).to.deep.equal([initItems[1].value]);
        expect(event.detail.value).to.deep.equal([
          initItems[1].value,
          initItems[2].value
        ]);
        container.error = "changed";
      });

      const el = await fixture(container);
      const inputsEl = el.querySelectorAll(
        ".kuc-checkbox__group__select-menu__item__input"
      );
      expect(inputsEl.length).equal(3);
      inputsEl[2].dispatchEvent(new Event("change"));

      expect(container.error).to.equal("changed");
    });
  });
});
