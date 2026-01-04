import { expect, fixture } from "@open-wc/testing";

import { Switch } from "../index";

describe("Switch", () => {
  describe("unCheckedText", () => {
    it("should be display in left when not assigned in constructor", async () => {
      const container = new Switch();
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-switch__group") as HTMLDivElement;
      expect(groupEl.classList.contains("kuc-switch__group--left")).to.equal(
        true,
      );
    });

    it("should be display in left when assigning invalid value on constructor", async () => {
      const container = new Switch({ labelPlacement: "lll" });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-switch__group") as HTMLDivElement;
      expect(groupEl.classList.contains("kuc-switch__group--left")).to.equal(
        true,
      );
    });

    it("should be display in left when assigning 'left' on constructor", async () => {
      const container = new Switch({ labelPlacement: "left" });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-switch__group") as HTMLDivElement;
      expect(groupEl.classList.contains("kuc-switch__group--left")).to.equal(
        true,
      );
    });

    it("should be display in top when assigning 'top' on constructor", async () => {
      const container = new Switch({ labelPlacement: "top" });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-switch__group") as HTMLDivElement;
      expect(groupEl.classList.contains("kuc-switch__group--top")).to.equal(
        true,
      );
    });

    it("should be display in bottom when assigning 'bottom' on constructor", async () => {
      const container = new Switch({ labelPlacement: "bottom" });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-switch__group") as HTMLDivElement;
      expect(groupEl.classList.contains("kuc-switch__group--bottom")).to.equal(
        true,
      );
    });

    it("should be display in right when assigning 'right' on constructor", async () => {
      const container = new Switch({ labelPlacement: "right" });
      const el = await fixture(container);

      const groupEl = el.querySelector(".kuc-switch__group") as HTMLDivElement;
      expect(groupEl.classList.contains("kuc-switch__group--right")).to.equal(
        true,
      );
    });
  });
});
