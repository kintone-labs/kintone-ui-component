import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./date-picker-4749uxp9.js";var r,i,a,o;e((()=>{t(),r={title:`desktop/date-picker`,argTypes:{className:{name:`className`},disabled:{name:`disabled`},error:{name:`error`},id:{name:`id`},label:{name:`label`},language:{name:`language`,options:[`auto`,`en`,`ja`,`zh`,`zh-TW`,`es`],control:{type:`select`}},requiredIcon:{name:`requiredIcon`},value:{name:`value`},visible:{name:`visible`}},parameters:{actions:{handles:[`change`]}}},i=e=>{let t=new n({...e});return t.addEventListener(`change`,e=>{console.log(e)}),t},a=i.bind({}),a.args={className:`date-picker-class`,disabled:!1,error:`Error occured`,id:`date-picker-id`,label:`Date Picker Label`,language:`en`,requiredIcon:!1,value:`2021-03-12`,visible:!0},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const datePicker = new DatePicker({
    ...args
  });
  datePicker.addEventListener("change", event => {
    console.log(event);
  });
  return datePicker;
}`,...a.parameters?.docs?.source}}},o=[`Base`]}))();export{a as Base,o as __namedExportsOrder,r as default};