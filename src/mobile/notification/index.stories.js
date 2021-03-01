import { MobileNotification } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("mobile/notification", module)
  .addParameters({ viewport: { defaultViewport: "iPhone11Pro" } })
  .add("Base", () => {
    const root = document.createElement("div");
    const notification = new MobileNotification();

    const button = document.createElement("button");
    button.textContent = "open";
    button.addEventListener("click", function() {
      notification.open();
    });
    root.appendChild(button);

    return root;
  })
  .add("Base1", () => {
    const root = document.createElement("div");
    const notification = new MobileNotification({
      text: "不正です!!"
    });

    const button = document.createElement("button");
    button.textContent = "open";
    button.addEventListener("click", function() {
      notification.open();
    });
    root.appendChild(button);

    return root;
  })
  .add("Document", () => {
    const root = document.createElement("div");
    const mobileNotification = new MobileNotification({
      text: "Error!"
    });
    mobileNotification.open();
    return root;
  });
