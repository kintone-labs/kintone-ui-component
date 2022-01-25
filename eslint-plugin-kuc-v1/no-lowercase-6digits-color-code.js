module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;
        const sourceCode = context.getSourceCode().getText();
        const pattern = "(?<!url\\()\\#(?![a-z0-9]{6})";
        const regex = new RegExp(pattern, "g");
        if (!regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Color codes should be written in lowercase and 6 digits
          ex: #d4d7d7;`
        });
      }
    };
  }
};
