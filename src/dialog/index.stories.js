import { Dialog } from "./index.ts";
export default {
  title: "desktop/dialog",
  argTypes: {
    title: { name: "title" },
    content: { name: "content" },
    footer: { name: "footer" },
    icon: {
      name: "icon",
      options: ["success", "info", "error", "warning", "question"],
      control: {
        type: "select",
      },
    },
  },
};
const template = (args) => {
  const dialog = new Dialog({ ...args });
  dialog.addEventListener("close", (event) => {
    console.log(event);
  });
  const root = document.createElement("div");
  const openButton = document.createElement("button");
  openButton.textContent = "open!!";
  openButton.addEventListener("click", (event) => {
    dialog.open();
  });
  const closeButton = document.createElement("button");
  closeButton.textContent = "close!!";
  closeButton.addEventListener("click", (event) => {
    dialog.close();
  });

  const buttonFullScreen = document.createElement("button");
  buttonFullScreen.innerText = "full screen mode";
  buttonFullScreen.addEventListener("click", () => {
    document.getElementById("root").requestFullscreen();
  });

  const buttonSetRoot = document.createElement("button");
  buttonSetRoot.innerText = "Set Root element";
  buttonSetRoot.addEventListener("click", () => {
    dialog.container = getRootElement();
  });

  const buttonSetBody = document.createElement("button");
  buttonSetBody.innerText = "Set Body element";
  buttonSetBody.addEventListener("click", () => {
    dialog.container = getBodyElement();
  });

  const buttonSetUndefined = document.createElement("button");
  buttonSetUndefined.innerText = "Set undefined";
  buttonSetUndefined.addEventListener("click", () => {
    dialog.container = undefined;
  });

  const buttonSetNull = document.createElement("button");
  buttonSetNull.innerText = "Set null";
  buttonSetNull.addEventListener("click", () => {
    dialog.container = null;
  });

  const buttonSetNonExistELement = document.createElement("button");
  buttonSetNonExistELement.innerText = "Set non exist element";
  buttonSetNonExistELement.addEventListener("click", () => {
    dialog.container = getNonExistElement();
  });

  const buttonInvalidValue = document.createElement("button");
  buttonInvalidValue.innerText = "Set invalid value";
  buttonInvalidValue.addEventListener("click", () => {
    dialog.container = 12;
  });

  const buttonGetter = document.createElement("button");
  buttonGetter.innerText = "GETTER";
  buttonGetter.addEventListener("click", () => {
    console.log("container value:", dialog.container);
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

export const Base = template.bind({});
Base.args = {
  title: "Title",
  content: "Content with Icon",
  footer: "Footer",
  icon: "success",
  container: getRootElement(),
};
