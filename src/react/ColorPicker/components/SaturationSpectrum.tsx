import React, {useRef, useEffect, useState, useCallback} from 'react';

type SaturationSpectrumProps = {
  width: number;
  height: number;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  onSelect: (rgb: {
    r: number;
    g: number;
    b: number;
  }) => void;
}

export default function SaturationSpectrum(props: SaturationSpectrumProps) {
  const w = props.width;
  const h = props.height;
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [containerEl, setContainerEl] = useState<ClientRect | DOMRect>();
  const container = useCallback((element: HTMLDivElement) => {
    element && setContainerEl(element.getBoundingClientRect());
  }, []);
  const satCanvas = useRef<HTMLCanvasElement>(null);

  function fillSatSpectrumCanvas() {
    if (satCanvas && satCanvas.current) {
      const ctx = satCanvas.current.getContext('2d');
      if (ctx) {
        ctx.fillStyle = `rgb(${props.rgb.r},${props.rgb.g},${props.rgb.b})`;
        ctx.fillRect(0, 0, w, h);
        const grdWhite = ctx.createLinearGradient(0, 0, w, 0);
        grdWhite.addColorStop(0, 'rgb(255,255,255)');
        grdWhite.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grdWhite;
        ctx.fillRect(0, 0, w, h);
        const grdBlack = ctx.createLinearGradient(0, 0, 0, h);
        grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
        grdBlack.addColorStop(1, 'rgb(0,0,0)');
        ctx.fillStyle = grdBlack;
        ctx.fillRect(0, 0, w, h);
      }
    }
  }

  function triggerSelect(clientX: number, clientY: number) {
    if (containerEl) {
      const x = clientX - containerEl.left;
      const y = clientY - containerEl.top;
      if (satCanvas && satCanvas.current) {
        const ctx = satCanvas.current.getContext('2d');
        if (ctx) {
          const imageData = ctx.getImageData(x, y, 1, 1).data;
          props.onSelect({r: imageData[0], g: imageData[1], b: imageData[2]});
        }
      }
    }
  }

  function handleMouseDown() {
    setIsMouseDown(true);
  }

  function handleMouseUp(e: React.MouseEvent<EventTarget>) {
    triggerSelect(e.pageX, e.pageY);
    setIsMouseDown(false);
  }

  function handleMouseMove(e: React.MouseEvent<EventTarget>) {
    if (isMouseDown) {
      triggerSelect(e.pageX, e.pageY);
    }
  }

  function handleMouseLeave() {
    setIsMouseDown(false);
  }

  useEffect(() => {
    fillSatSpectrumCanvas();
  });

  return (
    <div ref={container}>
      <canvas
        ref={satCanvas}
        width={w}
        height={h}
        style={{cursor: 'crosshair'}}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}