import jss from 'jss';
import {mergeDeep} from './mergeDeep';
import jssPluginSyntaxGlobal from 'jss-plugin-global';
import jssPluginSyntaxNested from 'jss-plugin-nested';

const injectStyle = (style: any) => {
  // initialize jss instance the first time for while kuc
  if(!jss['initialized']) {
    jss.setup();
    jss.use(jssPluginSyntaxGlobal(), jssPluginSyntaxNested());
    jss['initialized'] = true;
  }

  // check if there is already style from kuc
  if(jss['current-style-object']) {
    // merge current style object with new imported style
    const mergedStyle = mergeDeep(jss['current-style-object'], style);
    // Compile styles to css sheet and attach to DOM.
    _compileStyleAndAttachToDOM(mergedStyle);
  } else {
    // Compile styles to css sheet and attach to DOM.
    _compileStyleAndAttachToDOM(style);
  }
}

const _compileStyleAndAttachToDOM = (style: any) => {
  const sheet = jss.createStyleSheet(style as any);
  // remove old stylesheet from global scope
  if(jss['current-style-sheet']) {
    jss.removeStyleSheet(jss['current-style-sheet']);
  }
  jss['current-style-sheet'] = sheet;
  jss['current-style-object'] = style;
  sheet.attach();
}

export default injectStyle
