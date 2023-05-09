import { Button } from "../button/index.ts";

import { Tooltip } from "./index.ts";

export default {
  title: "desktop/tooltip",
  argTypes: {
    className: { name: "className" },
    id: { name: "id" },
    container: { name: "container" },
    title: { name: "title" },
    placement: {
      name: "placement",
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};

const getButtonContainer = (text) => {
  const div = document.createElement("div");
  const button = new Button({ text: text });
  div.appendChild(button);

  return div;
};

const Template = (args) => {
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "150px";
  wrapper.style.marginLeft = "100px";

  const tooltip = new Tooltip({
    className: args.className,
    id: args.id,
    container: args.container,
    title: args.title,
    placement: args.placement,
  });

  wrapper.appendChild(tooltip);

  return wrapper;
};

export const baseBottom = Template.bind({});
baseBottom.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  container: getButtonContainer("Bottom"),
  title: "bottom",
  placement: "bottom",
};

export const baseTop = Template.bind({});
baseTop.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  container: getButtonContainer("Top"),
  title: "top",
  placement: "top",
};

export const baseRight = Template.bind({});
baseRight.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  container: getButtonContainer("Right"),
  title: "right",
  placement: "right",
};

export const baseLeft = Template.bind({});
baseLeft.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  container: getButtonContainer("Left"),
  title: "left",
  placement: "left",
};

export const baseText = Template.bind({});
baseText.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  container: "normal string",
  title: "Tooltip",
  placement: "top",
};
