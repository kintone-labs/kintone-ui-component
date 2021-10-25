import "./index.ts";
import { html } from "lit-html";
export default {
  title: "base/date",
  argTypes: {
    disabled: {
      name: "disabled",
      control: {
        type: "select",
        options: [true, false]
      }
    },
    language: {
      name: "language",
      control: {
        type: "select",
        options: ["en", "ja", "zh"]
      }
    },
    value: {
      name: "value",
      control: {
        type: "text"
      }
    }
  },
  parameters: {
      actions: {
          handles: ["kuc:base-date-change"]
      }
  }
};

const Template = ({ disabled, language, value }) =>{
  const handleDateChange = (event)=>{
    console.log(event);
  }
  return html`
  <kuc-base-date2
    .disabled=${disabled}
    .language=${language}
    .value=${value}
    @kuc:base-date-change="${handleDateChange}"
  ></kuc-base-date2>
`;
}
  
export const base = Template.bind({});
base.args = {
    disabled: false,
    language: "en"
}