import { BasePagination } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("base/base-pagination", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const basePagination = new BasePagination({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      isNext: true,
      isPrev: true,
    });
    root.appendChild(basePagination);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const basePagination = new BasePagination({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      isNext: true,
      isPrev: false,
    });
    root.appendChild(basePagination);
    return root;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const basePagination = new BasePagination({
      className: "sample-class",
      id: "sample-id",
      visible: true,
      isNext: false,
      isPrev: true,
    });
    root.appendChild(basePagination);
    return root;
  })
  .add("Document", () => {
    const root = document.createElement("div");
    const basePagination = new BasePagination({
      className: "sample-class",
      id: "sample-id",
      visible: true,
    });
    root.appendChild(basePagination);
    return root;
  });
