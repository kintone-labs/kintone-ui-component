import { expect, fixture } from "@open-wc/testing";
import { MultiChoice } from "../index";

describe("MultiChoice", () => {
  describe("render", () => {
    it("should render successfully when initializing constructor without props", async () => {
      const container = new MultiChoice();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-MULTI-CHOICE");
    });
  });
});
