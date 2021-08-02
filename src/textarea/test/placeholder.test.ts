import { expect, fixture } from "@open-wc/testing";
import { TextArea } from "../index";

describe("Textarea", () => {
  describe("placeholder", () => {
    it("confirm placeholder default prop is null", async () => {
      const container = new TextArea();
      const el = await fixture(container);
      const textAreaEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(textAreaEl.getAttribute("placeholder")).to.equal("");
    });
    it("placeholder constructor set successfully'", async () => {
      const container = new TextArea({ placeholder: "Fruit" });
      const el = await fixture(container);
      const textAreaEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(textAreaEl.getAttribute("placeholder")).to.equal("Fruit");
    });
    it("placeholder prop set successfully'", async () => {
      const container = new TextArea();
      container.placeholder = "Fruit";
      const el = await fixture(container);
      const textAreaEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(textAreaEl.getAttribute("placeholder")).to.equal("Fruit");
    });
    it("placeholder prop replace successfully'", async () => {
      const container = new TextArea({ placeholder: "Fruit" });
      container.placeholder = "Food";
      const el = await fixture(container);
      const textAreaEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(textAreaEl.getAttribute("placeholder")).to.equal("Food");
    });
    it("placeholder default prop set to null successfully'", async () => {
      const container = new TextArea({ placeholder: null as any });
      const el = await fixture(container);
      const textAreaEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(textAreaEl.getAttribute("placeholder")).to.equal("null");
    });
    it("placeholder prop set to null successfully'", async () => {
      const container = new TextArea();
      (container.placeholder as any) = null;
      const el = await fixture(container);
      const textAreaEl = el.querySelector(
        ".kuc-textarea__group__textarea"
      ) as HTMLTextAreaElement;
      expect(textAreaEl.getAttribute("placeholder")).to.equal("null");
    });
  });
});
