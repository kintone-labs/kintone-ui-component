module.exports = {
    create: function(context) {
      return {
        ClassDeclaration: function(node) {
          const superClass = node.superClass.name;
          if (superClass !== "KucBase") return;
          const sourceCode = context.getSourceCode().getText();
          //const pattern = 'class="(?!(kuc-))';
          const pattern = '(@click)((?!_handleClick).)*$';

          // rule by Sider 
          //regexp: (@click)((?!_handleClick).)*$
          //regexp: (@change)((?!_handleChange).)*$
          //regexp: (@focus)((?!_handleFocus).)*$
          //regexp: (@blur)((?!_handleBlur).)*$
          //regexp: (@keydown)((?!_handleKeyDown).)*$
          //regexp: (@mousedown)((?!_handleMouseDown).)*$
          //regexp: (@mouseover)((?!_handleMouseOver).)*$
          //regexp: (@mouseleave)((?!_handleMouseLeave).)*$
          const regex = new RegExp(pattern, "g");
          if (!regex.test(sourceCode)) return;
          context.report({
            node: node,
            message: `Name of function for internal event handler processing
            will be name as “handle + event handler name + Element name”
            ex: _handleClickDropdownToggle
                _handleChangeDropdownToggle
                ...`
          });
        }
      };
    }
  };
  