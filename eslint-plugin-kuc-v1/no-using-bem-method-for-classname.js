module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;
        const sourceCode = context.getSourceCode().getText();
        const pattern =
          '\\s+class="kuc(?!((-[a-z]+)+(__[a-z]+(-[a-z]+)*)+(-{2}|\\s+|"|\\$)))';
        const regex = new RegExp(pattern, "g");
        if (!regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Please use BEM method for classname
            ex: kuc-button__button--submit`
        });
      }
    };
  }
};
