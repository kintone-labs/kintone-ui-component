import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/calendar/body",
  argTypes: {
    month: {
      name: "month",
      control: {
        type: "select",
        options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      }
    },
    year: {
      name: "year",
      control: {
        type: "select",
        options: [2019, 2020, 2021, 2022, 2023]
      }
    },
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" }
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
      handles: ["kuc:calendar-body-change-date"]
    }
  }
};

const Template = ({ month, year, language, value }) => {
  const _handleClickBtn = () => {
    const _menuEl = document.querySelector("kuc-base-datetime-calendar-body");
    _menuEl.showHide();
  };

  const _handleChangeDateCalendarBody = event => {
    const newValue = event.detail.value;
    const _btn = document.querySelector("button");
    _btn.textContent = newValue;
  };

  const _handleClickDateCalendarBody = event => {
    const newValue = event.detail.value;
    const _btn = document.querySelector("button");
    _btn.textContent = newValue;
  };

  return html`
    <button @click="${_handleClickBtn}">
      ${value}
    </button>
    <kuc-base-datetime-calendar-body
      .month="${month}"
      .year="${year}"
      .language="${language}"
      .value="${value}"
      @kuc:calendar-body-click-date="${_handleClickDateCalendarBody}"
      @kuc:calendar-body-change-date="${_handleChangeDateCalendarBody}"
    >
    </kuc-base-datetime-calendar-body>
  `;
};

export const base = Template.bind({});
base.args = {
  month: 8,
  year: 2021,
  language: "en",
  value: "2021-9-22"
};
