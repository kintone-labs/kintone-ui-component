import React, { useEffect, useRef } from 'react';

export const TextComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const text = new Kuc.Text({});

    divEl.current.appendChild(text)
  }, []);

  return (
    <div className="sample-container" id="text">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};