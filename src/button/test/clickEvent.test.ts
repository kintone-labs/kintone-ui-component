import { expect, fixture } from "@open-wc/testing";
import { Button } from "../index";

describe("Function onClick event run successfully", () => {
  const container = new Button({});
  container.addEventListener("click", (event: Event) => {
    container.text = "on click";
  });

  it("Function onClick event run successfully", async () => {
    const el = await fixture(container);
    const buttonEl = el.querySelector(
      ".kuc-button__button"
    ) as HTMLButtonElement;
    await buttonEl.click();
    expect(buttonEl.innerText).to.be.equal("on click");
  });
});

describe("Function onClick event not run successfully", () => {
  const container = new Button({
    text: "checkOnClick"
  });
  container.disabled = true;
  container.addEventListener("click", (event: Event) => {
    container.text = "on click";
  });

  it("Function onClick event not run successfully", async () => {
    const el = await fixture(container);
    const buttonEl = el.querySelector(
      ".kuc-button__button"
    ) as HTMLButtonElement;
    await buttonEl.click();
    expect(buttonEl.innerText).to.be.equal("checkOnClick");
  });
});
