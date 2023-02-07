import { expect } from "@open-wc/testing";

import {
  validateArrayType,
  validateDateTimeValue,
  validateNumberType,
  validateProps,
  validateTimeStep,
  validateTimeValue,
  validateValueString,
} from "../validator";

describe("Base", () => {
  describe("Validator", () => {
    it('should be return {} when "props" is null', async () => {
      expect(validateProps(null)).to.deep.equal({});
    });

    it('should be return {} when "props" is not an object', async () => {
      expect(validateProps("test")).to.deep.equal({});
    });

    it("should remove undefined property", async () => {
      expect(validateProps({ a: 1, b: 2, c: undefined })).to.deep.equal({
        a: 1,
        b: 2,
      });
    });

    it("should return all properties when all properties are valid", async () => {
      expect(validateProps({ a: 1, b: 2, c: 3 })).to.deep.equal({
        a: 1,
        b: 2,
        c: 3,
      });
    });

    it("should be return true when using validateTimeValue with parameter valid", async () => {
      expect(validateTimeValue("19:30")).to.equal(true);
    });

    it("should be return false when using validateTimeValue with parameter invalid", async () => {
      expect(validateTimeValue("29:30")).to.equal(false);
    });

    it("should be return true when using validateTimeStep with parameter valid", async () => {
      expect(validateTimeStep(60, "20:00", "10:00")).to.equal(true);
    });

    it("should be return false when using validateTimeStep with parameter invalid", async () => {
      expect(validateTimeStep(360, "10:00", "9:00")).to.equal(false);
    });

    it("should be return false when assign value is not number", async () => {
      // @ts-expect-error
      expect(validateNumberType(null)).to.equal(false);
    });

    it("should be return false when assign value is not array", async () => {
      // @ts-expect-error
      expect(validateArrayType(null)).to.equal(false);
    });

    it("should be return false when assing value is not string", async () => {
      // @ts-expect-error
      expect(validateValueString(null)).to.equal(false);
    });

    it("should be return true when parameter is valid", async () => {
      expect(validateDateTimeValue("2021-12-27", "12:12")).to.equal(true);
    });

    it("should be return false when parameter is invalid", async () => {
      expect(validateDateTimeValue("", "")).to.equal(false);
    });
  });
});
