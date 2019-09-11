import React, { useRef, useEffect, useState } from "react";
export default function SaturationSpectrum(props) {
    var w = props.width;
    var h = props.height;
    var container = useRef(null);
    var satCanvas = useRef(null);
    var _a = useState(false), isMouseDown = _a[0], setIsMouseDown = _a[1];
    var _b = useState(), containerEl = _b[0], setContainerEl = _b[1];
    function fillSatSpectrumCanvas() {
        if (satCanvas && satCanvas.current) {
            var ctx = satCanvas.current.getContext("2d");
            if (ctx) {
                ctx.fillStyle = "rgb(" + props.rgb.r + "," + props.rgb.g + "," + props.rgb.b + ")";
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
    function triggerSelect(clientX, clientY) {
        if (containerEl) {
            var x = clientX - containerEl.left;
            var y = clientY - containerEl.top;
            if (satCanvas && satCanvas.current) {
                var ctx = satCanvas.current.getContext("2d");
                if (ctx) {
                    var imageData = ctx.getImageData(x, y, 1, 1).data;
                    props.onSelect({ r: imageData[0], g: imageData[1], b: imageData[2] });
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
    function handleMouseUp(e) {
        triggerSelect(e.clientX, e.clientY);
        initContainerEl();
        setIsMouseDown(false);
    }
    function handleMouseMove(e) {
        if (isMouseDown) {
            triggerSelect(e.clientX, e.clientY);
            initContainerEl();
        }
    }
    function handleMouseLeave() {
        setIsMouseDown(false);
    }
    useEffect(function () {
        fillSatSpectrumCanvas();
    });
    return (React.createElement("div", { ref: container },
        React.createElement("canvas", { ref: satCanvas, width: w, height: h, style: { cursor: "crosshair" }, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave })));
}
