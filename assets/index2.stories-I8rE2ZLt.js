import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./dialog-DIMRbl-d.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`desktop/dialog`,argTypes:{title:{name:`title`},header:{name:`header`},content:{name:`content`},footer:{name:`footer`},className:{name:`className`},id:{name:`id`},icon:{name:`icon`,options:[`success`,`info`,`error`,`warning`,`question`],control:{type:`select`}},footerVisible:{name:`footerVisible`}}},i=e=>{let t=new n({...e});t.addEventListener(`close`,e=>{console.log(e)});let r=document.createElement(`div`),i=a(`OPEN`,()=>{t.open()}),l=a(`CLOSE`,()=>{t.close()}),u=a(`full screen mode`,()=>{document.getElementById(`storybook-root`).requestFullscreen()}),d=a(`Set Root element`,()=>{t.container=c}),f=a(`Set Body element`,()=>{t.container=s}),p=a(`Set undefined`,()=>{t.container=void 0}),m=a(`Set null`,()=>{t.container=null}),h=a(`Set non exist element`,()=>{t.container=o}),g=a(`Set invalid value`,()=>{t.container=12}),_=a(`GETTER`,()=>{console.log(`container value:`,t.container)});return r.appendChild(i),r.appendChild(l),r.appendChild(u),r.appendChild(d),r.appendChild(f),r.appendChild(p),r.appendChild(m),r.appendChild(h),r.appendChild(g),r.appendChild(_),r},a=(e,t)=>{let n=document.createElement(`button`);return n.textContent=e,n.addEventListener(`click`,t),n},o=document.createElement(`div`),s=document.body,c=document.getElementById(`storybook-root`),l=i.bind({}),l.args={title:`Title`,header:`<div>Header</div>`,content:`Content with Icon`,footer:`Footer`,className:`options-class`,id:`options-id`,icon:`success`,container:c,footerVisible:!0},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const dialog = new Dialog({
    ...args
  });
  dialog.addEventListener("close", event => {
    console.log(event);
  });
  const root = document.createElement("div");
  const openButton = createButton("OPEN", () => {
    dialog.open();
  });
  const closeButton = createButton("CLOSE", () => {
    dialog.close();
  });
  const buttonFullScreen = createButton("full screen mode", () => {
    document.getElementById("storybook-root").requestFullscreen();
  });
  const buttonSetRoot = createButton("Set Root element", () => {
    dialog.container = rootElement;
  });
  const buttonSetBody = createButton("Set Body element", () => {
    dialog.container = bodyElement;
  });
  const buttonSetUndefined = createButton("Set undefined", () => {
    dialog.container = undefined;
  });
  const buttonSetNull = createButton("Set null", () => {
    dialog.container = null;
  });
  const buttonSetNonExistELement = createButton("Set non exist element", () => {
    dialog.container = nonExistElement;
  });
  const buttonInvalidValue = createButton("Set invalid value", () => {
    dialog.container = 12;
  });
  const buttonGetter = createButton("GETTER", () => {
    console.log("container value:", dialog.container);
  });
  root.appendChild(openButton);
  root.appendChild(closeButton);
  root.appendChild(buttonFullScreen);
  root.appendChild(buttonSetRoot);
  root.appendChild(buttonSetBody);
  root.appendChild(buttonSetUndefined);
  root.appendChild(buttonSetNull);
  root.appendChild(buttonSetNonExistELement);
  root.appendChild(buttonInvalidValue);
  root.appendChild(buttonGetter);
  return root;
}`,...l.parameters?.docs?.source}}},u=[`Base`]}))();export{l as Base,u as __namedExportsOrder,r as default};