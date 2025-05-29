import React, { useEffect, useRef } from "react";

export const NotificationComponent = () => {
  const divEl = useRef();
  useEffect(() => {
    const notificationInfo = new Kuc.Notification({ text: "Info!", type: "info", className: "notification" });
    const notificationSuccess = new Kuc.Notification({ text: "Success!", type: "success", className: "notification" });
    notificationSuccess.style.paddingTop = "80px";
    const notificationError = new Kuc.Notification({
      text: "Error!",
      type: "danger",
      className: "notification",
      content: "Error occurred!<br>Please click the <a href=\"#\">Link</a> for details.",
    });
    notificationError.style.paddingTop = "160px";

    notificationInfo.open();
    notificationSuccess.open();
    notificationError.open();

    divEl.current.appendChild(notificationInfo);
    divEl.current.appendChild(notificationSuccess);
    divEl.current.appendChild(notificationError);
  }, []);

  return (
    <div className="sample-container" id="notification">
      <div id="sample-container__components" ref={divEl}>
      </div>
    </div>
  );
};