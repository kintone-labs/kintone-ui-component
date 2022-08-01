import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/label",
  argTypes: {},
};
const Template = (args) => {
  return html`
    <kuc-base-label
      .guid="${args.guid}"
      .text="${args.text}"
      .requiredIcon="${args.requiredIcon}"
    ></kuc-base-label>
  `;
};

export const Base = Template.bind({});
Base.args = {
  guid: "guid",
  text: "Text label",
  requiredIcon: true,
};
