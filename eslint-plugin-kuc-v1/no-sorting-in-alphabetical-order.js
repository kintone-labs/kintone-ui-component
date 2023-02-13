module.exports = {
  meta: {
    messages: {
      propertyMessage: `{{wrongMessage}}
        The value inside @property should be sorted alphabetically by type.
        ex: @property({ type: String }) error = "";
            @property({ type: String }) label = "";
            @property({ type: String }) value = "";
            @property({ type: Boolean }) disabled = false;
            @property({
              type: Boolean,
              attribute: "hidden",
              reflect: true,
              converter: visiblePropConverter
            })
            visible = true;
      `,
      typeMessage: `{{wrongMessage}}
        The value inside type of typescript should be sorted alphabetically by type.
        ex: type DropdownProps = {
              error?: string;
              label?: string;
              value?: string;
              disabled?: boolean;
              visible?: boolean;
            };
      `
    }
  },
  create: function(context) {
    const sourceCode = context.getSourceCode();

    function checkNames(propInfos) {
      const group = {};
      propInfos.forEach(info => {
        if (!group[info.type]) group[info.type] = [];
        group[info.type].push(info.name);
      });

      const wrongOrderNames = [];
      Object.keys(group).forEach(type => {
        const names = group[type];
        let previousName = "";
        names.forEach(name => {
          if (name < previousName) {
            wrongOrderNames.push({ name, previousName });
          }
          previousName = name;
        });
      });

      return wrongOrderNames;
    }

    function createWrongMessage(wrongOrderNames) {
      return wrongOrderNames
        .map(
          wrongOrderName =>
            `"${wrongOrderName.previousName}" should be placed after "${wrongOrderName.name}"`
        )
        .join("\n");
    }
    function checkNameOrder(typeAnnotation, node){
      const props = typeAnnotation.members;
      if(!props){
        return;
      }
      const propInfos = [];
      props.forEach(prop => {
        if(!prop) return;
        if (prop.type !== "TSPropertySignature") return;
        if(!prop.typeAnnotation) return;
        if(!prop.typeAnnotation.typeAnnotation) return;
        const typeAnnotation = prop.typeAnnotation.typeAnnotation;
        let range = [];
        if(typeAnnotation.range && typeAnnotation.range[0]) range = typeAnnotation.range[0];
        if(range.length < 1) return;
        const typeValue = `${
          sourceCode.getTokenByRangeStart(range).value
        }_${typeAnnotation.type}`;

        propInfos.push({ name: prop.key.name, type: typeValue });
      });
      const wrongOrderNames = checkNames(propInfos);

      if (wrongOrderNames.length > 0) {
        context.report({
          node,
          messageId: "typeMessage",
          data: { wrongMessage: createWrongMessage(wrongOrderNames) }
        });
      }
    }

    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;

        const nodeBody = node.body;
        if (nodeBody.type !== "ClassBody") return;

        const properties = [];

        const physicalFilename = context.getPhysicalFilename();
        const typeFileName = "^.*(type\.ts).*$";
        const regexPath = new RegExp(typeFileName, "i");
        if (regexPath.test(physicalFilename)) { // check type.ts
          nodeBody.body.forEach(prop => {
            if (
              prop.type === "PropertyDefinition" &&
              prop.key.type === "Identifier" &&
              !prop.computed &&
              prop.typeAnnotation
            ) {
              const typeAnnotation = prop.typeAnnotation.typeAnnotation;
              const typeValue = `${
                sourceCode.getTokenByRangeStart(typeAnnotation.range[0]).value
              }_${typeAnnotation.type}`;

              properties.push({ name: prop.key.name, type: typeValue });
            }
          });
        } else {
          nodeBody.body.forEach(prop => {
            if (
              prop.type === "PropertyDefinition" &&
              prop.key.type === "Identifier" &&
              !prop.computed &&
              prop.decorators
            ) {
              const decorators = prop.decorators;
              if (
                decorators.length === 0 ||
                decorators[0].expression.callee.name !== "property"
              ) {
                return;
              }

              let typeValue = ""; // @property() b = "";
              const expressionArguments = decorators[0].expression.arguments;
              if (expressionArguments.length === 0) {
                if (prop.typeAnnotation) {
                  // @property() c: string = "";
                  const typeAnnotation = prop.typeAnnotation.typeAnnotation;
                  typeValue = `${
                    sourceCode.getTokenByRangeStart(typeAnnotation.range[0]).value
                  }_${typeAnnotation.type}`;
                }
              } else {
                // @property({ type: String }) a = "";
                const argumentProperties = expressionArguments[0].properties;
                argumentProperties.forEach(argumentProperty => {
                  if (argumentProperty.key.name === "type") {
                    typeValue = argumentProperty.value.name;
                  }
                });
              }

              properties.push({ name: prop.key.name, type: typeValue });
            }
          });
        }

        const wrongOrderNames = checkNames(properties);
        if (wrongOrderNames.length > 0) {
          context.report({
            node,
            messageId: "propertyMessage",
            data: { wrongMessage: createWrongMessage(wrongOrderNames) }
          });
        }
      },
      TSTypeAliasDeclaration: function(node) {
        const typeAnnotation = node.typeAnnotation;
        if(typeAnnotation.type === "TSFunctionType"){
          return;
        }
        if(typeAnnotation.type === "TSUnionType"){
          typeAnnotation.types.forEach(type =>{
            checkNameOrder(type, node);
          })
          return;
        }
        checkNameOrder(typeAnnotation, node);
      }
    };
  }
};
