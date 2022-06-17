import { expect } from "@open-wc/testing";
import {
  validateProps,
  validateTimeValue,
  validateTimeStepNumber,
  validateTimeStep,
  validateItems,
  validateValueArray,
  validateValueString,
  validateSelectedIndexArray,
  validateSelectedIndexNumber,
  validateDateTimeValue
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
        b: 2
      });
    });

    it("should return all properties when all properties are valid", async () => {
      expect(validateProps({ a: 1, b: 2, c: 3 })).to.deep.equal({
        a: 1,
        b: 2,
        c: 3
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

    it("should be throw error when timeStep is not number", async () => {
      try {
        // @ts-expect-error
        validateTimeStepNumber(null);
      } catch (error) {
        let errorMessage = "";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'timeStep' property is not number");
      }
    });

    it("should be throw error when item is not array", async () => {
      try {
        // @ts-expect-error
        validateItems(null);
      } catch (error) {
        let errorMessage = "'items' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'items' property is not array");
      }
    });

    it("should be throw error when value is not array", async () => {
      try {
        // @ts-expect-error
        validateValueArray(null);
      } catch (error) {
        let errorMessage = "'value' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'value' property is not array");
      }
    });

    it("should be throw error when value is not string", async () => {
      try {
        // @ts-expect-error
        validateValueString(null);
      } catch (error) {
        let errorMessage = "'value' property is not string";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'value' property is not string");
      }
    });

    it("should be throw error when selectedIndex is not array", async () => {
      try {
        // @ts-expect-error
        validateSelectedIndexArray(null);
      } catch (error) {
        let errorMessage = "'selectedIndex' property is not array";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'selectedIndex' property is not array");
      }
    });

    it("should be throw error when selectedIndex is not number", async () => {
      try {
        // @ts-expect-error
        validateSelectedIndexNumber(null);
      } catch (error) {
        let errorMessage = "'selectedIndex' property is not number";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        expect(errorMessage).to.equal("'selectedIndex' property is not number");
      }
    });

    it("should be return true when parameter is valid", async () => {
      expect(validateDateTimeValue("2021-12-27", "12:12")).to.equal(true);
    });

    it("should be return false when parameter is invalid", async () => {
      expect(validateDateTimeValue("", "")).to.equal(false);
    });
  });
});
