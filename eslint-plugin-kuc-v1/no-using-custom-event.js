module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        const sourceCode = context.getSourceCode().getText();
        const pattern = "new CustomEvent\\(";
        const regex = new RegExp(pattern, "i");
        if (superClass === "KucBase" && regex.test(sourceCode)) {
          context.report({
            node: node,
            message: `Please using dispatchCustomEvent from kuc-base
            import { dispatchCustomEvent } from "../base/kuc-base";
            private _handleUpdateValue(value: string) {
              dispatchCustomEvent(this, "change", {});
            }
            `
          });
        }
        if (superClass === "LitElement" && !regex.test(sourceCode)) {
          context.report({
            node: node,
            message: `Please using CustomEvent to implement events handling
            ex: export const dispatchCustomEvent(el: HTMLElement, eventName: string, detail?: CustomEventDetail) {
              const event = new CustomEvent(eventName, {
                detail,
                bubbles: true,
                composed: true
              });
              return el.dispatchEvent(event);
            }`
          });
        }
      }
    };
  }
};
