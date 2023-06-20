import React, { useEffect, useRef } from 'react';

export const MultichoiceComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const multiChoice = new Kuc.MultiChoice({
        value: ["Orange"],
        items: [
            {
            label: "orange",
            value: "Orange"
            },
            {
            label: "apple",
            value: "Apple"
            }
        ]
    });

    divEl.current.appendChild(multiChoice)
  }, []);

  return (
    <div className="sample-container" id="multichoice">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};