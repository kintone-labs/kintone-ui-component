module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const physicalFilename = context.getPhysicalFilename();
        const ignorePath = "^.*(type.ts).*$";
        const regexPath = new RegExp(ignorePath, "i");
        if (regexPath.test(physicalFilename)) return;

        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;

        const nodeBody = node.body;
        if (nodeBody.type !== "ClassBody") return;

        const sourceCode = context.getSourceCode();
        const pattern = "super\\.update\\(";
        const regex = new RegExp(pattern);

        nodeBody.body.forEach(body => {
          if (
            body.type === "MethodDefinition" &&
            body.key.type === "Identifier" &&
            body.key.name === "update" &&
            !body.computed
          ) {
            const functionSourceCode = sourceCode.getText(body.value);
            if (regex.test(functionSourceCode)) return;

            context.report({
              node: body,
              message: `Please write super.update(changedProperties) using PropertyValues to map the changed properties with old values in the update lifecycle.
              ex: update(changedProperties: PropertyValues) {
                    super.update(changedProperties);
                  }`
            });
          }
        });
      }
    };
  }
};
