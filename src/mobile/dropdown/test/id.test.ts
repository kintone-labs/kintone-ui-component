import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("id", () => {
    it("id default prop is null", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      expect(el.id).to.be.equal("");
    });

    it("id default prop set successfully", async () => {
      const container = new MobileDropdown({ id: "options-id" });
      const el = await fixture(container);
      expect(el.id).to.have.equal("options-id");
    });

    it("id prop replace successfully", async () => {
      const container = new MobileDropdown({
        id: "options-id"
      });
      container.id = "replace-id";
      const el = await fixture(container);
      expect(el.id).to.have.equal("replace-id");
    });

    it("id default prop set to null", async () => {
      // @ts-ignore
      const container = new MobileDropdown({ id: null });
      const el = await fixture(container);
      expect(el.id).to.be.equal("null");
    });

    it("id prop set to null", async () => {
      const container = new MobileDropdown({});
      // @ts-ignore
      container.id = null;
      const el = await fixture(container);
      expect(el.id).to.have.equal("null");
    });
  });
});
