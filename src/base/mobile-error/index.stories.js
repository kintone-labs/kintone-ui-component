import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/mobile-error",
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro"
    }
  }
};

const Template = args => {
  return html`
    <kuc-base-mobile-error
      .guid="${args.guid}"
      .text="${args.text}"
    ></kuc-base-mobile-error>
  `;
};

export const Base = Template.bind({});
Base.args = {
  guid: "guid",
  text: "error occured!"
};
