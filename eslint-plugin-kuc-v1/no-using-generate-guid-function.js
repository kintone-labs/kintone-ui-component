module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;
        const sourceCode = context.getSourceCode().getText();
        const pattern =
          '\\s(aria-describedby|aria-describedby|id|name|for)="(?!\\$\\{this\\._GUID\\}-)[^"]+"';
        const regex = new RegExp(pattern, "g");
        if (!regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Please put uuid to id using generateGUID function
          ex: <div
                class="kuc-multi-choice__group__label"
                id="\${this._GUID}-label">
              </div>`
        });
      }
    };
  }
};
