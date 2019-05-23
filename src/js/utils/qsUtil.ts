const elements = (selector) => {
    let elementArray = [];
    if (typeof selector === 'string') {
        let elNodeList = document.querySelectorAll(selector);
        elementArray = Array.prototype.slice.call(elNodeList);
    } else {
        elementArray.push(selector);
    }
    return {
        elArr: elementArray,
        on: (eventName, callbackFunction) => {
            this.each(function(el) {
                el.addEventListener(eventName, callbackFunction);
            });
            return this;
        },
        each: (callbackFunction) => {
            this.elArr.forEach(function(el, index) {
                callbackFunction(el, index);
            }, this);
        },
        data: (dataKey, dataValue) => {
            let prefixKey = 'data-';
            if (typeof dataValue === 'undefined') {
                return this.elArr[0].getAttribute(prefixKey + dataKey);
            }
            try {
                this.elArr.forEach(function(el) {
                    this.attr(prefixKey + dataKey, dataValue);
                }, this);
            } catch (e) {
                return false;
            }
            return this;
        },
        attr: (attrKey, attrValue) => {
            if (this.elArr.length === 0) {
                return typeof attrValue !== 'undefined' ? this : null;
            }
            if (typeof attrValue !== 'undefined') {
                this.elArr.forEach(function(el) {
                    el.setAttribute(attrKey, attrValue);
                }, this);
                return this;
            }
            return this.elArr[0].getAttribute(attrKey);
        },
        removeAttr: (attrKey) => {
            this.attr();
        },
        val: (value) => {
            if (this.elArr.length === 0) {
                return typeof value !== 'undefined' ? this : null;
            }
            if (typeof value !== 'undefined') {
                this.elArr.forEach(function(el) {
                    el.value = value;
                }, this);
                return this;
            }
            return this.elArr[0].value;
        },
        html: (value) => {
            if (this.elArr.length === 0) {
                return typeof value !== 'undefined' ? this : null;
            }
            if (typeof value !== 'undefined') {
                this.elArr.forEach(function(el) {
                    el.innerHTML = value;
                }, this);
                return this;
            }
            return this.elArr[0].innerHTML;
        },
        focus: () => {
            if (this.elArr.length === 0) {
                return;
            }
            this.elArr[0].focus();
        },
        remove: () => {
            if (this.elArr.length === 0) {
                return;
            }
            this.elArr.forEach(function(el) {
                try {
                    el.parentNode.removeChild(el);
                } catch (e) {
                    //
                }
            }, this);
        },
        trigger: (eventName) => {
            if (this.elArr.length === 0) {
                return;
            }
            this.elArr.forEach(function(el) {
                function createEvent() {
                    if (typeof Event === 'function') {
                        return new Event(eventName, {
                            'bubbles': true,
                            'cancelable': true
                        });
                    }
                    let event = document.createEvent('Event');
                    event.initEvent(eventName, true, true);

                    return event;
                }
                el.dispatchEvent(createEvent());
            }, this);

        },
        addClass: (className) => {
            try {
                this.elArr.forEach(function(el) {
                    let classNameArr = el.className.split(' ');
                    if (classNameArr.indexOf(className) === -1) {
                        classNameArr.push(className);
                        el.className = classNameArr.join(' ').trim();
                    }
                }, this);
                return this;
            } catch (e) {
                return this;
            }
        },
        removeClass: (class_name) => {
            try {
                if (!this.hasClass(class_name)) {
                    return this;
                }
                this.elArr.forEach(function(el) {
                    let classNameArr = el.className.split(' ');
                    classNameArr.splice(classNameArr.indexOf(class_name), 1);
                    el.className = classNameArr.join(' ');
                }, this);

                return this;
            } catch (e) {
                return this;
            }
        },
        hasClass: (class_name) => {
            if (typeof class_name === 'undefined') {
                return false;
            }
            try {
                let classNameArr = this.elArr[0].className.split(' ');
                return classNameArr.indexOf(class_name) !== -1;
            } catch (e) {
                return false;
            }
        },
        append: (elements) => {
            try {
                this.elArr.forEach(function(currentEl) {
                    if (elements.constructor === Array) {
                        elements.forEach(function(el) {
                            currentEl.appendChild(el.elArr ? el.elArr[0] || null : el);
                        });
                        return this;
                    }
                    currentEl.appendChild(elements.elArr ? elements.elArr[0] || null : elements);
                }, this);
                return this;
            } catch (e) {
                return this;
            }
        },
        appendTo: (elements) => {
            try {
                this.elArr.forEach(function(currentEl) {
                    if (elements.constructor === Array) {
                        elements.forEach(function(elChild) {
                            let ele = elChild.elArr ? elChild.elArr[0] || null : elChild;
                            ele.appendChild(currentEl);
                        });
                        return this;
                    }
                    let ele = elements.elArr ? elements.elArr[0] || null : elements;
                    ele.appendChild(currentEl);
                }, this);
                return this;
            } catch (e) {
                window.console.error(e);
                return this;
            }
        },
        prepend: (element) => {
            try {
                this.elArr.forEach(function(currentEl) {
                    if (element.constructor === Array) {
                        element.forEach(function(el) {
                            currentEl.insertBefore(el.elArr ? el.elArr[0] || null : el,
                                currentEl.firstChild);
                        });
                        return this;
                    }
                    currentEl.insertBefore(element.elArr ? element.elArr[0] || null : element,
                        currentEl.firstChild);
                });
                return this;
            } catch (e) {
                return this;
            }
        }
    };
}

let helper = {
    elements: elements
}

export {
    elements
}
export default helper