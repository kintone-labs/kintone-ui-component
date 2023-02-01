import { html } from "lit";
import { Tooltip } from "./index.ts";
import { createStyleOnHeader } from "../base/kuc-base.ts";

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
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "200px";
  wrapper.style.marginLeft = "200px";

  const button1 = document.createElement("button");
  button1.innerText = "bottom";

  const button2 = document.createElement("button");
  button2.innerText = "top";

  const button3 = document.createElement("button");
  button3.innerText = "right";

  const button4 = document.createElement("button");
  button4.innerText = "left";

  const tooltip1 = new Tooltip({
    content: button1,
    text: "bottom",
    placement: "bottom",
  });

  const tooltip2 = new Tooltip({
    content: button2,
    text: "top",
    placement: "top",
  });

  const tooltip3 = new Tooltip({
    content: button3,
    text: "right",
    placement: "right",
  });

  const tooltip4 = new Tooltip({
    content: button4,
    text: "left",
    placement: "left",
  });

  wrapper.appendChild(tooltip1);
  wrapper.appendChild(tooltip2);
  wrapper.appendChild(tooltip3);
  wrapper.appendChild(tooltip4);

  return wrapper;
};

export const base = Template.bind({});
base.args = {
  content: "right",
  text: "right",
  placement: "right",
};
