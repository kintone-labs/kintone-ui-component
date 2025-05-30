import { Notification } from "./index.ts";

export default {
  title: "desktop/notification",
  argTypes: {
    text: { name: "text" },
    content: { name: "content" },
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

  const openButton = createButton("OPEN", () => {
    notification.open();
  });
  const closeButton = createButton("CLOSE", () => {
    notification.close();
  });
  const buttonFullScreen = createButton("full screen mode", () => {
    document.getElementById("storybook-root").requestFullscreen();
  });
  const buttonSetRoot = createButton("Set Root element", () => {
    notification.container = getRootElement();
  });
  const buttonSetBody = createButton("Set Body element", () => {
    notification.container = getBodyElement();
  });

  const buttonSetUndefined = createButton("Set undefined", () => {
    notification.container = undefined;
  });

  const buttonSetNull = createButton("Set null", () => {
    notification.container = null;
  });

  const buttonSetNonExistELement = createButton("Set non exist element", () => {
    notification.container = getNonExistElement();
  });

  const buttonInvalidValue = createButton("Set invalid value", () => {
    notification.container = 12;
  });

  const buttonGetter = createButton("GETTER", () => {
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

const createButton = (text, onClick) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
};

const getNonExistElement = () => {
  return document.createElement("div");
};

const getBodyElement = () => {
  return document.body;
};

const getRootElement = () => {
  return document.getElementById("storybook-root");
};

export const BaseContainer = template.bind({});
BaseContainer.args = {
  id: "notification-id",
  text: "不正です!!",
  content:
    'Error occurred!<br>Please click on the <a href="#">link</a> for details.',
  type: "info",
  container: undefined,
};
export const BaseBody = template.bind({});
BaseBody.args = {
  id: "notification-id",
  text: "Duration 3 seconds",
  type: "info",
  duration: 3000,
};
