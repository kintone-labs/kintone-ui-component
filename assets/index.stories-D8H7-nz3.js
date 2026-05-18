import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./tooltip-C-7vR1Rf.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r={title:`desktop/tooltip`,argTypes:{className:{name:`className`},id:{name:`id`},placement:{name:`placement`,options:[`top`,`bottom`,`left`,`right`],control:{type:`select`}},title:{name:`title`},container:{name:`container`},describeChild:{name:`describeChild`,type:`boolean`}},parameters:{actions:{handles:[`change`]}}},i=e=>{let t=document.createElement(`button`);return t.innerText=e,t},a=e=>{let t=document.createElement(`div`);t.style.marginTop=`150px`,t.style.marginLeft=`100px`;let r=new n({className:e.className,id:e.id,placement:e.placement,title:e.title,container:e.container,describeChild:e.describeChild});return t.appendChild(r),t},o=a.bind({}),o.args={className:`tooltip-class`,id:`tooltip-id`,placement:`bottom`,title:`Does not add if it already exists.`,container:i(`Bottom`),describeChild:!1},s=a.bind({}),s.args={className:`tooltip-class`,id:`tooltip-id`,placement:`top`,title:`top`,container:i(`Top`),describeChild:!1},c=a.bind({}),c.args={className:`tooltip-class`,id:`tooltip-id`,placement:`right`,title:`right`,container:i(`Right`),describeChild:!1},l=a.bind({}),l.args={className:`tooltip-class`,id:`tooltip-id`,placement:`left`,title:`left`,container:i(`Left`),describeChild:!1},u=a.bind({}),u.args={className:`tooltip-class`,id:`tooltip-id`,placement:`top`,title:`Tooltip`,container:`normal string`,describeChild:!1},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "150px";
  wrapper.style.marginLeft = "100px";
  const tooltip = new Tooltip({
    className: args.className,
    id: args.id,
    placement: args.placement,
    title: args.title,
    container: args.container,
    describeChild: args.describeChild
  });
  wrapper.appendChild(tooltip);
  return wrapper;
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "150px";
  wrapper.style.marginLeft = "100px";
  const tooltip = new Tooltip({
    className: args.className,
    id: args.id,
    placement: args.placement,
    title: args.title,
    container: args.container,
    describeChild: args.describeChild
  });
  wrapper.appendChild(tooltip);
  return wrapper;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "150px";
  wrapper.style.marginLeft = "100px";
  const tooltip = new Tooltip({
    className: args.className,
    id: args.id,
    placement: args.placement,
    title: args.title,
    container: args.container,
    describeChild: args.describeChild
  });
  wrapper.appendChild(tooltip);
  return wrapper;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "150px";
  wrapper.style.marginLeft = "100px";
  const tooltip = new Tooltip({
    className: args.className,
    id: args.id,
    placement: args.placement,
    title: args.title,
    container: args.container,
    describeChild: args.describeChild
  });
  wrapper.appendChild(tooltip);
  return wrapper;
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const wrapper = document.createElement("div");
  wrapper.style.marginTop = "150px";
  wrapper.style.marginLeft = "100px";
  const tooltip = new Tooltip({
    className: args.className,
    id: args.id,
    placement: args.placement,
    title: args.title,
    container: args.container,
    describeChild: args.describeChild
  });
  wrapper.appendChild(tooltip);
  return wrapper;
}`,...u.parameters?.docs?.source}}},d=[`baseBottom`,`baseTop`,`baseRight`,`baseLeft`,`baseString`]}))();export{d as __namedExportsOrder,o as baseBottom,l as baseLeft,c as baseRight,u as baseString,s as baseTop,r as default};