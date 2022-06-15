import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { useArgs } from '@storybook/api';

export const Panel = () => {
  const [args] = useArgs();

  function _handleClick() {
    const iframe = document.getElementById("storybook-preview-iframe");
    const component = iframe.contentWindow.document.getElementById(args.id);
    Object.keys(args).forEach(key => {
      console.log(`"${key}" value: ${component[key]}`);
    })
  }

  return <button onClick={_handleClick}>get prop value</button>;
};

addons.register('get-prop-value', (api) => {
  addons.add('get-prop-value/panel', {
    type: types.PANEL,
    title: 'Get Prop Value',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Panel />
      </AddonPanel>
    ),
  });
});
