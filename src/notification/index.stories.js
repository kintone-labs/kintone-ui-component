import { Notification } from "./index.ts";

export default {
  title: "desktop/notification",
  argTypes: {
    text: { name: "text" },
    duration: { name: "duration" },
    type: {
      name: "type",
      options: ["success", "info", "danger"],
      control: {
        type: "select",
      },
    },
  },
};
const template = (args) => {
  const notification = new Notification({ ...args });
  notification.addEventListener("close", (event) => {
    console.log(event);
  });
  const root = document.createElement("div");
  const button = document.createElement("button");
  button.textContent = "open";
  button.addEventListener("click", (event) => {
    notification.open();
  });
  const button2 = document.createElement("button");
  button2.textContent = "close";
  button2.addEventListener("click", (event) => {
    notification.close();
  });

  root.appendChild(button);
  root.appendChild(button2);
  return root;
};
export const Base = template.bind({});
Base.args = {
  text: "不正です!!",
  type: "info",
};
export const Base1 = template.bind({});
Base1.args = {
  text: "Duration 3 seconds",
  type: "info",
  duration: 3000,
};
