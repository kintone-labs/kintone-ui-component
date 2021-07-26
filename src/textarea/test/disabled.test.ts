import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("TextArea", () => {
  describe("disabled", () => {
    it("should be not added into element when not assigned in constructor", async () => {
      const container = new TextArea();
      const el = await fixture(container);
      const textareaEl = el.querySelector(".kuc-textarea__group__textarea");
      expect(textareaEl).to.not.have.attr("disabled");
    });

    it("should be added into element when assigned true in constructor", async () => {
      const container = new TextArea({ disabled: true });
      const el = await fixture(container);
      const textareaEl = el.querySelector(".kuc-textarea__group__textarea");
      expect(textareaEl).to.have.attr("disabled");
    });

    it("should be added into element when changed to true by setter", async () => {
      const container = new TextArea({ disabled: false });
      container.disabled = true;
      const el = await fixture(container);
      const textareaEl = el.querySelector(".kuc-textarea__group__textarea");
      expect(textareaEl).to.have.attr("disabled");
    });

    it("should be not added into element when changed to false by setter", async () => {
      const container = new TextArea({ disabled: true });
      container.disabled = false;
      const el = await fixture(container);
      const textareaEl = el.querySelector(".kuc-textarea__group__textarea");
      expect(textareaEl).to.not.have.attr("disabled");
    });
  });
});
