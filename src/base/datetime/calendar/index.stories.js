import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/calendar",
  argTypes: {
    language: {
      name: "language",
      options: ["en", "ja", "zh"],
      control: { type: "select" },
    },
    value: {
      name: "value",
      control: { type: "text" },
    },
  },
  parameters: {
    actions: {
      handles: [
        "kuc:calendar-body-change-date",
        "kuc:calendar-body-click-date",
        "kuc:calendar-footer-click-none",
        "kuc:calendar-footer-click-today",
      ],
    },
  },
};

const Template = ({ language, value }) => {
  const _setValue = (val) => {
    const _inputEl = document.querySelector("input");
    _inputEl.value = val;
  };

  const _showCalendar = (_) => {
    const _calendarEl = document.querySelector("kuc-base-datetime-calendar");
    _calendarEl.hidden = false;

    const _inputEl = document.querySelector("input");
    _calendarEl.value = _inputEl.value;
  };

  const _hideCalendar = (_) => {
    const _calendarEl = document.querySelector("kuc-base-datetime-calendar");
    _calendarEl.hidden = true;
  };

  const _handleFocusInput = (_) => {
    _showCalendar();
  };

  const _handleClickCalendarBodyChangeDate = (event) => {
    _setValue(event.detail.value);
  };

  const _handleClickCalendarBodyClickDate = (event) => {
    _setValue(event.detail.value);
    _hideCalendar();
  };

  const _handleClickCalendarFooterButtonNone = (_) => {
    _setValue("");
    _hideCalendar();
  };

  const _handleClickCalendarFooterButtonToday = (_) => {
    const date = new Date();
    _setValue(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    _hideCalendar();
  };

  return html`
    <style>
      #root-inner {
        position: relative;
      }
      kuc-base-datetime-calendar {
        position: absolute;
        top: 24px;
        left: 0px;
      }
    </style>
    <input type="text" value="${value}" @focus="${_handleFocusInput}" />
    <kuc-base-datetime-calendar
      .language="${language}"
      .value="${value}"
      @kuc:calendar-body-change-date="${_handleClickCalendarBodyChangeDate}"
      @kuc:calendar-body-click-date="${_handleClickCalendarBodyClickDate}"
      @kuc:calendar-footer-click-none="${_handleClickCalendarFooterButtonNone}"
      @kuc:calendar-footer-click-today="${_handleClickCalendarFooterButtonToday}"
    ></kuc-base-datetime-calendar>
  `;
};

export const base = Template.bind({});
base.args = {
  language: "en",
  value: "2021-09-22",
};
