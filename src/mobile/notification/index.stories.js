import { MobileNotification } from "./index.ts";

export default {
  title: "mobile/notification",
  argTypes: {
    text: { name: "text" },
    duration: { name: "duration" },
  },
};
const template = (args) => {
  const notification = new MobileNotification({ ...args });
  notification.addEventListener("close", (event) => {
    console.log(event);
  });
  const root = document.createElement("div");
  const openButton = document.createElement("button");
  openButton.textContent = "open";
  openButton.addEventListener("click", (event) => {
    notification.open();
  });
  const closeButton = document.createElement("button");
  closeButton.textContent = "close";
  closeButton.addEventListener("click", (event) => {
    notification.close();
  });

  root.appendChild(openButton);
  root.appendChild(closeButton);
  return root;
};
export const Base = template.bind({});
Base.args = {
  text: "不正です!!",
};
export const Base1 = template.bind({});
Base1.args = {
  text: "Duration 3 seconds",
  duration: 3000,
};
