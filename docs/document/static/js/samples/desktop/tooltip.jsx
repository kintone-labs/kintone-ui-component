import React, { useEffect, useRef } from 'react';

export const TooltipComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const getButtonContainer = (text) => {
        const buttonEl = document.createElement("button");
        buttonEl.innerText = text;
        return buttonEl;
    };
    const tooltip = new Kuc.Tooltip({
        className: "tooltip-class",
        id: "tooltip-id",
        placement: "bottom",
        title: "Do not add if exists.",
        container: getButtonContainer("Add"),
        describeChild: true,
    });

    divEl.current.appendChild(tooltip)
  }, []);

  return (
    <div className="sample-container" id="tooltip">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};