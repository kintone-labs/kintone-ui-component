import "./index.ts";
import { html } from "lit";

export default {
  title: "base/datetime/mobile-calendar/body",
  argTypes: {
    month: {
      name: "month",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: {
        type: "select",
      },
    },
    year: {
      name: "year",
      options: [2019, 2020, 2021, 2022, 2023],
      control: {
        type: "select",
      },
    },
    language: {
      name: "language",
      options: ["en", "ja", "zh", "zh-TW", "es"],
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
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
    actions: {
      handles: ["kuc:mobile-calendar-body-click-date"],
    },
  },
};

const Template = ({ month, year, language, value }) => {
  const _handleClickDate = (event) => {
    const newValue = event.detail.value;
    const _btn = document.querySelector("input");
    _btn.value = newValue;
  };

  return html`
    <input typ="text" value="${value}" />
    <kuc-base-mobile-datetime-calendar-body
      .month="${month}"
      .year="${year}"
      .language="${language}"
      .value="${value}"
      @kuc:mobile-calendar-body-click-date="${_handleClickDate}"
    >
    </kuc-base-mobile-datetime-calendar-body>
  `;
};

export const base = Template.bind({});
base.args = {
  month: 7,
  year: 2021,
  language: "en",
  value: "2021-08-22",
};
