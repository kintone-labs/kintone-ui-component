import { expect } from "@open-wc/testing";

import { createContextElm, getWidthElmByContext } from "../context";

describe("Context", () => {
  describe("createContextElm", () => {
    it("should return a context element", async () => {
      const elm = document.createElement("div");
      elm.style.fontFamily =
        'メイリオ, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif';
      document.body.appendChild(elm);
      expect(createContextElm(elm).style.fontFamily).to.equal(
        'メイリオ, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif'
      );
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
