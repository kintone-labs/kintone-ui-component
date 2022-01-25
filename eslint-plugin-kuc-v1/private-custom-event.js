module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;

        const sourceCode = context.getSourceCode().getText();
        const pattern =
          'dispatchCustomEvent\\(this, "kuc:(?![a-zA-Z]+(-[a-zA-Z]+)*")';
        const regex = new RegExp(pattern, "g");
        if (!regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Name of private custom event will be named "kuc: + component name + event name + element name"
          ex: dispatchCustomEvent(this, "kuc:calendar-footer-click-today");`
        });
      }
    };
  }
};
