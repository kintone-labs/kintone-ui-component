import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{n as r}from"./textarea-CzrU2iqj.js";var i,a,o,s;e((()=>{n(),r(),i={title:`desktop/textarea`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},label:{name:`label`},requiredIcon:{name:`requiredIcon`},placeholder:{name:`placeholder`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`,`focus`,`input`]}}},a=e=>t`
    <kuc-textarea
      .className="${e.className}"
      .disabled="${e.disabled}"
      .error="${e.error}"
      .id="${e.id}"
      .label="${e.label}"
      .requiredIcon="${e.requiredIcon}"
      .placeholder="${e.placeholder}"
      .value="${e.value}"
      .visible="${e.visible}"
      @change="${e=>{console.log(e)}}"
      @focus="${e=>{console.log(e)}}"
      @input="${e=>{console.log(e)}}"
    ></kuc-textarea>
  `,o=a.bind({}),o.args={label:`フルーツ`,requiredIcon:!0,value:`Apple`,error:`エラーです`,className:`options-class`,id:`options-id`,visible:!0,disabled:!1,placeholder:``},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const handleTextAreaChange = event => {
    console.log(event);
  };
  const handleTextAreaFocus = event => {
    console.log(event);
  };
  const handleTextAreaInput = event => {
    console.log(event);
  };
  return html\`
    <kuc-textarea
      .className="\${args.className}"
      .disabled="\${args.disabled}"
      .error="\${args.error}"
      .id="\${args.id}"
      .label="\${args.label}"
      .requiredIcon="\${args.requiredIcon}"
      .placeholder="\${args.placeholder}"
      .value="\${args.value}"
      .visible="\${args.visible}"
      @change="\${handleTextAreaChange}"
      @focus="\${handleTextAreaFocus}"
      @input="\${handleTextAreaInput}"
    ></kuc-textarea>
  \`;
}`,...o.parameters?.docs?.source}}},s=[`Base`]}))();export{o as Base,s as __namedExportsOrder,i as default};