import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/calendar"
};

const Template = () => {
  return html`
    <style>
      #root-inner {
        position: relative;
      }
      kuc-base-datetime-calendar {
        position: absolute;
        top: 24px;
        left: 0px;
      }
    </style>
    <input typ="text" />
    <kuc-base-datetime-calendar></kuc-base-datetime-calendar>
  `;
};

export const base = Template.bind({});
base.args = {};
