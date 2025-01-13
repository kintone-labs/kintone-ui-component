import { Button } from "../button/index.ts";
import { Dialog } from "../dialog/index.ts";
import { Dropdown } from "../dropdown/index.ts";
import { TextArea } from "../textarea/index.ts";

import { Tabs } from "./index.ts";
/**
 * When change any property in items by Controls
 * An Error: "unsafeHTML() called with a non-string value" will be thrown to console and the UI will be crashed.
 */
export default {
  title: "desktop/tabs",
  argTypes: {
    scrollButtons: { name: "scrollButtons" },
    borderVisible: { name: "borderVisible" },
    className: { name: "className" },
    id: { name: "id" },
    items: { name: "items" },
    value: { name: "value" },
    visible: { name: "visible" },
  },
  parameters: {
    actions: {
      handles: ["change"],
    },
  },
};
const template = (args) => {
  const tabs = new Tabs({ ...args });
  tabs.addEventListener("change", (event) => {
    console.log(event);
  });
  return tabs;
};
export const Base = template.bind({});
const firstContent = document.createElement("div");
firstContent.style = "padding: 16px";
const textArea = new TextArea({
  label: "フルーツ",
  requiredIcon: true,
  value: "Apple",
  error: "エラーです",
  visible: true,
  disabled: false,
  placeholder: "",
});
firstContent.appendChild(textArea);

const secondContent = document.createElement("div");
secondContent.style = "padding: 16px";
const dialog = new Dialog({
  title: "Title",
  content: "Content with Icon",
  footer: "Footer",
  icon: "success",
});
const button = new Button({ text: "Button" });
button.addEventListener("click", () => {
  dialog.open();
});

secondContent.appendChild(button);

const thirdContent = document.createElement("div");
thirdContent.style = "padding: 16px";
const dropdown = new Dropdown({
  items: [
    {
      label: "-----",
      value: "-----",
    },
    {
      label: "Orange",
      value: "orange",
    },
    {
      label: "Apple",
      value: "apple",
    },
  ],
  value: "-----",
  selectedIndex: 0,
  label: "フルーツ一覧",
  requiredIcon: true,
  disabled: false,
  error: "エラーです",
});
thirdContent.appendChild(dropdown);

Base.args = {
  borderVisible: true,
  className: "kuc-tabs-class",
  id: "sample-id",
  scrollButtons: true,
  items: [
    {
      label: "Tab1",
      value: "tab1",
      disabled: true,
      visible: true,
      content: firstContent,
    },
    {
      label: "Tab2",
      value: "tab2",
      disabled: false,
      visible: true,
      content: secondContent,
    },
    {
      label: "Tab3",
      value: "tab3",
      disabled: false,
      visible: true,
      content: thirdContent,
    },
    {
      label: "Tab4",
      value: "tab4",
      disabled: false,
      visible: true,
      content: "Tab4 Content",
    },
    {
      label: "Tab5",
      value: "tab5",
      disabled: false,
      visible: true,
      content: "Tab5 Content",
    },
    {
      label: "Tab6",
      value: "tab6",
      disabled: false,
      visible: true,
      content: ``,
    },
  ],
  value: "tab1",
  visible: true,
};
