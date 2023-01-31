import { expect, fixture } from "@open-wc/testing";

import { Combobox } from "../index";

describe("Combobox", () => {
  describe("render", () => {
    it("should render successfully when initializing constructor without props", async () => {
      const container = new Combobox();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-COMBOBOX");
    });
  });
});
