import "./index.ts";

export default {
  title: "base/datetime/menu",
  argTypes: {
    selectedValue: {
      name: "selectedValue",
      control: {
        type: "select",
        options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
      }
    },
    items: {
      name: "items",
      control: {
        type: "object",
        options: []
      }
    }
  },
  parameters: {
    actions: {
      handles: ["kuc:calendar-menu-click"]
    }
  }
};

const Template = ({ selectedValue, items }) => {
  const rootEl = document.createElement("div");
  const actionGroupEl = document.createElement("div");
  rootEl.appendChild(actionGroupEl);
  const menuContainerEl = document.createElement("div");
  rootEl.appendChild(menuContainerEl);

  const menuEl = document.createElement("kuc-base-datetime-menu");
  menuEl.items = items;
  menuEl.selectedValue = selectedValue;
  menuEl.addEventListener("kuc:calendar-menu-click", event => {
    menuEl.selectedValue = event.detail.value;
  });
  menuContainerEl.appendChild(menuEl);

  const actions = createActions(menuEl);
  actionGroupEl.appendChild(actions);

  return rootEl;
};

export const base = Template.bind({});
base.args = {
  selectedValue: "9",
  items: [
    { value: "0", label: "JANUARY" },
    { value: "1", label: "FEBRUARY" },
    { value: "2", label: "MARCH" },
    { value: "3", label: "APRIL" },
    { value: "4", label: "MAY" },
    { value: "5", label: "JUNE" },
    { value: "6", label: "JULY" },
    { value: "7", label: "AUGUST" },
    { value: "8", label: "SEPTEMBER" },
    { value: "9", label: "OCTOBER" },
    { value: "10", label: "NOVEMBER" },
    { value: "11", label: "DECEMBER" }
  ]
};

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
      text: "Open/Close",
      action: () => {
        menuEl.hidden = !menuEl.hidden;
      }
    },
    {
      text: "Set Highlight First Item",
      action: () => {
        menuEl.highlightFirstItem();
      }
    },
    {
      text: "Next Item",
      action: () => {
        menuEl.highlightNextItem();
      }
    },
    {
      text: "Highlight Last Item",
      action: () => {
        menuEl.highlightLastItem();
      }
    },
    {
      text: "Previous Item",
      action: () => {
        menuEl.highlightPrevItem();
      }
    }
  ]);
  return actions;
};
