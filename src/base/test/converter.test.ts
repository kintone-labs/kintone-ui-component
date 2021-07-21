import { expect } from "@open-wc/testing";
import { visiblePropConverter } from "../converter";

describe("Base", () => {
  describe("Converter", () => {
    it("should be return false when setting attribute is empty", async () => {
      expect(visiblePropConverter.fromAttribute("")).to.be.equal(false);
    });

    it("should be return true when setting attribute is null", async () => {
      expect(visiblePropConverter.fromAttribute(null)).to.be.equal(true);
    });

    it("should be return '' when converting with parameter is false", async () => {
      expect(visiblePropConverter.toAttribute(false)).to.be.equal("");
    });

    it("should be return null when converting with parameter is true", async () => {
      expect(visiblePropConverter.toAttribute(true)).to.be.equal(null);
    });
  });
});
