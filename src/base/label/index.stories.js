import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/label",
  argTypes: {
    className: { name: "className" },
    id: { name: "id" },
    value: { name: "value" },
    requiredIcon: { name: "requiredIcon" }
  },
  parameters: {
    actions: {
      handles: ["change"]
    }
  }
};
const Template = args => {
  return html`
    <kuc-base-label
      .className="${args.className}"
      .id="${args.id}"
      .value="${args.value}"
      .requiredIcon="${args.requiredIcon}"
    ></kuc-base-label>
  `;
};

export const Base = Template.bind({});
Base.args = {
  className: "baselabel-class",
  id: "baselabel-id",
  value: "Text label",
  requiredIcon: true
};
