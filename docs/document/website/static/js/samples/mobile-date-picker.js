const MONTH_SELECT = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
];

const createContextElm = elm => {
  const context = document.createElement("div");
  context.style.cssText = `
    height: 0px;
    overflow: hidden;
    display: inline-block;
    font-size: 14px;
    font-family: ${window.getComputedStyle(elm).fontFamily};
    `;
  return context;
};

const getWidthElmByContext = (elm, container) => {
  const context = createContextElm(elm);
  const clonedElm = elm.cloneNode(true);
  if (clonedElm.hasAttribute("hidden")) return 0;
  context.appendChild(clonedElm);
  container.appendChild(context);

  const width = context.getBoundingClientRect().width;
  container.removeChild(context);
  return width;
};

document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const mobileDatePicker = new Kuc.MobileDatePicker({
    value: "2021-11-11",
    className: "mobile-date-picker"
  });
  mobileDatePicker.addEventListener(
    "kuc:mobile-calendar-header-change",
    event => {
      const monthEl = document.querySelector(
        ".kuc-base-mobile-datetime-calendar-header__group__center__month__select"
      );
      const value = event.detail.value;
      const span = document.createElement("span");
      span.innerText =
        MONTH_SELECT[parseInt(value.slice(value.indexOf("-") + 1))];
      console.log(
        MONTH_SELECT[parseInt(value.slice(value.indexOf("-") + 1) - 1)],
        "text"
      );
      //   span.style.padding = "0 22.4px 0 0";
      console.log(getWidthElmByContext(span, container), "width");
      setTimeout(() => {
        monthEl.style.width = getWidthElmByContext(span, container) + 50 + "px";
        monthEl.selectedIndex = value.slice(value.indexOf("-") + 1) - 1;
        monthEl.style.willChange = "transform, opacity";
      });
    }
  );

  const groupEl = document.createElement("div");
  groupEl.classList.add("group-mobile-date-picker");
  groupEl.appendChild(mobileDatePicker);
  container.appendChild(groupEl);
});
