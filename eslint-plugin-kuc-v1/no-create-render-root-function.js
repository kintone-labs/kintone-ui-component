module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "LitElement") return;
        const sourceCode = context.sourceCode.getText();
        const pattern = "public createRenderRoot\\(\\)";
        const regex = new RegExp(pattern, "i");
        if (regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Please add createRenderRoot function to this file
          ex: public createRenderRoot() {
            return this;
          }`
        });
      }
    };
  }
};
