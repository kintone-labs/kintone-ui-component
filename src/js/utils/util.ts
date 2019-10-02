class Elements {
  private elArr: HTMLElement[] = []

  constructor(selector: string | HTMLElement) {
    if (typeof selector === 'string') {
      const elNodeList = document.querySelectorAll(selector);
      this.elArr = Array.prototype.slice.call(elNodeList);
    } else {
      this.elArr.push(selector);
    }
  }

  on(eventName: string, callbackFunction: EventListener) {
    this.each((el: HTMLElement) => {
      el.addEventListener(eventName, callbackFunction);
    });
    return this;
  }

  each(callbackFunction: (el: HTMLElement) => void) {
    this.elArr.forEach((el) => {
      callbackFunction(el);
    }, this);
  }

  data(dataKey: number, dataValue: any) {
    const prefixKey = 'data-';
    if (typeof dataValue === 'undefined') {
      return this.elArr[0].getAttribute(prefixKey + dataKey);
    }
    try {
      this.elArr.forEach(() => {
        this.attr(prefixKey + dataKey, dataValue);
      }, this);
    } catch (e) {
      return false;
    }
    return this;
  }

  attr(attrKey: string, attrValue: any) {
    if (this.elArr.length === 0) {
      return typeof attrValue !== 'undefined' ? this : null;
    }
    if (typeof attrValue !== 'undefined') {
      this.elArr.forEach((el) => {
        el.setAttribute(attrKey, attrValue);
      }, this);
      return this;
    }
    return this.elArr[0].getAttribute(attrKey);
  }

  removeAttr(attrKey: string) {
    this.elArr.forEach((el) => {
      el.removeAttribute(attrKey);
    }, this);
    return this;
  }

  val(value: any) {
    if (this.elArr.length === 0) {
      return typeof value !== 'undefined' ? this : null;
    }
    if (typeof value !== 'undefined') {
      this.elArr.forEach((el) => {
        (el as any).value = value;
      }, this);
      return this;
    }
    return (this.elArr[0] as any).value;
  }

  html(value: any) {
    if (this.elArr.length === 0) {
      return typeof value !== 'undefined' ? this : null;
    }
    if (typeof value !== 'undefined') {
      this.elArr.forEach((el) => {
        el.innerHTML = value;
      }, this);
      return this;
    }
    return this.elArr[0].innerHTML;
  }

  focus() {
    if (this.elArr.length === 0) {
      return;
    }
    this.elArr[0].focus();
  }

  remove() {
    if (this.elArr.length === 0) {
      return;
    }
    this.elArr.forEach((el) => {
      try {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      } catch (e) {
        //
      }
    }, this);
  }

  trigger(eventName: string) {
    if (this.elArr.length === 0) {
      return;
    }
    this.elArr.forEach((el) => {
      function createEvent() {
        if (typeof Event === 'function') {
          return new Event(eventName, {
            'bubbles': true,
            'cancelable': true
          });
        }
        const event = document.createEvent('Event');
        event.initEvent(eventName, true, true);

        return event;
      }
      el.dispatchEvent(createEvent());
    }, this);
  }

  addClass(className: string) {
    try {
      this.elArr.forEach((el) => {
        const classNameArr = el.className.split(' ');
        if (classNameArr.indexOf(className) === -1) {
          classNameArr.push(className);
          el.className = classNameArr.join(' ').trim();
        }
      }, this);
      return this;
    } catch (e) {
      return this;
    }
  }

  removeClass(class_name: string) {
    try {
      if (!this.hasClass(class_name)) {
        return this;
      }
      this.elArr.forEach((el) => {
        const classNameArr = el.className.split(' ');
        classNameArr.splice(classNameArr.indexOf(class_name), 1);
        el.className = classNameArr.join(' ');
      }, this);

      return this;
    } catch (e) {
      return this;
    }
  }

  hasClass(class_name: string) {
    if (typeof class_name === 'undefined') {
      return false;
    }
    try {
      const classNameArr = this.elArr[0].className.split(' ');
      return classNameArr.indexOf(class_name) !== -1;
    } catch (e) {
      return false;
    }
  }

  append(elements: Elements[]|HTMLElement[]|Elements|HTMLElement) {
    try {
      this.elArr.forEach((currentEl) => {
        if (Array.isArray(elements)) {
          elements.forEach((el: Elements | HTMLElement) => {
            const child = (el as Elements).elArr ? (el as Elements).elArr[0] || null : el as HTMLElement;
            currentEl.appendChild(child);
          });
          return this;
        }
        const child = (elements as Elements).elArr ? (elements as Elements).elArr[0] || null : elements as HTMLElement;
        currentEl.appendChild(child);
        return this;
      }, this);
      return this;
    } catch (e) {
      return this;
    }
  }

  appendTo(elements: Elements[]|HTMLElement[]|Elements|HTMLElement) {
    try {
      this.elArr.forEach((currentEl) => {
        if (Array.isArray(elements)) {
          elements.forEach((elChild: Elements | HTMLElement) => {
            const ele = (elChild as Elements).elArr ? (elChild as Elements).elArr[0] || null : elChild as HTMLElement;
            ele.appendChild(currentEl);
          });
          return this;
        }
        const ele = (elements as Elements).elArr ? (elements as Elements).elArr[0] || null : elements as HTMLElement;
        ele.appendChild(currentEl);
        return this;
      }, this);
      return this;
    } catch (e) {
      window.console.error(e);
      return this;
    }
  }

  prepend(elements: Elements[]|HTMLElement[]|Elements|HTMLElement) {
    try {
      this.elArr.forEach((currentEl) => {
        if (Array.isArray(elements)) {
          elements.forEach((el: Elements | HTMLElement) => {
            currentEl.insertBefore((el as Elements).elArr ? (el as Elements).elArr[0] || null : el as HTMLElement,
              currentEl.firstChild);
          });
          return this;
        }
        const domElement = (elements as Elements).elArr ? (elements as Elements).elArr[0] || null : elements as HTMLElement;
        currentEl.insertBefore(domElement, currentEl.firstChild);
        return this;
      });
      return this;
    } catch (e) {
      return this;
    }
  }
}

const elements = function(selector: any) {
  return new Elements(selector);
};

const helper = {
  elements: elements
};

export {
  elements
};
export default helper;
