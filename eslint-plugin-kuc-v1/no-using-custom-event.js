module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "LitElement") return;
        const sourceCode = context.getSourceCode().getText();
        const pattern = "new CustomEvent\\(";
        const regex = new RegExp(pattern, "i");
        if (regex.test(sourceCode)) return;
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
    };
  }
};
