import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{n as r}from"./dropdown-BbOEfyZ5.js";var i,a,o,s,c,l,u;e((()=>{n(),r(),i={title:`desktop/dropdown`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},items:{name:`items`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},selectedIndex:{name:`selectedIndex`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}}},a=e=>t`
    <kuc-dropdown
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
    ></kuc-dropdown>
  `,o=a.bind({}),o.args={className:`sample-class`,id:`sample-id`,items:[{label:`-----`,value:``},{label:`Orange`,value:`orange`},{label:`Apple`,value:`apple`}],value:``,selectedIndex:0,label:`フルーツ一覧`,requiredIcon:!0,visible:!0,disabled:!1,error:`エラーです`},s=a.bind({}),s.args={className:`sample-class`,id:`sample-id`,items:[{label:`-----`,value:`-----`},{label:`Orange`,value:`orange`,disabled:!0},{label:`Apple`,value:`apple`},{label:`Apple`,value:`apple`}],value:`apple`,selectedIndex:3,label:`フルーツ一覧`,requiredIcon:!0,visible:!0,disabled:!1,error:`エラーです`},c=e=>t`
    <div>
      <div style="height:100px"></div>
      <kuc-dropdown
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
      ></kuc-dropdown>
    </div>
  `,l=c.bind({}),l.args={label:`Dropdown`,id:`sample-id`,items:[{label:`Sample 1 Sample 1 Sample 1 Sample 1 Sample 1 Sample 1 Sample 1`,value:`Sample 1`},{label:`Sample 2`,value:`Sample 2`}],value:``,selectedIndex:0,error:`Error`,visible:!0},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const handleDropDownChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-dropdown
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
      @change="\${handleDropDownChange}"
    ></kuc-dropdown>
  \`;
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const handleDropDownChange = event => {
    console.log(event);
  };
  return html\`
    <kuc-dropdown
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
      @change="\${handleDropDownChange}"
    ></kuc-dropdown>
  \`;
}`,...s.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const handleDropDownChange = event => {
    console.log(event);
  };
  return html\`
    <div>
      <div style="height:100px"></div>
      <kuc-dropdown
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
        @change="\${handleDropDownChange}"
      ></kuc-dropdown>
    </div>
  \`;
}`,...l.parameters?.docs?.source}}},u=[`Base`,`Base1`,`Base2`]}))();export{o as Base,s as Base1,l as Base2,u as __namedExportsOrder,i as default};