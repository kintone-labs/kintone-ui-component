import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";
import { useParameter } from "@storybook/api";
import { useArgs } from "@storybook/api";

const ADDON_ID = "get-value";
const PANEL_ID = `${ADDON_ID}/panel`;
const PARAM_KEY = "getValue";

const ButtonGetValue = () => {
  const value = useParameter(PARAM_KEY, null);
  const isShowGet = value && value.get ? true : false;
  const iframeStorybookEl = document.getElementById("storybook-preview-iframe");
  const _handleClick = () => {
    const btnGetValue = iframeStorybookEl.contentDocument.getElementById(
      value.id
    );
    btnGetValue.click();
  };
  return isShowGet ? <button onClick={_handleClick}>Get value</button> : "";
};

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Addons",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <ButtonGetValue />
      </AddonPanel>
    )
  });
});
