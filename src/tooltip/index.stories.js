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
  wrapper.style.marginTop = "50px";
  wrapper.style.marginLeft = "50px";
  wrapper.style.position = "relative";

  const elm1 =  document.createElement("div");
  elm1.style.position = "absolute";
  elm1.style.marginTop = "70px";

  const elm2 =  document.createElement("div");
  elm2.style.position = "absolute";
  elm2.style.marginLeft = "110px";

  const elm3 =  document.createElement("div");
  elm3.style.position = "absolute";
  elm3.style.marginLeft = "200px";
  elm3.style.marginTop = "70px";

  const elm4 =  document.createElement("div");
  elm4.style.position = "absolute";
  elm4.style.marginTop = "150px";
  elm4.style.marginLeft = "100px"

  const elm5 =  document.createElement("div");
  elm5.style.position = "absolute";
  elm5.style.marginTop = "250px";

  const button1 = document.createElement("button");
  button1.innerText = "left";

  const button2 = document.createElement("button");
  button2.innerText = "top";

  const button3 = document.createElement("button");
  button3.innerText = "right";

  const button4 = document.createElement("button");
  button4.innerText = "bottom";

  const img1 = document.createElement("img");
  img1.src = "https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/9/3/photo-1-16306417221131994914891.jpg";
  img1.width = "200";
  img1.height = "135";

  const imgInfo =  document.createElement("div");
  const imgName = document.createElement("div");
  imgName.innerText = "Doraemon is a Japanese manga series\n written by Fujiko F. Fujio";
  imgName.style.color =  "#04AA6D";
  imgName.style.fontSize = "13px";

  const imgContact = document.createElement("div");
  imgContact.style.color = "#ccc";
  imgContact.style.fontStyle = "italic";
  imgContact.innerText = "Contact: doraemon@gmail.com";
  imgContact.style.fontSize = "11px";
  imgInfo.appendChild(imgName);
  imgInfo.appendChild(imgContact);

  const tooltip1 = new Tooltip({
    content: button1,
    text: "left",
    placement: "left",
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
    text: "bottom",
    placement: "bottom",
  });

  const tooltip5 = new Tooltip({
    content: img1,
    text: imgInfo,
    placement: "bottom",
  });

  elm1.appendChild(tooltip1);
  elm2.appendChild(tooltip2);
  elm3.appendChild(tooltip3);
  elm4.appendChild(tooltip4);
  elm5.appendChild(tooltip5);

  wrapper.appendChild(elm1);
  wrapper.appendChild(elm2);
  wrapper.appendChild(elm3);
  wrapper.appendChild(elm4);
  wrapper.appendChild(elm5);

  return wrapper;
};

export const base = Template.bind({});
base.args = {
  content: "right",
  text: "right",
  placement: "right",
};
