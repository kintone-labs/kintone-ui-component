import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{n as r}from"./multichoice-BlSAEuPb.js";var i,a,o,s,c;e((()=>{n(),r(),i={title:`desktop/multi-choice`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},items:{name:`items`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},selectedIndex:{name:`selectedIndex`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}}},a=e=>t`
    <kuc-multi-choice
      .className="${e.className}"
      .disabled="${e.disabled}"
      .error="${e.error}"
      .id="${e.id}"
      .items="${e.items}"
      .label="${e.label}"
      .requiredIcon="${e.requiredIcon}"
      .selectedIndex="${e.selectedIndex}"
      .value="${e.value}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
    ></kuc-multi-choice>
  `,o=a.bind({}),o.args={label:`Mutiple-Choice`,requiredIcon:!0,items:[{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`},{label:`Item 2`,value:`item-2`},{label:`Item 3`,value:`item-3`,disabled:!0},{label:`Item 4`,value:`item-4`,disabled:!0},{label:`Item 5`,value:`item-5`},{label:`Item 3`,value:`item-3`,disabled:!0}],value:[`item-1`,`item-2`],selectedIndex:[0,1],error:`Error occurred!`,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1},s=a.bind({}),s.args={label:`Mutiple-Choice`,requiredIcon:!0,items:[{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`},{label:`Item 3`,value:`item-3`},{label:`Item 4`,value:`item-4`},{label:`Item 5`,value:`item-5`},{label:`Item 6`,value:`item-6`},{label:`Item 7`,value:`item-7`}],value:[`item-1`,`item-3`],selectedIndex:[0,2],error:`Error occurred!`,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!0},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const handleMultiChoiceChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-multi-choice
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleMultiChoiceChange}"
    ></kuc-multi-choice>
  \`;
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const handleMultiChoiceChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-multi-choice
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleMultiChoiceChange}"
    ></kuc-multi-choice>
  \`;
}`,...s.parameters?.docs?.source}}},c=[`Base`,`Base1`]}))();export{o as Base,s as Base1,c as __namedExportsOrder,i as default};