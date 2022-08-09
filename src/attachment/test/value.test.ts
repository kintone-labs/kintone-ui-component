import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Attachment } from "../index";

const files = [
  { name: "file.txt", size: "150" },
  { name: "icon.jpg", size: "200" },
];
const invalidFileSizeFiles = [
  { name: "file.txt", size: "text" },
  { name: "icon.jpg", size: "200" },
];
describe("Attachment", () => {
  describe("value", () => {
    it("should be none checked items when not assinged on constructor", async () => {
      const container = new Attachment({ files: files });
      const el = await fixture(container);
      const lisEl = el.querySelectorAll(
        ".kuc-attachment__group__files__display-area__item__name"
      );
      expect(lisEl.length).to.equal(files.length);
      lisEl.forEach((liEl, index) => {
        expect((liEl as HTMLDivElement).innerText).to.equal(files[index].name);
      });
    });

    it("should be changed files when updated by setter", async () => {
      const container = new Attachment({
        files: files,
      });
      container.files = invalidFileSizeFiles;
      const el = await fixture(container);
      const lisEl = el.querySelectorAll(
        ".kuc-attachment__group__files__display-area__item__size"
      );
      expect(lisEl.length).to.equal(files.length);
      lisEl.forEach((liEl, index) => {
        if (index === 0) {
          expect((liEl as HTMLDivElement).innerText).to.equal("Nan size");
        } else {
          expect((liEl as HTMLDivElement).innerText).to.equal(
            `${files[index].size} bytes`
          );
        }
      });
    });
  });
});
