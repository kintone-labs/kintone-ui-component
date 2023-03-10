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

        const pattern = "([^_]|^)validate[a-zA-z]+\\(";
        const regex = new RegExp(pattern);
        if (!regex.test(sourceCode.getText())) return;

        nodeBody.body.forEach(body => {
          if (
            body.type === "MethodDefinition" &&
            body.key.type === "Identifier" &&
            !body.computed
          ) {
            const functionSourceCode = sourceCode.getText(body.value);
            const ignoredFunctionList = [
              "_setInitialValue",
              "_checkAndUpdateMaxMinProperty",
              "_checkAndUpdateTimeStepProperty",
              "_handleClickPreviousButton",
              "_handleClickNextButton",
              "_getErrorMessageWhenValidateColumns",
              "_getErrorValidateColumnsAndData",
              "_getFileSize"
            ];
            if (
              body.kind !== "constructor" &&
              body.key.name !== "shouldUpdate" &&
              !ignoredFunctionList.includes(body.key.name) &&
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
