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
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "150px";
  wrapper.style.marginLeft = "100px";

  const tooltip = new Tooltip({
    container: args.container,
    title: args.title,
    placement: args.placement,
  });

  wrapper.appendChild(tooltip);

  return wrapper;
};

export const baseBottom = Template.bind({});
baseBottom.args = {
  container: "bottom",
  title: "bottom",
  placement: "bottom",
};

export const baseTop = Template.bind({});
baseTop.args = {
  container: "top",
  title: "top",
  placement: "top",
};

export const baseRight = Template.bind({});
baseRight.args = {
  container: "right",
  title: "right",
  placement: "right",
};

export const baseLeft = Template.bind({});
baseLeft.args = {
  container: "left",
  title: "left",
  placement: "left",
};
