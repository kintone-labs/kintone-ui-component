import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/pagination",
  argTypes: {},
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
      .class="${args.className}"
      .visible="${args.visible}"
      .isPrev="${args.isPrev}"
      .isNext="${args.isNext}"
    >
    </kuc-base-pagination>
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
