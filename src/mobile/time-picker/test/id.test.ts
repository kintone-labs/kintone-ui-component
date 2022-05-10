import { elementUpdated, expect, fixture } from "@open-wc/testing";
import { MobileTimePicker } from "../index";

describe("MobileTimePicker", () => {
  describe("id", () => {
    it('should be "" when not assigning on constructor', async () => {
      const container = new MobileTimePicker({});

      const el = await fixture(container);
      expect(el.id).to.equal("");
    });

    it('should be "options-id" when assigning on constructor', async () => {
      const container = new MobileTimePicker({ id: "options-id" });

      const el = await fixture(container);
      expect(el.id).to.equal("options-id");
    });

    it('should be replaced to "replace-id" after changing by setter', async () => {
      const container = new MobileTimePicker({ id: "options-id" });

      const el = await fixture(container);
      container.id = "replace-id";
      await elementUpdated(el);

      expect(el.id).to.equal("replace-id");
    });
  });
});
