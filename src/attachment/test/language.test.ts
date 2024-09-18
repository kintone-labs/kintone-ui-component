import { expect, fixture } from "@open-wc/testing";

import { Attachment } from "../index";

describe("Attachment", () => {
  describe("language", () => {
    it("should be using browser language when not assigned in constructor", async () => {
      const container = new Attachment();
      const el = await fixture(container);
      document.documentElement.setAttribute("lang", "en");
      const inputDateEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__text",
      ) as HTMLSpanElement;
      expect(inputDateEl.textContent).to.equal("Browse");
    });

    it("should be format ja language when assigned in constructor", async () => {
      const container = new Attachment({ language: "ja" });
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__text",
      ) as HTMLSpanElement;
      expect(inputDateEl.textContent).to.equal("参照");
    });

    it("should be change to zh language when assigned by setter", async () => {
      const container = new Attachment({ language: "en" });
      container.language = "zh";
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__text",
      ) as HTMLSpanElement;
      expect(inputDateEl.textContent).to.equal("选择文件");
    });
    it("should be change to zh-TW language when assigned by setter", async () => {
      const container = new Attachment({ language: "en" });
      container.language = "zh-TW";
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__text",
      ) as HTMLSpanElement;
      expect(inputDateEl.textContent).to.equal("選擇檔案");
    });
    it("should be change to es language when assigned by setter", async () => {
      const container = new Attachment({ language: "en" });
      container.language = "es";
      const el = await fixture(container);
      const inputDateEl = el.querySelector(
        ".kuc-attachment__group__files__browse-button__text",
      ) as HTMLSpanElement;
      expect(inputDateEl.textContent).to.equal("Examinar");
    });
  });
});
