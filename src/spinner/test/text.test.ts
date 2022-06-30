import { expect, fixture } from "@open-wc/testing";
import { Spinner } from "../index";

describe("Spinner", () => {
  describe("text", () => {
    it("should be 'now loading...' when not assigning on constructor", async () => {
      const container = new Spinner();
      container.open();
      const el = await fixture(container);
      const inputTextEl = el.querySelector(
        ".kuc-spinner__spinner__text"
      ) as HTMLSpanElement;
      expect(inputTextEl.innerText).to.equal("now loading…");
    });
  });

  it("should be 'display spinner' when assigning on constructor", async () => {
    const container = new Spinner({
      text: "display spinner",
    });
    container.open();
    const el = await fixture(container);
    const inputTextEl = el.querySelector(
      ".kuc-spinner__spinner__text"
    ) as HTMLSpanElement;
    expect(inputTextEl.innerText).to.equal("display spinner");
  });

  it("should be replaced by 'replace-text' when changed by setter", async () => {
    const container = new Spinner({
      text: "display spinner",
    });
    container.open();
    container.text = "replace-text";
    const el = await fixture(container);
    const replaceTextEl = el.querySelector(
      ".kuc-spinner__spinner__text"
    ) as HTMLSpanElement;
    expect(replaceTextEl.innerText).to.equal("replace-text");
  });
});
