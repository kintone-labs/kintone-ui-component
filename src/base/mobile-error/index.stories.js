import "./index.ts";
import { html } from "lit";

export default {
  title: "base/mobile-error",
  argTypes: {},
  globals: {
    viewport: {
      value: "iPhone11Pro",
      isRotated: false,
    },
  },
};

const Template = (args) => {
  return html`
    <kuc-base-mobile-error
      .ariaLive="${args.ariaLive}"
      .guid="${args.guid}"
      .text="${args.text}"
    ></kuc-base-mobile-error>
  `;
};

export const Base = Template.bind({});
Base.args = {
  ariaLive: "",
  guid: "guid",
  text: "error occured!",
};
