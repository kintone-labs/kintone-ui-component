import React, { useEffect, useRef } from 'react';

export const SwitchComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const kucSwitch = new Kuc.Switch({});

    divEl.current.appendChild(kucSwitch)
  }, []);

  return (
    <div className="sample-container" id="kucSwitch">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};