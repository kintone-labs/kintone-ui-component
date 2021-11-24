module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const physicalFilename = context.getPhysicalFilename();
        const ignorePath = "^.*(.stories.js).*$";
        const regexPath = new RegExp(ignorePath, "i");
        if (regexPath.test(physicalFilename)) return;

        const superClass = node.superClass.name;
        const sourceCode = context.getSourceCode().getText();
        const pattern = "new CustomEvent\\(";
        const regex = new RegExp(pattern, "i");
        if (superClass === "KucBase" && regex.test(sourceCode)) {
          context.report({
            node: node,
            message: `Please using dispatchCustomEvent from kuc-base
            import { dispatchCustomEvent } from "../base/kuc-base";
            private _handleUpdateValue(value: string) {
              dispatchCustomEvent(this, "change", {});
            }
            `
          });
        }
      }
    };
  }
};
