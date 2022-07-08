import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/mobile-label",
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
  },
};

const Template = (args) => {
  return html`
    <kuc-base-mobile-label
      .guid="${args.guid}"
      .text="${args.text}"
      .requiredIcon="${args.requiredIcon}"
    ></kuc-base-mobile-label>
  `;
};

export const Base = Template.bind({});
Base.args = {
  guid: "guid",
  text: "Text label",
  requiredIcon: true,
};
