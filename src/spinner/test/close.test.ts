import { expect, fixture, elementUpdated } from "@open-wc/testing";
import { Spinner } from "../index";

describe("Render successfully with close method", () => {
  const container = new Spinner({
    text: "close-spinner"
  });
  container.open();
  it('have "kuc-spinner"', async () => {
    const el = await fixture(container);
    const beforeEl = el.querySelector(
      ".kuc-spinner__spinner__text"
    ) as HTMLDivElement;
    expect(beforeEl.innerText).to.be.equal("close-spinner");
    container.close();
    await elementUpdated(el);
    const bodyEl = document.querySelector("body");
    const afterEl = bodyEl!.querySelectorAll(".kuc-spinner__spinner__text");
    afterEl.forEach(elem => {
      expect(elem.textContent!.trim()).not.to.be.equal("close-spinner");
    });
  });
});
