(function (arr) {
    arr.forEach(function (item) {
        if (!Object.prototype.hasOwnProperty.call(item, 'append')) {
            Object.defineProperty(item, 'append', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function append() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var docFrag = document.createDocumentFragment();
                    args.forEach(function (argItem) {
                        var isNode = argItem instanceof Node;
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
                    if (this.parentNode !== null)
                        this.parentNode.removeChild(this);
                }
            });
        }
        if (!Object.prototype.hasOwnProperty.call(item, 'prepend')) {
            Object.defineProperty(item, 'prepend', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function prepend() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var docFrag = document.createDocumentFragment();
                    args.forEach(function (argItem) {
                        var isNode = argItem instanceof Node;
                        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                    });
                    this.insertBefore(docFrag, this.firstChild);
                }
            });
        }
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        /* eslint-disable @typescript-eslint/no-this-alias */
        var el = this;
        do {
            if (el.matches && el.matches(s))
                return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}
