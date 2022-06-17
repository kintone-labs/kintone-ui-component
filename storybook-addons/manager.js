import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel, Icons, Button } from "@storybook/components";
import { useArgs } from "@storybook/api";

export const Panel = () => {
  const [args] = useArgs();

  function _handleClick() {
    const iframe = document.getElementById("storybook-preview-iframe");
    const component = iframe.contentWindow.document.getElementById(args.id);
    Object.keys(args).forEach(key => {
      console.log(`"${key}" value: ${component[key]}`);
    });
  }

  return  <Icons onClick={_handleClick} icon="watch" />;
};

addons.register("get-prop-value", api => {
  addons.add("get-prop-value/panel", {
    type: types.TOOL,
    title: "Get Prop Value",
    render: ({ active }) => (
      // <AddonPanel active={active} key={key}>
      //   <Panel />
      // </AddonPanel>
      <button>aaa</button>
    )
  });
});
