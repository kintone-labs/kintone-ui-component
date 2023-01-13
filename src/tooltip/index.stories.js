import { html } from "lit";
import { Tooltip } from "./index.ts";

export default {
  title: "desktop/tooltip",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const Template = (args) => {
  const wrapper =  document.createElement("div")

  const tooltip = new Tooltip({ ...args });

  const tooltip1 = new Tooltip({
    content: 'bottom',
    text: 'bottom',
    placement: 'bottom'
  });

  // wrapper.appendChild(tooltip);
  wrapper.appendChild(tooltip1);

  return wrapper;
};

export const base = Template.bind({});
base.args = {
  content: 'right',
  text: 'right',
  placement: 'right'
};
