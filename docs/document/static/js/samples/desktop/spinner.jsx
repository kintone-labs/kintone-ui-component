import React, { useEffect, useRef } from 'react';

export const SpinnerComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {

    const spinner = new Kuc.Spinner({className: "spinner"});
    spinner.open();

    divEl.current.appendChild(spinner);
  }, []);

  return (
    <div className="sample-container" id="spinner">
      <div id="sample-container__components" ref={divEl}>
      </div>
    </div>
  );
};