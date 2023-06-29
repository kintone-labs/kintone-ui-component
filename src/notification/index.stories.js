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
  openButton.textContent = "OPEN";
  openButton.addEventListener("click", (event) => {
    notification.open();
  });
  const closeButton = document.createElement("button");
  closeButton.textContent = "CLOSE";
  closeButton.addEventListener("click", (event) => {
    notification.close();
  });

  const buttonFullScreen = document.createElement("button");
  buttonFullScreen.innerText = "full screen mode";
  buttonFullScreen.addEventListener("click", () => {
    document.getElementById("root").requestFullscreen();
  });

  const buttonSetRoot = document.createElement("button");
  buttonSetRoot.innerText = "Set Root element";
  buttonSetRoot.addEventListener("click", () => {
    notification.container = getRootElement();
  });

  const buttonSetBody = document.createElement("button");
  buttonSetBody.innerText = "Set Body element";
  buttonSetBody.addEventListener("click", () => {
    notification.container = getBodyElement();
  });

  const buttonSetUndefined = document.createElement("button");
  buttonSetUndefined.innerText = "Set undefined";
  buttonSetUndefined.addEventListener("click", () => {
    notification.container = undefined;
  });

  const buttonSetNull = document.createElement("button");
  buttonSetNull.innerText = "Set null";
  buttonSetNull.addEventListener("click", () => {
    notification.container = null;
  });

  const buttonSetNonExistELement = document.createElement("button");
  buttonSetNonExistELement.innerText = "Set non exist element";
  buttonSetNonExistELement.addEventListener("click", () => {
    notification.container = getNonExistElement();
  });

  const buttonInvalidValue = document.createElement("button");
  buttonInvalidValue.innerText = "Set invalid value";
  buttonInvalidValue.addEventListener("click", () => {
    notification.container = 12;
  });

  const buttonGetter = document.createElement("button");
  buttonGetter.innerText = "GETTER";
  buttonGetter.addEventListener("click", () => {
    console.log("container value:", notification.container);
  });

  root.appendChild(openButton);
  root.appendChild(closeButton);
  root.appendChild(buttonFullScreen);
  root.appendChild(buttonSetRoot);
  root.appendChild(buttonSetBody);
  root.appendChild(buttonSetUndefined);
  root.appendChild(buttonSetNull);
  root.appendChild(buttonSetNonExistELement);
  root.appendChild(buttonInvalidValue);
  root.appendChild(buttonGetter);

  return root;
};

const getNonExistElement = () => {
  return document.createElement("div");
};

const getBodyElement = () => {
  return document.body;
};

const getRootElement = () => {
  return document.getElementById("root");
};

export const BaseContainer = template.bind({});
BaseContainer.args = {
  id: "notification-id",
  text: "不正です!!",
  type: "info",
  container: getRootElement(),
};
export const BaseBody = template.bind({});
BaseBody.args = {
  id: "notification-id",
  text: "Duration 3 seconds",
  type: "info",
  duration: 3000,
};
