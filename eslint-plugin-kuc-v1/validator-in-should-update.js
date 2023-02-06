module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;

        const nodeBody = node.body;
        if (nodeBody.type !== "ClassBody") return;

        const sourceCode = context.getSourceCode();
        const baseValidatorPattern = '\\./base/validator"';
        const baseValidatorRegex = new RegExp(baseValidatorPattern);
        if (!baseValidatorRegex.test(sourceCode.getText()))
          return;

        const pattern = "validate[a-zA-z]+\\(";
        const regex = new RegExp(pattern);
        if (!regex.test(sourceCode.getText())) return;

        nodeBody.body.forEach(body => {
          if (
            body.type === "MethodDefinition" &&
            body.key.type === "Identifier" &&
            !body.computed
          ) {
            const functionSourceCode = sourceCode.getText(body.value);
            if (
              body.kind !== "constructor" &&
              body.key.name !== "shouldUpdate" &&
              body.key.name !== "_setInitialValue" &&
              regex.test(functionSourceCode)
            ) {
              context.report({
                node: body,
                message: `Please call validator function inside shouldUpdate() lifecycle
                ex: shouldUpdate(changedProperties: PropertyValues):boolean {
                      if (changedProperties.has("items")) {
                        if (!validateItems(this.items)) {
                          this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.ITEMS.IS_NOT_ARRAY);
                          return false;
                        }
                      }
                      return true;
                    }`
              });
            }
          }
        });
      }
    };
  }
};
