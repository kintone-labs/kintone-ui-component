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
  container: "bottom",
  title: "bottom",
  placement: "bottom",
};

export const baseTop = Template.bind({});
baseTop.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  container: "top",
  title: "top",
  placement: "top",
};

export const baseRight = Template.bind({});
baseRight.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  container: "right",
  title: "right",
  placement: "right",
};

export const baseLeft = Template.bind({});
baseLeft.args = {
  className: "tooltip-class",
  id: "tooltip-id",
  container: "left",
  title: "left",
  placement: "left",
};
