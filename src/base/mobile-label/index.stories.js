import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/label/mobile",
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro"
    }
  }
};

const Template = args => {
  return html`
    <kuc-mobile-base-label
      .guid="${args.guid}"
      .text="${args.text}"
      .requiredIcon="${args.requiredIcon}"
    ></kuc-mobile-base-label>
  `;
};

export const Base = Template.bind({});
Base.args = {
  guid: "guid",
  text: "Text label",
  requiredIcon: true
};
