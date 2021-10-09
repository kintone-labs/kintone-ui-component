import { expect } from "@open-wc/testing";
import { getWidthElmByContext, createContextElm } from "../context";

describe("Context", () => {
  describe("createContextElm", () => {
    it("should return a context element", async () => {
      const elm = document.createElement("div");
      elm.style.fontSize = "14px";
      document.body.appendChild(elm);
      expect(createContextElm(elm).style.fontSize).to.equal("14px");
    });
  });

  describe("getWidthElmByContext", () => {
    it("should get the width by context", async () => {
      const elm = document.createElement("div");
      elm.style.width = "100px";
      document.body.appendChild(elm);
      expect(getWidthElmByContext(elm)).to.equal(100);
    });
  });
});
