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

    return {
      ClassDeclaration: function(node) {
        const superClass = node.superClass.name;
        if (superClass !== "KucBase") return;

        const nodeBody = node.body;
        if (nodeBody.type !== "ClassBody") return;

        const properties = [];
        nodeBody.body.forEach(prop => {
          if (
            prop.type === "ClassProperty" &&
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
                typeValue = sourceCode.getTokenByRangeStart(
                  prop.typeAnnotation.typeAnnotation.range[0]
                ).value;
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
        const props = node.typeAnnotation.members;
        const propInfos = props.map(prop => {
          const type = prop.typeAnnotation.typeAnnotation;
          const typeValue = sourceCode.getTokenByRangeStart(type.range[0])
            .value;

          return { name: prop.key.name, type: typeValue };
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
    };
  }
};
