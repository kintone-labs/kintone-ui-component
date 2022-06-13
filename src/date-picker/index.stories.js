import { DatePicker } from "./index.ts";

export default {
  title: "desktop/date-picker",
  argTypes: {
    className: { name: "className" },
    error: { name: "error" },
    id: { name: "id" },
    label: { name: "label" },
    language: {
      name: "language",
      control: {
        type: "select",
        options: ["auto", "en", "ja", "zh"]
      }
    },
    requiredIcon: { name: "requiredIcon" },
    value: { name: "value" },
    visible: { name: "visible" }
  },
  parameters: {
    actions: {
      handles: ["change"]
    },
    getValue: {
      get: true,
      id: "getter"
    }
  }
};

const ConstructorTemplate = args => {
  const wrapperEl = document.createElement("div");
  const datePicker = new DatePicker({ ...args });
  datePicker.addEventListener("change", event => {
    console.log(event);
  });
  const buttonGetValue = document.createElement("button");
  buttonGetValue.innerText = "Get value";
  buttonGetValue.id = "getter";
  buttonGetValue.style.display = "none";
  buttonGetValue.addEventListener("click", () => {
    console.log(datePicker.value);
  });

  wrapperEl.appendChild(datePicker);
  wrapperEl.appendChild(buttonGetValue);

  return wrapperEl;
};

export const BaseConstructor = ConstructorTemplate.bind({});
BaseConstructor.args = {
  className: "date-picker-class",
  error: "",
  id: "date-picker-id",
  label: "Date Picker Label",
  language: "en",
  requiredIcon: false,
  value: "2021-03-31",
  visible: true
};

const SetTemplate = args => {
  const wrapperEl = document.createElement("div");
  const datePicker = new DatePicker({ ...args });
  datePicker.addEventListener("change", event => {
    console.log(event);
  });

  // const buttonSetValue = document.createElement("button");
  // buttonSetValue.innerText = "Set value";
  // buttonSetValue.addEventListener("click", () => {
  //   datePicker.value = "1997-01-01";
  // });

  const buttonGetValue = document.createElement("button");
  buttonGetValue.innerText = "Get value";
  buttonGetValue.id = "getter";
  buttonGetValue.style.display = "none";
  buttonGetValue.addEventListener("click", () => {
    console.log(datePicker.value);
  });

  wrapperEl.appendChild(datePicker);
  wrapperEl.appendChild(buttonGetValue);

  return wrapperEl;
};

export const BaseSetter = SetTemplate.bind({});
BaseSetter.args = {
  className: "date-picker-class",
  error: "",
  id: "date-picker-id",
  label: "Date Picker Label",
  language: "en",
  requiredIcon: false,
  value: "2021-03-31",
  visible: true
};
