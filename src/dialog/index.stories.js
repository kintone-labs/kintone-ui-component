import { Dialog } from "./index.ts";
export default {
  title: "desktop/dialog",
  argTypes: {
    title: { name: "title" },
    content: { name: "content" },
    footer: { name: "footer" },
    icon: {
      name: "icon",
      control: {
        type: "select",
        options: ["success", "info", "error", "warning", "question"],
      },
    },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};
const template = (args) => {
  const dialog = new Dialog({ ...args });
  dialog.addEventListener("change", (event) => {
    console.log(event);
  });
  const root = document.createElement("div");
  const button = document.createElement("button");
  button.textContent = "open!!";
  button.addEventListener("click", (event) => {
    dialog.open();
  });
  const button2 = document.createElement("button");
  button2.textContent = "close!!";
  button2.addEventListener("click", (event) => {
    dialog.close();
  });

  root.appendChild(button);
  root.appendChild(button2);
  return root;
};
export const Base = template.bind({});
Base.args = {
  title: "Title",
  content: "Content with Icon",
  footer: "Footer",
  icon: "success",
};
