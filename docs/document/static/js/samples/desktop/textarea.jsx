import React, { useEffect, useRef } from 'react';

export const TextAreaComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const textarea = new Kuc.TextArea({});

    divEl.current.appendChild(textarea)
  }, []);

  return (
    <div className="sample-container block" id="textarea">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};