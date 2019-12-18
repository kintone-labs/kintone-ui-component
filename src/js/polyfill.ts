(function(arr) {
  arr.forEach((item) => {
    if (!Object.prototype.hasOwnProperty.call(item, 'append')) {
      Object.defineProperty(item, 'append', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append(...args: any[]) {
          const docFrag = document.createDocumentFragment();

          args.forEach((argItem: any) => {
            const isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });

          this.appendChild(docFrag);
        }
      });
    }
    if (!Object.prototype.hasOwnProperty.call(item, 'remove')) {
      Object.defineProperty(item, 'remove', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) this.parentNode.removeChild(this);
        }
      });
    }
    if (!Object.prototype.hasOwnProperty.call(item, 'prepend')) {
      Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend(...args: any[]) {
          const docFrag = document.createDocumentFragment();
          args.forEach((argItem: any) => {
            const isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });

          this.insertBefore(docFrag, this.firstChild);
        }
      });
    }
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
if (!Element.prototype.matches) {
  Element.prototype.matches = (Element.prototype as any).msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s: any) {
    /* eslint-disable @typescript-eslint/no-this-alias */
    let el: Element | null = this;
    do {
      if (el.matches && el.matches(s)) return el;
      el = el.parentElement || el.parentNode as Element;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}