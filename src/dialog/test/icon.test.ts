import { elementUpdated, expect } from "@open-wc/testing";

import { Dialog } from "../index";

describe("Dialog", () => {
  describe("icon", () => {
    it('should be "" when not assigning on constructor', async () => {
      const container = new Dialog();
      container.open();
      await elementUpdated(container);

      const iconEl = container.querySelector(
        ".kuc-dialog__dialog__content__icon"
      ) as HTMLDivElement;
      expect(iconEl.childElementCount).to.equal(0);
      expect(iconEl.textContent?.trim()).to.equal("");
    });

    it('should be "info" when assigning by setter', async () => {
      const container = new Dialog();
      container.open();

      container.icon = "info";
      await elementUpdated(container);

      const iconEl = container.querySelector(
        ".kuc-dialog__dialog__content__icon"
      ) as HTMLDivElement;
      expect(iconEl.firstElementChild!.classList[0]).to.equal(
        "kuc-dialog__dialog__content__icon-info"
      );
    });

    it('should be "success" when assigning by setter', async () => {
      const container = new Dialog();
      container.open();

      container.icon = "success";
      await elementUpdated(container);

      const iconEl = container.querySelector(
        ".kuc-dialog__dialog__content__icon"
      ) as HTMLDivElement;
      expect(iconEl.firstElementChild!.classList[0]).to.equal(
        "kuc-dialog__dialog__content__icon-success"
      );
    });

    it('should be "error" when assigning by setter', async () => {
      const container = new Dialog();
      container.open();

      container.icon = "error";
      await elementUpdated(container);

      const iconEl = container.querySelector(
        ".kuc-dialog__dialog__content__icon"
      ) as HTMLDivElement;
      expect(iconEl.firstElementChild!.classList[0]).to.equal(
        "kuc-dialog__dialog__content__icon-error"
      );
    });

    it('should be "warning" when assigning by setter', async () => {
      const container = new Dialog();
      container.open();

      container.icon = "warning";
      await elementUpdated(container);

      const iconEl = container.querySelector(
        ".kuc-dialog__dialog__content__icon"
      ) as HTMLDivElement;
      expect(iconEl.firstElementChild!.classList[0]).to.equal(
        "kuc-dialog__dialog__content__icon-warning"
      );
    });

    it('should be "question" when assigning by setter', async () => {
      const container = new Dialog();
      container.open();

      container.icon = "question";
      await elementUpdated(container);

      const iconEl = container.querySelector(
        ".kuc-dialog__dialog__content__icon"
      ) as HTMLDivElement;
      expect(iconEl.firstElementChild!.classList[0]).to.equal(
        "kuc-dialog__dialog__content__icon-question"
      );
    });

    it('should be "" when assigning invalid value by setter', async () => {
      const container = new Dialog();
      container.open();

      // @ts-ignore
      container.icon = "hoge";
      await elementUpdated(container);

      const iconEl = container.querySelector(
        ".kuc-dialog__dialog__content__icon"
      ) as HTMLDivElement;
      expect(iconEl.childElementCount).to.equal(0);
      expect(iconEl.textContent?.trim()).to.equal("");
    });
  });
});
