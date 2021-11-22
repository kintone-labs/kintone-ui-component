module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass === "KucBase") return;

        if (superClass === "LitElement") {
          const sourceCode = context.getSourceCode().getText();
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
        } else {
          context.report({
            node: node,
            message: `Please inherit from KucBase
            ex: export class MyButton extends KucBase {
              ......
            }`
          });
        }
      }
    };
  }
};
