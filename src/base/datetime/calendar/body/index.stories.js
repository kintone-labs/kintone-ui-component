import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/calendar/body",
  argTypes: {
    month: {
      name: "month",
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    },
    year: {
      name: "year",
      control: {
        type: "select",
        options: [2019, 2020, 2021, 2022, 2023],
      },
    },
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" },
    },
    value: {
      name: "value",
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    actions: {
      handles: [
        "kuc:calendar-body-click-date",
        "kuc:calendar-body-change-date",
      ],
    },
  },
};

const Template = ({ month, year, language, value }) => {
  const _handleChangeDate = (event) => {
    const newValue = event.detail.value;
    const _btn = document.querySelector("input");
    _btn.value = newValue;
  };

  const _handleClickDate = (event) => {
    const newValue = event.detail.value;
    const _btn = document.querySelector("input");
    _btn.value = newValue;
  };

  return html`
    <input typ="text" value="${value}" />
    <kuc-base-datetime-calendar-body
      .month="${month}"
      .year="${year}"
      .language="${language}"
      .value="${value}"
      @kuc:calendar-body-click-date="${_handleClickDate}"
      @kuc:calendar-body-change-date="${_handleChangeDate}"
    >
    </kuc-base-datetime-calendar-body>
  `;
};

export const base = Template.bind({});
base.args = {
  month: 7,
  year: 2021,
  language: "en",
  value: "2021-08-22",
};
