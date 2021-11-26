module.exports = {
  create: function(context) {
    return {
      ClassDeclaration: function(node) {
        const physicalFilename = context.getPhysicalFilename();
        const ignorePath = "^.*(.stories.js).*$";
        const regexPath = new RegExp(ignorePath, "i");
        if (regexPath.test(physicalFilename)) return;

        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;
        const sourceCode = context.getSourceCode().getText();
        
        // There is a way to get a list of type?
        // const typePattern = "type\\(\\)";;
        // const propertyPattern
        
        // const typeRegex = new RegExp(typePattern);
        // const propertyRegex = new RegExp(propertyPattern);
        // if (
        //   !typeRegex.test(sourceCode) &&
        //   !propertyRegex.test(sourceCode) 
        // )return;
    
        context.report({
          node: node,
          message: `Please Sort value inside type of typescript, @property, and value inside constructor in alphabetical order by type
            ex: type DropdownProps = {
                error?: string;
                label?: string;
                value?: string;
              };

              @property({ type: String }) error = "";
              @property({ type: String }) label = "";
              @property({ type: String }) value = "";`
        });
        
      }
    };
  }
};
