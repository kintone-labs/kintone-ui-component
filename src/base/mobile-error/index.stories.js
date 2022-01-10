import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/error/mobile",
  argTypes: {},
  parameters: {
    viewport: {
      defaultViewport: "iPhone11Pro"
    }
  }
};

const Template = args => {
  return html`
    <kuc-mobile-base-error
      .guid="${args.guid}"
      .text="${args.text}"
    ></kuc-mobile-base-error>
  `;
};

export const Base = Template.bind({});
Base.args = {
  guid: "guid",
  text: "error occured!"
};
