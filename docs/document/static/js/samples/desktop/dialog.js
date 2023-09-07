import React, { useEffect, useRef } from 'react';

export const DialogComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const okButton = new Kuc.Button({
        text: "OK",
        type: "submit"
      });
      const cancelButton = new Kuc.Button({
        text: "Cancel",
        type: "normal",
      });
      cancelButton.style.marginRight = "16px";
      const footerEl = document.createElement("div");
      footerEl.style.display = "flex";
      footerEl.appendChild(cancelButton)
      footerEl.appendChild(okButton)
      const dialog = new Kuc.Dialog({
        title: "Title",
        content: "<div><p style='margin: 0;'>This is Content</p></div>",
        footer: footerEl,
        icon: "info",
        className: 'dialog'
      });
      dialog.open();

        divEl.current.appendChild(dialog)
  }, []);

  return (
    <div className="sample-container" id="dialog">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};