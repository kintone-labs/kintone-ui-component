import { expect, fixture } from "@open-wc/testing";

import { UserOrgGroupSelect } from "../index";

describe("UserOrgGroupSelect", () => {
  describe("className", () => {
    it("should be empty when not assigning on constructor", async () => {
      const container = new UserOrgGroupSelect({});

      const el = await fixture(container);
      expect(el.className).to.equal("");
    });
    it('should be "options-classname" when assigning on constructor', async () => {
      const container = new UserOrgGroupSelect({
        className: "options-classname",
      });
      const el = await fixture(container);
      expect(el.className).to.equal("options-classname");
    });
    it('should be replaced to "replace-classname" after changing by setter', async () => {
      const container = new UserOrgGroupSelect({
        className: "options-classname",
      });
      const el = await fixture(container);
      container.className = "replace-classname";
      expect(el.className).to.equal("replace-classname");
    });
  });
});
