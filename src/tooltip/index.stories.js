import { Tooltip } from "./index.ts";

export default {
  title: "desktop/tooltip",
  argTypes: {
    className: { name: "className" },
    id: { name: "id" },
    placement: {
      name: "placement",
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select",
      },
    },
    title: { name: "title" },
    container: { name: "container" },
    describeChild: { name: "describeChild", type: "boolean" },
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
    placement: args.placement,
    title: args.title,
    container: args.container,
    describeChild: args.describeChild,
  });

  wrapper.appendChild(tooltip);

  return wrapper;
};

export const baseBottom = Template.bind({});
baseBottom.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  placement: "bottom",
  title: "Does not add if it already exists.",
  container: getButtonContainer("Bottom"),
  describeChild: false,
};

export const baseTop = Template.bind({});
baseTop.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  placement: "top",
  title: "top",
  container: getButtonContainer("Top"),
  describeChild: false,
};

export const baseRight = Template.bind({});
baseRight.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  placement: "right",
  title: "right",
  container: getButtonContainer("Right"),
  describeChild: false,
};

export const baseLeft = Template.bind({});
baseLeft.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  placement: "left",
  title: "left",
  container: getButtonContainer("Left"),
  describeChild: false,
};

export const baseString = Template.bind({});
baseString.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  placement: "top",
  title: "Tooltip",
  container: "normal string",
  describeChild: false,
};
