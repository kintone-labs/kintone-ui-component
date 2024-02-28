import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/pagination",
  argTypes: {
    pagePosition: { name: "pagePosition" },
    rowsPerPage: { name: "rowsPerPage" },
    total: { name: "total" },
    visible: { name: "visible" },
    isNext: { name: "isNext" },
    isPrev: { name: "isPrev" },
  },
  parameters: {
    actions: {
      handles: ["kuc:pagination-click-prev", "kuc:pagination-click-next"],
    },
  },
};

const Template = (args) => {
  return html`
    <kuc-base-pagination
      .pagePosition="${args.pagePosition}"
      .rowsPerPage="${args.rowsPerPage}"
      .total="${args.total}"
      .visible="${args.visible}"
      .isNext="${args.isNext}"
      .isPrev="${args.isPrev}"
    ></kuc-base-pagination>
  `;
};

export const Base = Template.bind({});
Base.args = {
  pagePosition: 1,
  rowsPerPage: 5,
  total: 7,
  visible: true,
  isPrev: true,
  isNext: true,
};
