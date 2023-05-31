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
  const buttonEl = document.createElement("button");
  buttonEl.innerText = text;

  return buttonEl;
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
    describeChild: args.describeChild,
  });

  wrapper.appendChild(tooltip);

  return wrapper;
};

export const baseBottom = Template.bind({});
baseBottom.args = {
  className: "tooltip-class",
  describeChild: true,
  id: "tooltip-id",
  container: getButtonContainer("Bottom"),
  title: "Does not add if it already exists.",
  placement: "bottom",
};

export const baseTop = Template.bind({});
baseTop.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  describeChild: true,
  container: getButtonContainer("Top"),
  title: "top",
  placement: "top",
};

export const baseRight = Template.bind({});
baseRight.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  describeChild: true,
  container: getButtonContainer("Right"),
  title: "right",
  placement: "right",
};

export const baseLeft = Template.bind({});
baseLeft.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  describeChild: true,
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
