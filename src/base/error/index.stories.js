import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/error",
  argTypes: {
    className: { name: "className" },
    id: { name: "id" },
    value: { name: "value" }
  },
  parameters: {
    actions: {
      handles: ["change"]
    }
  }
};
const Template = args => {
  return html`
    <kuc-base-error
      .className="${args.className}"
      .id="${args.id}"
      .value="${args.value}"
    ></kuc-base-error>
  `;
};

export const Base = Template.bind({});
Base.args = {
  className: "baseerror-class",
  id: "baseerror-id",
  value: "Error occured!"
};
