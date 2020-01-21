import React from 'react';
import {render} from '@testing-library/react';
import fs from 'fs';
import IconButton from '../index';

describe('Unit test IconButton react', () => {

  test('Render successfully without props', () => {
    const {container} = render(<IconButton />);
    fs.writeFileSync(__dirname + '/snapshot/without_props.html', container.outerHTML);
  });

  test('Render successfully with full props', () => {
    const {container} = render(
      <IconButton color="green" type="remove" size="small" shape="normal" isDisabled isVisible />
    );
    fs.writeFileSync(__dirname + '/snapshot/with_full_props.html', container.outerHTML);
  });

  test('Render successfully with invisible', () => {
    const {container} = render(
      <IconButton isVisible={false} />
    );
    fs.writeFileSync(__dirname + '/snapshot/with_invisible.html', container.outerHTML);
  });

});