import { expect } from "@open-wc/testing";
import { validateProps } from "../validator";

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
  });
});
