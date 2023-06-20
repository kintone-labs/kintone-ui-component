import React, { useEffect, useRef } from 'react';

export const MobileNotificationComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const mobileNotification = new Kuc.MobileNotification({text: "Error!"});
    mobileNotification.open();
    divEl.current.appendChild(mobileNotification);
  }, []);

  return (
    <div className="sample-container" id="mobile-notification">
      <div id="sample-container__components" ref={divEl}>
      </div>
    </div>
  );
};