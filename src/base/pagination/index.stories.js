import { BasePagination } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("base/base-pagination", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const basePagination = new BasePagination({
      className: "sample-class",
      id: "sample-id",
      visible: true,
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
