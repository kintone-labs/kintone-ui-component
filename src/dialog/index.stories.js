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

  root.appendChild(openButton);
  root.appendChild(closeButton);
  return root;
};
export const Base = template.bind({});
Base.args = {
  title: "Title",
  content: "Content with Icon",
  footer: "Footer",
  icon: "success",
};
