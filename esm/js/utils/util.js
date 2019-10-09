var Elements = /** @class */ (function () {
    function Elements(selector) {
        this.elArr = [];
        if (typeof selector === 'string') {
            var elNodeList = document.querySelectorAll(selector);
            this.elArr = Array.prototype.slice.call(elNodeList);
        }
        else {
            this.elArr.push(selector);
        }
    }
    Elements.prototype.on = function (eventName, callbackFunction) {
        this.each(function (el) {
            el.addEventListener(eventName, callbackFunction);
        });
        return this;
    };
    Elements.prototype.each = function (callbackFunction) {
        this.elArr.forEach(function (el) {
            callbackFunction(el);
        }, this);
    };
    Elements.prototype.data = function (dataKey, dataValue) {
        var _this = this;
        var prefixKey = 'data-';
        if (typeof dataValue === 'undefined') {
            return this.elArr[0].getAttribute(prefixKey + dataKey);
        }
        try {
            this.elArr.forEach(function () {
                _this.attr(prefixKey + dataKey, dataValue);
            }, this);
        }
        catch (e) {
            return false;
        }
        return this;
    };
    Elements.prototype.attr = function (attrKey, attrValue) {
        if (this.elArr.length === 0) {
            return typeof attrValue !== 'undefined' ? this : null;
        }
        if (typeof attrValue !== 'undefined') {
            this.elArr.forEach(function (el) {
                el.setAttribute(attrKey, attrValue);
            }, this);
            return this;
        }
        return this.elArr[0].getAttribute(attrKey);
    };
    Elements.prototype.removeAttr = function (attrKey) {
        this.elArr.forEach(function (el) {
            el.removeAttribute(attrKey);
        }, this);
        return this;
    };
    Elements.prototype.val = function (value) {
        if (this.elArr.length === 0) {
            return typeof value !== 'undefined' ? this : null;
        }
        if (typeof value !== 'undefined') {
            this.elArr.forEach(function (el) {
                el.value = value;
            }, this);
            return this;
        }
        return this.elArr[0].value;
    };
    Elements.prototype.html = function (value) {
        if (this.elArr.length === 0) {
            return typeof value !== 'undefined' ? this : null;
        }
        if (typeof value !== 'undefined') {
            this.elArr.forEach(function (el) {
                el.innerHTML = value;
            }, this);
            return this;
        }
        return this.elArr[0].innerHTML;
    };
    Elements.prototype.focus = function () {
        if (this.elArr.length === 0) {
            return;
        }
        this.elArr[0].focus();
    };
    Elements.prototype.remove = function () {
        if (this.elArr.length === 0) {
            return;
        }
        this.elArr.forEach(function (el) {
            try {
                if (el.parentNode) {
                    el.parentNode.removeChild(el);
                }
            }
            catch (e) {
                //
            }
        }, this);
    };
    Elements.prototype.trigger = function (eventName) {
        if (this.elArr.length === 0) {
            return;
        }
        this.elArr.forEach(function (el) {
            function createEvent() {
                if (typeof Event === 'function') {
                    return new Event(eventName, {
                        'bubbles': true,
                        'cancelable': true
                    });
                }
                var event = document.createEvent('Event');
                event.initEvent(eventName, true, true);
                return event;
            }
            el.dispatchEvent(createEvent());
        }, this);
    };
    Elements.prototype.addClass = function (className) {
        try {
            this.elArr.forEach(function (el) {
                var classNameArr = el.className.split(' ');
                if (classNameArr.indexOf(className) === -1) {
                    classNameArr.push(className);
                    el.className = classNameArr.join(' ').trim();
                }
            }, this);
            return this;
        }
        catch (e) {
            return this;
        }
    };
    Elements.prototype.removeClass = function (class_name) {
        try {
            if (!this.hasClass(class_name)) {
                return this;
            }
            this.elArr.forEach(function (el) {
                var classNameArr = el.className.split(' ');
                classNameArr.splice(classNameArr.indexOf(class_name), 1);
                el.className = classNameArr.join(' ');
            }, this);
            return this;
        }
        catch (e) {
            return this;
        }
    };
    Elements.prototype.hasClass = function (class_name) {
        if (typeof class_name === 'undefined') {
            return false;
        }
        try {
            var classNameArr = this.elArr[0].className.split(' ');
            return classNameArr.indexOf(class_name) !== -1;
        }
        catch (e) {
            return false;
        }
    };
    Elements.prototype.append = function (elements) {
        var _this = this;
        try {
            this.elArr.forEach(function (currentEl) {
                if (Array.isArray(elements)) {
                    elements.forEach(function (el) {
                        var child = el.elArr ? el.elArr[0] || null : el;
                        currentEl.appendChild(child);
                    });
                    return _this;
                }
                var child = elements.elArr ? elements.elArr[0] || null : elements;
                currentEl.appendChild(child);
                return _this;
            }, this);
            return this;
        }
        catch (e) {
            return this;
        }
    };
    Elements.prototype.appendTo = function (elements) {
        var _this = this;
        try {
            this.elArr.forEach(function (currentEl) {
                if (Array.isArray(elements)) {
                    elements.forEach(function (elChild) {
                        var ele = elChild.elArr ? elChild.elArr[0] || null : elChild;
                        ele.appendChild(currentEl);
                    });
                    return _this;
                }
                var ele = elements.elArr ? elements.elArr[0] || null : elements;
                ele.appendChild(currentEl);
                return _this;
            }, this);
            return this;
        }
        catch (e) {
            window.console.error(e);
            return this;
        }
    };
    Elements.prototype.prepend = function (elements) {
        var _this = this;
        try {
            this.elArr.forEach(function (currentEl) {
                if (Array.isArray(elements)) {
                    elements.forEach(function (el) {
                        currentEl.insertBefore(el.elArr ? el.elArr[0] || null : el, currentEl.firstChild);
                    });
                    return _this;
                }
                var domElement = elements.elArr ? elements.elArr[0] || null : elements;
                currentEl.insertBefore(domElement, currentEl.firstChild);
                return _this;
            });
            return this;
        }
        catch (e) {
            return this;
        }
    };
    return Elements;
}());
var elements = function (selector) {
    return new Elements(selector);
};
var helper = {
    elements: elements
};
export { elements };
export default helper;
