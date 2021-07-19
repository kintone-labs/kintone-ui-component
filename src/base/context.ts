export function createContextElm(elm: HTMLElement) {
  const context = document.createElement("div");
  context.style.cssText = `
  height: 0px;
  overflow: hidden;
  display: inline-block;
  font: ${window.getComputedStyle(elm).font};
  `;
  return context;
}

export function getWidthElmByContext(elm: HTMLElement) {
  const context = createContextElm(elm);
  const clonedElm = elm.cloneNode(true);
  context.appendChild(clonedElm);
  document.body.appendChild(context);

  const width = context.getBoundingClientRect().width;
  document.body.removeChild(context);
  return width;
}
