import { addons, types, useArgs } from "@storybook/manager-api";
import React from "react";

const buttonStyles = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#767676",
  fontSize: "13px",
  fontWeight: "bold",
};

export const GetButton = () => {
  const [args] = useArgs();
  function _handleClick() {
    const iframe = document.getElementById("storybook-preview-iframe");
    const component = iframe.contentWindow.document.getElementById(args.id);
    const info = {};
    const componentName = component.nodeName.replace("KUC-", "");
    for (const key in args) {
      if (Object.hasOwnProperty.call(args, key)) {
        args[key] = component[key];
      }
    }
    info[componentName] = args;
    console.log(info);
  }
  return (
    <button style={buttonStyles} onClick={_handleClick}>
      Get Props
    </button>
  );
};

addons.register("get-prop-value", (api) => {
  addons.add("get-prop-value/panel", {
    type: types.TOOL,
    title: "Get Prop Value",
    render: ({ active }) => <GetButton />,
  });
});
