import { expect, fixture } from "@open-wc/testing";

import { UserOrgGroupSelect } from "../index";

describe("UserOrgGroupSelect", () => {
  describe("render", () => {
    it("should render successfully when initializing constructor without props", async () => {
      const container = new UserOrgGroupSelect();
      const el = await fixture(container);
      expect(el.tagName).to.equal("KUC-USER-ORG-GROUP-SELECT");
    });
  });
});
