import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/error",
  argTypes: {},
};
const Template = (args) => {
  return html`
    <kuc-base-error
      .ariaLive="${args.ariaLive}"
      .guid="${args.guid}"
      .text="${args.value}"
    ></kuc-base-error>
  `;
};

export const Base = Template.bind({});
Base.args = {
  ariaLive: "",
  guid: "baseerror-id",
  value: "Error occured!",
};
