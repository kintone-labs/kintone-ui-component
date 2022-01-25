module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass === "KucBase" || superClass === "LitElement") return;
        context.report({
          node: node,
          message: `Please inherit from KucBase
            ex: export class MyButton extends KucBase {
              ......
            }`
        });
      }
    };
  }
};
