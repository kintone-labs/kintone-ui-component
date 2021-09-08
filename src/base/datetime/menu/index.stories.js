import "./index.ts";
import { storiesOf } from "@storybook/web-components";

const createActionsEl = actions => {
  const actionsEl = document.createElement("div");
  actions.forEach(item => {
    const btnEl = document.createElement("button");
    btnEl.textContent = item.text;
    btnEl.onclick = item.action;
    actionsEl.appendChild(btnEl);
  });

  return actionsEl;
};

const createActions = menuEl => {
  const actions = createActionsEl([
    {
      text: "toggle",
      action: () => {
        menuEl.hidden = !menuEl.hidden;
      }
    },
    {
      text: "Next Item",
      action: () => {
        menuEl.highlightNextItem();
      }
    },
    {
      text: "Prev Item",
      action: () => {
        menuEl.highlightPrevItem();
      }
    }
  ]);
  return actions;
};

storiesOf("base/datetime/menu", module).add("Base", () => {
  const rootEl = document.createElement("div");
  const actionGroupEl = document.createElement("div");
  rootEl.appendChild(actionGroupEl);
  const menuContainerEl = document.createElement("div");
  rootEl.appendChild(menuContainerEl);

  const menuEl = document.createElement("kuc-base-datetime-menu");
  menuEl.items = [
    { value: "0", label: "JANUARY" },
    { value: "1", label: "FEBRUARY" },
    { value: "2", label: "MARCH" }
  ];
  menuEl.addEventListener("click", event => {
    menuEl.selectedValue = event.detail.value;
    menuEl.hidden = true;
  });
  menuContainerEl.appendChild(menuEl);

  const actions = createActions(menuEl);
  actionGroupEl.appendChild(actions);

  return rootEl;
});
