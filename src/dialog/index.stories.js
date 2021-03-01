import { Dialog } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("dialog", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const dialog = new Dialog({
      title: "Title",
      content: `<div><p style="margin: 0;">Content</p><div>`,
      footer: ""
    });

    const button = document.createElement("button");
    button.textContent = "open!!";
    button.addEventListener("click", event => {
      dialog.open();
    });

    const button2 = document.createElement("button");
    button2.textContent = "close!!";
    button2.addEventListener("click", event => {
      dialog.close();
    });

    root.appendChild(button);
    root.appendChild(button2);

    return root;
  })
  .add("Base2", () => {
    return `
      <kuc-dialog opened></kuc-dialog>
    `;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const dialog = new Dialog({
      content: "<div>This is Content</div>"
    });
    dialog.open();
    return root;
  });
