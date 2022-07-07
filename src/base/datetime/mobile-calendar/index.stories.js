import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/datetime/mobile-calendar",
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
    viewport: {
      defaultViewport: "iPhone11Pro",
    },
    actions: {
      handles: [
        "kuc:mobile-calendar-body-click-date",
        "kuc:mobile-calendar-footer-click-none",
        "kuc:mobile-calendar-footer-click-today",
        "kuc:mobile-calendar-footer-click-close",
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
    const _calendarEl = document.querySelector(
      "kuc-base-mobile-datetime-calendar"
    );
    _calendarEl.hidden = false;

    const _inputEl = document.querySelector("input");
    _calendarEl.value = _inputEl.value;
  };

  const _hideCalendar = (_) => {
    const _calendarEl = document.querySelector(
      "kuc-base-mobile-datetime-calendar"
    );
    _calendarEl.hidden = true;
  };

  const _handleFocusInput = (_) => {
    _showCalendar();
  };

  const _handleClickMobileCalendarBodyClickDate = (event) => {
    _setValue(event.detail.value);
    _hideCalendar();
  };

  const _handleClickMobileCalendarFooterButtonNone = (_) => {
    _setValue("");
    _hideCalendar();
  };

  const _handleClickMobileCalendarFooterButtonToday = (_) => {
    const date = new Date();
    _setValue(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    _hideCalendar();
  };

  const _handleClickMobileCalendarFooterButtonClose = (_) => {
    _hideCalendar();
  };

  return html`
    <style>
      #root-inner {
        position: relative;
      }
      kuc-base-mobile-datetime-calendar {
        position: absolute;
        top: 24px;
        left: 0px;
      }
      input:focus {
        outline: none;
      }
    </style>
    <input
      type="text"
      value="${value}"
      readonly
      @focus="${_handleFocusInput}"
    />
    <kuc-base-mobile-datetime-calendar
      .language="${language}"
      .value="${value}"
      @kuc:mobile-calendar-body-click-date="${_handleClickMobileCalendarBodyClickDate}"
      @kuc:mobile-calendar-footer-click-none="${_handleClickMobileCalendarFooterButtonNone}"
      @kuc:mobile-calendar-footer-click-today="${_handleClickMobileCalendarFooterButtonToday}"
      @kuc:mobile-calendar-footer-click-close="${_handleClickMobileCalendarFooterButtonClose}"
    ></kuc-base-mobile-datetime-calendar>
  `;
};

export const base = Template.bind({});
base.args = {
  language: "en",
  value: "2021-09-22",
};
