import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{n as r}from"./radio-button-BnvMydlj.js";var i,a,o,s,c,l;e((()=>{n(),r(),i={title:`desktop/radio-button`,argTypes:{borderVisible:{name:`borderVisible`},className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},items:{name:`items`},itemLayout:{name:`itemLayout`,options:[`horizontal`,`vertical`],control:{type:`select`}},label:{name:`label`},requiredIcon:{name:`requiredIcon`},selectedIndex:{name:`selectedIndex`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}}},a=e=>t`
    <kuc-radio-button
      .className="${e.className}"
      .borderVisible="${e.borderVisible}"
      .disabled="${e.disabled}"
      .error="${e.error}"
      .id="${e.id}"
      .items="${e.items}"
      .itemLayout="${e.itemLayout}"
      .label="${e.label}"
      .requiredIcon="${e.requiredIcon}"
      .selectedIndex="${e.selectedIndex}"
      .value="${e.value}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
    ></kuc-radio-button>
  `,o=a.bind({}),o.args={borderVisible:!0,className:`sample-class`,items:[{label:`item-1`,value:`item-1`,disabled:!0},{label:`item-2`,value:`item-2`},{label:`item-3`,value:`item-3`},{label:`item-3-duplicated`,value:`item-3`}],itemLayout:`vertical`,id:`sample-id`,value:`item-3`,visible:!0,selectedIndex:0,label:`フルーツ一覧`,requiredIcon:!0,disabled:!1,error:`エラーです`},s=a.bind({}),s.args={items:[{label:`Item 1`,value:`item-1`,disabled:!0},{label:`Item 2`,value:`item-2`},{label:`Item 3`,value:`item-3`}],value:`item-1`,selectedIndex:1,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!0,borderVisible:!0,itemLayout:`vertical`,label:`Radio button`,requiredIcon:!0,error:`Error occurred!`},c=a.bind({}),c.args={items:[{label:`Item 1`,value:`item-1`},{label:`Item 2`,value:`item-2`},{label:`Item 3`,value:`item-3`,disabled:!0}],value:`item-1`,selectedIndex:3,className:`sample-class`,id:`sample-id`,visible:!0,disabled:!1,borderVisible:!0,itemLayout:`horizontal`,label:`Radio button`,requiredIcon:!0,error:`Error occurred!`},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const handleRadioButtonChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-radio-button
      .className="\${args.className}"
      .borderVisible="\${args.borderVisible}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .itemLayout="\${args.itemLayout}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleRadioButtonChange}"
    ></kuc-radio-button>
  \`;
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const handleRadioButtonChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-radio-button
      .className="\${args.className}"
      .borderVisible="\${args.borderVisible}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .itemLayout="\${args.itemLayout}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleRadioButtonChange}"
    ></kuc-radio-button>
  \`;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const handleRadioButtonChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-radio-button
      .className="\${args.className}"
      .borderVisible="\${args.borderVisible}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .items="\${args.items}"
      .itemLayout="\${args.itemLayout}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .selectedIndex="\${args.selectedIndex}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleRadioButtonChange}"
    ></kuc-radio-button>
  \`;
}`,...c.parameters?.docs?.source}}},l=[`Base`,`Base1`,`Base2`]}))();export{o as Base,s as Base1,c as Base2,l as __namedExportsOrder,i as default};