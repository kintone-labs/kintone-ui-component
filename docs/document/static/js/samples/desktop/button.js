import React, { useEffect, useRef } from 'react';

export const ButtonComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const buttonNormal = new Kuc.Button({
      text: "Normal",
      type: "normal",
      className: "kuc_normal_button",
    });
    const buttonSubmit = new Kuc.Button({
      text: "Submit",
      type: "submit",
      className: "kuc_normal_button",
    });
    const buttonAlert = new Kuc.Button({
      text: "Alert",
      type: "alert",
      className: "kuc_normal_button",
    });

    divEl.current.appendChild(buttonNormal)
    divEl.current.appendChild(buttonSubmit)
    divEl.current.appendChild(buttonAlert)
  }, []);

  return (
    <div className="sample-container" id="button">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};