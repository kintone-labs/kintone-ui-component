import React from "react";
import { addons, types } from "@storybook/addons";
import { Icons, IconButton } from "@storybook/components";
import { useArgs } from "@storybook/api";

export const GetButton = () => {
  const [args] = useArgs();
  function _handleClick() {
    const iframe = document.getElementById("storybook-preview-iframe");
    const component = iframe.contentWindow.document.getElementById(args.id);
    Object.keys(args).forEach(key => {
      console.log(`"${key}" value: ${component[key]}`);
    });
  }
  return <Icons text="text" onClick={_handleClick} icon="play" />;
};

addons.register("get-prop-value", api => {
  addons.add("get-prop-value/panel", {
    type: types.TOOL,
    title: "Get Prop Value",
    render: ({ active }) => (
      <IconButton active={active} title="get value properties">
        Get value
        <GetButton />
      </IconButton>
    )
  });
});
