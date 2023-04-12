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
  wrapper.style.marginTop = "50px";
  wrapper.style.marginLeft = "50px";

  const button1 = document.createElement("button");
  button1.innerText = "left";
  const button2 = document.createElement("button");
  button2.innerText = "top";
  const button3 = document.createElement("button");
  button3.innerText = "right";
  const button4 = document.createElement("button");
  button4.innerText = "bottom";

  const tooltip1 = new Tooltip({
    container: button1,
    title: "left",
    placement: "left",
  });
  const tooltip2 = new Tooltip({
    container: button2,
    title: "top",
    placement: "top",
  });
  const tooltip3 = new Tooltip({
    container: button3,
    title: "right",
    placement: "right",
  });
  const tooltip4 = new Tooltip({
    container: button4,
    title: "bottom",
    placement: "bottom",
  });

  wrapper.appendChild(tooltip1);
  wrapper.appendChild(tooltip2);
  wrapper.appendChild(tooltip3);
  wrapper.appendChild(tooltip4);
  return wrapper;
};

export const base = Template.bind({});
base.args = {
  container: "right",
  title: "right",
  placement: "right",
};
