module.exports = {
  create: function(context) {
    return {
      TaggedTemplateExpression(node) {
        const pattern = '\\s+(\\?|\\.|@)?[a-zA-z]+=(?!")';
        const regex = new RegExp(pattern);
        if (
          node.type === "TaggedTemplateExpression" &&
          node.tag.type === "Identifier"
        ) {
          for (let i = 0; i < node.quasi.quasis.length; i++) {
            const quasi = node.quasi.quasis[i];
            const quasiText = context.getSourceCode().getText(quasi);
            if (!regex.test(quasiText)) continue;
            context.report({
              node: quasi,
              message: `Please enclose the attribute value with double-quotation for XSS vulnerability prevention.
              ex: ?disabled="\${this.disabled}"
                  value="\${item.value !== undefined ? item.value : ""}"
                  type="button"
              `
            });
          }
        }
      }
    };
  }
};
