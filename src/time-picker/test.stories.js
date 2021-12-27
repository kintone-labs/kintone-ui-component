import { html } from "lit-html";
import "./index.ts";

export default {
  title: "desktop/test-time-picker",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["change"]
    }
  }
};

const items = [];
for (let i = 0; i < 100; i++) {
  items.push(i);
}

const Template = args =>
  html`
    ${items.map(item => {
      return html`
        <kuc-time-picker .value="${args.value}"></kuc-time-picker>
      `;
    })}
  `;

export const BaseTest = Template.bind({});
BaseTest.args = {
  value: "13:15"
};
