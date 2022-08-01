import { expect } from "@open-wc/testing";
import {
  visiblePropConverter,
  dateValueConverter,
  timeValueConverter,
} from "../converter";

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

    it("should be return the first day of year when using dateValueConverter with string is year", async () => {
      expect(dateValueConverter("2021")).to.be.equal("2021-01-01");
    });

    it("should be return the first day of month when using dateValueConverter with string year-month", async () => {
      expect(dateValueConverter("2021-10")).to.be.equal("2021-10-01");
    });

    it("should be return empty when using timeValueConverter with parameter is empty", async () => {
      expect(timeValueConverter("")).to.be.equal("");
    });

    it("should be return time format when using timeValueConverter", async () => {
      expect(timeValueConverter("1:1")).to.be.equal("01:01");
    });
  });
});
