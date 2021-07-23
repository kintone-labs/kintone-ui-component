import { expect, fixture } from "@open-wc/testing";
import { MobileMultiChoice } from "../index";

describe("MobileMultiChoice", () => {
  describe("id", () => {
    it("should be set to empty string when initializing without props option", async () => {
      const container = new MobileMultiChoice({});
      const el = await fixture(container);
      expect(el.id).to.be.equal("");
    });

    it('should be equal "options-id" string when initializing id with "options-id" value', async () => {
      const container = new MobileMultiChoice({ id: "options-id" });
      const el = await fixture(container);
      expect(el.id).to.have.equal("options-id");
    });

    it('should be replace by "replace-id" when changing by setter', async () => {
      const container = new MobileMultiChoice({
        id: "options-id"
      });
      container.id = "replace-id";
      const el = await fixture(container);
      expect(el.id).to.have.equal("replace-id");
    });
  });
});
