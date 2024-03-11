import { Dialog } from "./index.ts";
export default {
  title: "desktop/dialog",
  argTypes: {
    title: { name: "title" },
    content: { name: "content" },
    footer: { name: "footer" },
    header: { name: "header" },
    icon: {
      name: "icon",
      options: ["success", "info", "error", "warning", "question"],
      control: {
        type: "select",
      },
    },
    footerVisible: { name: "footerVisible" },
  },
};

const template = (args) => {
  const dialog = new Dialog({ ...args });
  dialog.addEventListener("close", (event) => {
    console.log(event);
  });
  const root = document.createElement("div");

  const openButton = createButton("OPEN", () => {
    dialog.open();
  });
  const closeButton = createButton("CLOSE", () => {
    dialog.close();
  });
  const buttonFullScreen = createButton("full screen mode", () => {
    document.getElementById("root").requestFullscreen();
  });
  const buttonSetRoot = createButton("Set Root element", () => {
    dialog.container = rootElement;
  });
  const buttonSetBody = createButton("Set Body element", () => {
    dialog.container = bodyElement;
  });

  const buttonSetUndefined = createButton("Set undefined", () => {
    dialog.container = undefined;
  });

  const buttonSetNull = createButton("Set null", () => {
    dialog.container = null;
  });

  const buttonSetNonExistELement = createButton("Set non exist element", () => {
    dialog.container = nonExistElement;
  });

  const buttonInvalidValue = createButton("Set invalid value", () => {
    dialog.container = 12;
  });

  const buttonGetter = createButton("GETTER", () => {
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

const createButton = (text, onClick) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
};

const nonExistElement = document.createElement("div");
const bodyElement = document.body;
const rootElement = document.getElementById("root");

export const Base = template.bind({});
Base.args = {
  title: "Title",
  content: "Content with Icon",
  footer: "Footer",
  header: "<div>Header</div>",
  icon: "success",
  container: rootElement,
  footerVisible: true,
};
