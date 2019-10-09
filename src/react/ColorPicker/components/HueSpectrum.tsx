import React, {useRef, useEffect, useState} from 'react';

type RGB = {
  r: number;
  g: number;
  b: number;
}

type HueSpectrumProps = {
  width: number;
  height: number;
  onSelect: (rgbObj: RGB) => void;
}

export default function HueSpectrum(props: HueSpectrumProps) {
  const w = props.width;
  const h = props.height;
  const container = useRef<HTMLDivElement>(null);
  const hueCanvas = useRef<HTMLCanvasElement>(null);
  const [hasInitLayout, setHasInitLayout] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [containerEl, setContainerEl] = useState<ClientRect | DOMRect>();

  function initLayout() {
    if (!hasInitLayout && hueCanvas && hueCanvas.current) {

      const ctx = hueCanvas.current.getContext('2d');
      if (ctx) {
        ctx.rect(0, 0, w, h);
        const grd1 = ctx.createLinearGradient(0, 0, 0, h);
        grd1.addColorStop(0, 'rgb(255, 0, 0)'); // red
        grd1.addColorStop(0.17, 'rgb(255, 0, 255)'); // magenta
        grd1.addColorStop(0.34, 'rgb(0, 0, 255)'); // blue
        grd1.addColorStop(0.51, 'rgb(0, 255, 255)'); // aqua
        grd1.addColorStop(0.68, 'rgb(0, 255, 0)'); // green
        grd1.addColorStop(0.85, 'rgb(255, 255, 0)'); // yellow
        grd1.addColorStop(1, 'rgb(255, 0, 0)'); // red
        ctx.fillStyle = grd1;
        ctx.fill();
        setHasInitLayout(true);
      }
    }
  }

  function triggerSelect(clientY: number) {
    const x = w / 2;
    if (containerEl) {
      const y = clientY - containerEl.top;
      if (hueCanvas && hueCanvas.current) {
        const ctx = hueCanvas.current.getContext('2d');
        if (ctx) {
          const imageData = ctx.getImageData(x, y, 1, 1).data;
          props.onSelect({r: imageData[0], g: imageData[1], b: imageData[2]});
        }
      }
    }
  }

  function initContainerEl() {
    if (container && container.current) {
      setContainerEl(container.current.getBoundingClientRect());
    }
  }

  function handleMouseDown() {
    setIsMouseDown(true);
  }

  function handleMouseUp(e: React.MouseEvent<EventTarget>) {
    triggerSelect(e.clientY);
    initContainerEl();
    setIsMouseDown(false);
  }

  function handleMouseMove(e: React.MouseEvent<EventTarget>) {
    if (isMouseDown) {
      triggerSelect(e.clientY);
      initContainerEl();
    }
  }

  function handleMouseLeave() {
    setIsMouseDown(false);
  }

  useEffect(() => {
    initLayout();
  });

  return (
    <div ref={container}>
      <canvas
        ref={hueCanvas}
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
