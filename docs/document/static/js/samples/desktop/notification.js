import React, { useEffect, useRef } from 'react';

export const NotificationComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const notificatonInfo = new Kuc.Notification({text: "Info!", type: "info", className:"notification"});
    const notificatonSuccess = new Kuc.Notification({text: "Success!", type: "success", className:"notification"});
    notificatonSuccess.style.paddingTop = "80px";
    const notificatonError = new Kuc.Notification({text: "Error!", type: "error", className:"notification"});
    notificatonError.style.paddingTop = "160px";

    notificatonInfo.open();
    notificatonSuccess.open();
    notificatonError.open();

    divEl.current.appendChild(notificatonInfo);
    divEl.current.appendChild(notificatonSuccess);
    divEl.current.appendChild(notificatonError);
  }, []);

  return (
    <div className="sample-container" id="notification">
      <div id="sample-container__components" ref={divEl}>
      </div>
    </div>
  );
};