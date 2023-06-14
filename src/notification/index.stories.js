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
    container: { name: "container" },
  },
};
const template = (args) => {
  const notification = new Notification({ ...args });
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

  const buttonFullScreen = document.createElement("button");
  buttonFullScreen.innerText = "full screen mode";
  buttonFullScreen.addEventListener("click", () => {
    document.getElementById("root").requestFullscreen();
  });

  root.appendChild(openButton);
  root.appendChild(closeButton);
  root.appendChild(buttonFullScreen);
  return root;
};
export const BaseContainer = template.bind({});
BaseContainer.args = {
  text: "不正です!!",
  type: "info",
  container: document.getElementById("root"),
};
export const BaseBody = template.bind({});
BaseBody.args = {
  text: "Duration 3 seconds",
  type: "info",
  duration: 3000,
};
