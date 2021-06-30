import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("id", () => {
    it("It should be set to empty string when initializing without props option", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      expect(el.id).to.be.equal("");
    });

    it('It should be equal "options-id" string when initializing id with "options-id" value', async () => {
      const container = new MobileDropdown({ id: "options-id" });
      const el = await fixture(container);
      expect(el.id).to.have.equal("options-id");
    });

    it('It should be replace by "replace-id" when changing by setter', async () => {
      const container = new MobileDropdown({
        id: "options-id"
      });
      container.id = "replace-id";
      const el = await fixture(container);
      expect(el.id).to.have.equal("replace-id");
    });

    it('It should be equal "null" string when initializing id with null value', async () => {
      // @ts-ignore
      const container = new MobileDropdown({ id: null });
      const el = await fixture(container);
      expect(el.id).to.be.equal("null");
    });

    it('It should be replace by "null" when changing by setter', async () => {
      const container = new MobileDropdown({});
      // @ts-ignore
      container.id = null;
      const el = await fixture(container);
      expect(el.id).to.have.equal("null");
    });
  });
});
