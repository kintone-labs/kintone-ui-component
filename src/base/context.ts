export const createContextElm = (elm: HTMLElement) => {
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

export const getWidthElmByContext = (elm: HTMLElement) => {
  const context = createContextElm(elm);
  const clonedElm = elm.cloneNode(true) as HTMLElement;
  if (clonedElm.hasAttribute("hidden")) return 0;
  context.appendChild(clonedElm);
  document.body.appendChild(context);

  const width = context.getBoundingClientRect().width;
  document.body.removeChild(context);
  return width;
};
