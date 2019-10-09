import React, { useRef, useEffect, useState } from 'react';
export default function HueSpectrum(props) {
    var w = props.width;
    var h = props.height;
    var container = useRef(null);
    var hueCanvas = useRef(null);
    var _a = useState(false), hasInitLayout = _a[0], setHasInitLayout = _a[1];
    var _b = useState(false), isMouseDown = _b[0], setIsMouseDown = _b[1];
    var _c = useState(), containerEl = _c[0], setContainerEl = _c[1];
    function initLayout() {
        if (!hasInitLayout && hueCanvas && hueCanvas.current) {
            var ctx = hueCanvas.current.getContext('2d');
            if (ctx) {
                ctx.rect(0, 0, w, h);
                var grd1 = ctx.createLinearGradient(0, 0, 0, h);
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
    function triggerSelect(clientY) {
        var x = w / 2;
        if (containerEl) {
            var y = clientY - containerEl.top;
            if (hueCanvas && hueCanvas.current) {
                var ctx = hueCanvas.current.getContext('2d');
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
        triggerSelect(e.clientY);
        initContainerEl();
        setIsMouseDown(false);
    }
    function handleMouseMove(e) {
        if (isMouseDown) {
            triggerSelect(e.clientY);
            initContainerEl();
        }
    }
    function handleMouseLeave() {
        setIsMouseDown(false);
    }
    useEffect(function () {
        initLayout();
    });
    return (React.createElement("div", { ref: container },
        React.createElement("canvas", { ref: hueCanvas, width: w, height: h, style: { cursor: 'crosshair' }, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave })));
}
