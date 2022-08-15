import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/pagination",
  argTypes: {
    id: { name: "id" },
    className: { name: "className" },
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
      .id="${args.id}"
      .className="${args.className}"
      .visible="${args.visible}"
      .isNext="${args.isNext}"
      .isPrev="${args.isPrev}"
    ></kuc-base-pagination>
  `;
};

export const Base = Template.bind({});
Base.args = {
  id: "sample-id",
  className: "sample-class",
  visible: true,
  isPrev: true,
  isNext: true,
};
