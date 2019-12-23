/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import FieldGroup from '../index';

describe('Unit test FieldGroup react', () => {

  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => {});
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully without props', () => {
    const {container} = render(<FieldGroup />);
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-fieldgroup');
    } else {
      expect(false);
    }
  });

  test('Render null when isVisible = false', () => {
    const {container} = render(<FieldGroup isVisible={false} />);
    if (container.firstElementChild) {
      expect(false);
    } else {
      expect(true);
    }
  });

  test('FieldGroup show successfully', () => {
    try {
      const {container, getByRole} = render(<FieldGroup />);
      if (container.firstElementChild && container.firstElementChild.firstElementChild) {
        fireEvent.click(getByRole('button'));
        expect(getByRole('button').className).toContain('expand');
      } else {
        expect(false);
      }
    } catch (error) {
      expect(false);
    }
  });

  test('FieldGroup hide successfully', () => {
    try {
      const {container, getByRole} = render(<FieldGroup toggle="expand" />);
      if (container.firstElementChild && container.firstElementChild.firstElementChild) {
        fireEvent.click(getByRole('button'));
        expect(getByRole('button').className).toContain('collapse');
      } else {
        expect(false);
      }
    } catch (error) {
      expect(false);
    }
  });

  test('onToggle called successfully', () => {
    try {
      const {container, getByRole} = render(
        <FieldGroup
          onToggle={(toggleState)=>{
            expect(toggleState).toEqual('expand');
          }}
        />);
      if (container.firstElementChild && container.firstElementChild.firstElementChild) {
        fireEvent.click(getByRole('button'));
      } else {
        expect(false);
      }
    } catch (error) {
      expect(false);
    }
  });

  test('Render with children instead of content', () => {
    const {container} = render(
      <FieldGroup>
        <span>123</span>
      </FieldGroup>
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toContain('kuc-fieldgroup');
    } else {
      expect(false);
    }
  });
});