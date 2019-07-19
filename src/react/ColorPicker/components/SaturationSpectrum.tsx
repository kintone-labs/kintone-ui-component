import React, { useRef, useEffect, useState } from "react";

type SaturationSpectrumProps = {
    width: number
    height: number
    rgb: {
        r:number
        g:number
        b:number
    }
    onSelect: (rgb: {
        r:number
        g:number
        b:number
    }) => void
}

export default function SaturationSpectrum(props: SaturationSpectrumProps) {
    const w = props.width;
    const h = props.height;
    const container = useRef<HTMLDivElement>(null);
    const satCanvas = useRef<HTMLCanvasElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [containerEl, setContainerEl] = useState<ClientRect | DOMRect>();

    function fillSatSpectrumCanvas() {
        if (satCanvas && satCanvas.current) {
            let ctx = satCanvas.current.getContext("2d");
            if (ctx) {
                ctx.fillStyle = `rgb(${props.rgb.r},${props.rgb.g},${props.rgb.b})`;
                ctx.fillRect(0, 0, w, h);
                var grdWhite = ctx.createLinearGradient(0, 0, w, 0);
                grdWhite.addColorStop(0, "rgb(255,255,255)");
                grdWhite.addColorStop(1, "transparent");
                ctx.fillStyle = grdWhite;
                ctx.fillRect(0, 0, w, h);
                var grdBlack = ctx.createLinearGradient(0, 0, 0, h);
                grdBlack.addColorStop(0, "transparent");
                grdBlack.addColorStop(1, "rgb(0,0,0)");
                ctx.fillStyle = grdBlack;
                ctx.fillRect(0, 0, w, h);
            }
        }
    }

    function triggerSelect(clientX: number, clientY: number) {
        if (containerEl) {
            let x = clientX - containerEl.left;
            let y = clientY - containerEl.top;
            if (satCanvas && satCanvas.current) {
                const ctx = satCanvas.current.getContext("2d");
                if (ctx) {
                    const imageData = ctx.getImageData(x, y, 1, 1).data;
                    props.onSelect({ r: imageData[0], g: imageData[1], b: imageData[2] });
                }
            } 
        }
    }

    function handleMouseDown() {
        setIsMouseDown(true);
    }

    function handleMouseUp(e: React.MouseEvent<EventTarget>) {
        triggerSelect(e.clientX, e.clientY);
        if (container && container.current) {
            setContainerEl(container.current.getBoundingClientRect());
        }
        setIsMouseDown(false);
    }

    function handleMouseMove(e: React.MouseEvent<EventTarget>) {
        if (isMouseDown) {
            triggerSelect(e.clientX, e.clientY);
            if (container && container.current) {
                setContainerEl(container.current.getBoundingClientRect());
            }
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
                style={{ cursor: "crosshair" }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    );
}
