import{n as e}from"./chunk-BneVvdWh.js";import{s as t,t as n}from"./iframe-HX9z8Taj.js";import{t as r}from"./pagination-D6qjLMah.js";var i,a,o,s;e((()=>{n(),r(),i={title:`base/pagination`,argTypes:{pagePosition:{name:`pagePosition`},rowsPerPage:{name:`rowsPerPage`},total:{name:`total`},visible:{name:`visible`},isNext:{name:`isNext`},isPrev:{name:`isPrev`}},parameters:{actions:{handles:[`kuc:pagination-click-prev`,`kuc:pagination-click-next`]}}},a=e=>t`
    <kuc-base-pagination
      .pagePosition="${e.pagePosition}"
      .rowsPerPage="${e.rowsPerPage}"
      .total="${e.total}"
      .visible="${e.visible}"
      .isNext="${e.isNext}"
      .isPrev="${e.isPrev}"
    ></kuc-base-pagination>
  `,o=a.bind({}),o.args={pagePosition:1,rowsPerPage:5,total:7,visible:!0,isPrev:!0,isNext:!0},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  return html\`
    <kuc-base-pagination
      .pagePosition="\${args.pagePosition}"
      .rowsPerPage="\${args.rowsPerPage}"
      .total="\${args.total}"
      .visible="\${args.visible}"
      .isNext="\${args.isNext}"
      .isPrev="\${args.isPrev}"
    ></kuc-base-pagination>
  \`;
}`,...o.parameters?.docs?.source}}},s=[`Base`]}))();export{o as Base,s as __namedExportsOrder,i as default};