module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const physicalFilename = context.getPhysicalFilename();
        const ignorePath =
          "^.*[/\\\\]src[/\\\\]mobile[/\\\\]checkbox[/\\\\]index.ts$";
        const regexPath = new RegExp(ignorePath, "i");
        if (regexPath.test(physicalFilename)) return;

        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;
        const sourceCode = context.getSourceCode().getText();
        const pattern = "data\\:image\\/.*base64|\\.png";
        const regex = new RegExp(pattern, "g");
        if (!regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Please using svg element code
          ex: private _getCloseButtonSvgTemplate() {
            return svg\`
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"/>
              </svg>
            \`;
          }`
        });
      }
    };
  }
};
