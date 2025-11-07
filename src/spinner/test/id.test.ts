import { elementUpdated, expect, fixture } from "@open-wc/testing";

import { Spinner } from "../index";

describe("Spinner", () => {
  describe("id", () => {
    it('should be "" when not assigning on constructor', async () => {
      const container = new Spinner({});
      container.open();
      await elementUpdated(container);

      const el = await fixture(container);
      await expect(el.id).to.equal("");
    });

    it('should be "options-id" when assigning on constructor', async () => {
      const container = new Spinner({ id: "options-id" });
      container.open();
      await elementUpdated(container);

      const el = await fixture(container);
      await expect(el.id).to.equal("options-id");
    });

    it('should be replaced to "replace-id" after changing by setter', async () => {
      const container = new Spinner({ id: "options-id" });
      container.open();
      await elementUpdated(container);

      container.id = "replace-id";
      const el = await fixture(container);
      await expect(el.id).to.equal("replace-id");
    });
  });
});
