module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const physicalFilename = context.getPhysicalFilename();
        const ignorePath = "^.*(.stories.js|[/\\\\]src[/\\\\]base[/\\\\]).*$";
        const regexPath = new RegExp(ignorePath, "i");
        if (regexPath.test(physicalFilename)) return;

        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;
        const sourceCode = context.getSourceCode().getText();
        const pattern = "return html([\\s\\S]*?)<style>([\\s\\S]*?)";
        const regex = new RegExp(pattern, "i");
        if (regex.test(sourceCode)) return;
        context.report({
          node: node,
          message: `Please describe style tag inside HTML to perform the styling.
          ex: render() {
            return html\`
              <style>
                kuc-component {
                  display: inline-block;
                }
              </style>
            \`;
          }`
        });
      }
    };
  }
};
