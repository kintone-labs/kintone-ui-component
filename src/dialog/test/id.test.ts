import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("id", () => {
    it('should be "" when not assigning on constructor', async () => {
      const container = new Dialog({});
      container.open();
      await elementUpdated(container);

      const el = await fixture(container);
      await expect(el.id).to.equal("");
    });

    it('should be "options-id" when assigning on constructor', async () => {
      const container = new Dialog({ id: "options-id" });
      container.open();
      await elementUpdated(container);

      const el = await fixture(container);
      await expect(el.id).to.equal("options-id");
    });

    it('should be replaced to "replace-id" after changing by setter', async () => {
      const container = new Dialog({ id: "options-id" });
      container.open();
      await elementUpdated(container);

      container.id = "replace-id";
      const el = await fixture(container);
      await expect(el.id).to.equal("replace-id");
    });
  });
});
