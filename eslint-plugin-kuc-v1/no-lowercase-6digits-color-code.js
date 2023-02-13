module.exports = {
  create: function(context) {
    function checkColorCodes(node) {
      const sourceCode = context.getSourceCode().getText();
      const pattern = "(?<!url\\()\\#(?![a-f0-9]{6})";
      const regex = new RegExp(pattern, "g");
      if (!regex.test(sourceCode)) return;

      context.report({
        node: node,
        message: `Color codes should be written in lowercase and 6 digits
          ex: #d4d7d7;`,
      });
    }

    return {
      VariableDeclaration: function(node) {
        const physicalFilename = context.getPhysicalFilename();
        const styleTsFileName = "^.*(style\.ts).*$";
        const regexPath = new RegExp(styleTsFileName, "i");
        if (!regexPath.test(physicalFilename)) return;

        checkColorCodes(node);
      },
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;

        checkColorCodes(node);
      }
    };
  }
};
