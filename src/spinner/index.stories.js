import { Spinner } from "./index.ts";

export default {
  title: "desktop/spinner",
  argTypes: {
    text: { name: "text" },
  },
  container: { name: "container" },
};

const template = (args) => {
  const spinner = new Spinner({ ...args });

  const root = document.createElement("div");

  const openButton = createButton("OPEN", () => {
    spinner.open();
  });
  const closeButton = createButton("CLOSE", () => {
    spinner.close();
  });

  const fullScreenButton = createButton("Fullscreen Mode", () => {
    document.getElementById("root").requestFullscreen();
  });

  const setRootButton = createButton("Set Root element", () => {
    spinner.container = document.getElementById("root");
  });

  const setBodyButton = createButton("Set Body element", () => {
    spinner.container = document.body;
  });

  const setUndefinedButton = createButton("Set undefined", () => {
    spinner.container = undefined;
  });

  const setNullButton = createButton("Set null", () => {
    spinner.container = null;
  });

  const setNonexistentELementButton = createButton(
    "Set nonexistent element",
    () => {
      spinner.container = document.createElement("div");
    },
  );

  const setInvalidValueButton = createButton("Set invalid value", () => {
    spinner.container = 12;
  });

  const getterButton = createButton("GETTER", () => {
    console.log("container value:", spinner.container);
  });

  const buttonDiv = document.createElement("div");
  buttonDiv.style.cssText = `z-index:10010; position: fixed;`;
  buttonDiv.appendChild(openButton);
  buttonDiv.appendChild(closeButton);
  buttonDiv.appendChild(fullScreenButton);
  buttonDiv.appendChild(setRootButton);
  buttonDiv.appendChild(setBodyButton);
  buttonDiv.appendChild(setUndefinedButton);
  buttonDiv.appendChild(setNullButton);
  buttonDiv.appendChild(setNonexistentELementButton);
  buttonDiv.appendChild(setInvalidValueButton);
  buttonDiv.appendChild(getterButton);
  root.appendChild(buttonDiv);
  return root;
};

const createButton = (text, onClick) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
};

export const Base = template.bind({});
Base.args = { text: "now loading...", container: undefined };
