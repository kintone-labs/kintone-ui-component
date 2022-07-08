import { Dialog } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/dialog", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const dialog = new Dialog({
      title: "Title",
      content: `<div><p style="margin: 0;">Content</p></div>`,
      footer: "",
    });
    dialog.addEventListener("close", (event) => {
      console.log(event);
    });

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
  })
  .add("Base2", () => {
    return `
      <kuc-dialog opened></kuc-dialog>
    `;
  })
  .add("Base3", () => {
    const root = document.createElement("div");
    const props = {
      title: "Title",
      content: "Content with Icon",
      footer: "Footer",
    };

    const dialog10 = new Dialog({
      ...props,
      icon: "success",
    });
    const button10 = document.createElement("button");
    button10.textContent = "Success icon";
    button10.style.margin = "5px";
    button10.addEventListener("click", (event) => {
      dialog10.open();
    });
    root.appendChild(button10);

    const dialog11 = new Dialog({
      ...props,
      icon: "info",
    });
    const button11 = document.createElement("button");
    button11.textContent = "Info icon";
    button11.style.margin = "5px";
    button11.addEventListener("click", (event) => {
      dialog11.open();
    });
    root.appendChild(button11);

    const dialog12 = new Dialog({
      ...props,
      icon: "error",
    });
    const button12 = document.createElement("button");
    button12.textContent = "Error icon";
    button12.style.margin = "5px";
    button12.addEventListener("click", (event) => {
      dialog12.open();
    });
    root.appendChild(button12);

    const dialog13 = new Dialog({
      ...props,
      icon: "warning",
    });
    const button13 = document.createElement("button");
    button13.textContent = "Warning icon";
    button13.style.margin = "5px";
    button13.addEventListener("click", (event) => {
      dialog13.open();
    });
    root.appendChild(button13);

    const dialog14 = new Dialog({
      ...props,
      icon: "question",
    });
    const button14 = document.createElement("button");
    button14.textContent = "Question icon";
    button14.style.margin = "5px";
    button14.addEventListener("click", (event) => {
      dialog14.open();
    });
    root.appendChild(button14);

    const dialog = new Dialog({
      ...props,
      content: "No icon content",
    });
    const button = document.createElement("button");
    button.textContent = "No icon";
    button.style.margin = "5px";
    button.addEventListener("click", (event) => {
      dialog.open();
    });
    root.appendChild(button);

    return root;
  })
  // UI For document site. Do not change or delete below.
  .add("Document", () => {
    const root = document.createElement("div");
    const dialog = new Dialog({
      title: "Title",
      content: "<div>This is Content</div>",
      footer: "Footer",
    });
    dialog.open();
    return root;
  });
