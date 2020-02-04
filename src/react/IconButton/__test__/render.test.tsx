import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import IconButton from '../index';

describe('Unit test IconButton react render', () => {

  test('Render successfully without props', () => {
    const {container} = render(<IconButton />);
    if (container.firstElementChild) {
      expect(['kuc-icon-btn', 'normal', 'gray', 'circle'].every(c => container.firstElementChild!.classList.contains(c))).toBeTruthy();
      expect(container.firstElementChild.classList.length).toBe(4);
      expect(container.firstElementChild).not.toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.firstElementChild!.firstElementChild!.getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    } else {
      expect(false);
    }
  });

  test('Render successfully with full props', () => {
    const {container} = render(
      <IconButton color="green" type="remove" size="small" shape="square" isDisabled isVisible={false} />
    );
    if (container.firstElementChild) {
      expect(['kuc-icon-btn', 'small', 'green', 'square'].every(c => container.firstElementChild!.classList.contains(c))).toBeTruthy();
      expect(container.firstElementChild.classList.length).toBe(4);
      expect(container.firstElementChild).toBeDisabled();
      expect(container.firstElementChild).toBeVisible();
      expect(container.firstElementChild.firstElementChild!.firstElementChild!.getAttribute('d')).toBe('M19,13H5V11H19V13Z');
    } else {
      expect(false);
    }
  });

  test('Render successfully with red color', () => {
    const {container} = render(
      <IconButton color="red" />
    );
    expect(container.firstElementChild!.classList.contains('red')).toBeTruthy();
    expect(window.getComputedStyle(container.firstElementChild!).backgroundColor).toBe('rgb(228, 66, 52)');
  });

  test('Render successfully with green color', () => {
    const {container} = render(
      <IconButton color="green" />
    );
    expect(container.firstElementChild!.classList.contains('green')).toBeTruthy();
    expect(window.getComputedStyle(container.firstElementChild!).backgroundColor).toBe('rgb(134, 187, 97)');
  });

  test('Render successfully with blue color', () => {
    const {container} = render(
      <IconButton color="blue" />
    );
    expect(container.firstElementChild!.classList.contains('blue')).toBeTruthy();
    expect(window.getComputedStyle(container.firstElementChild!).backgroundColor).toBe('rgb(45, 141, 214)');
  });

  test('Render successfully with gray color', () => {
    const {container} = render(
      <IconButton color="gray" />
    );
    expect(container.firstElementChild!.classList.contains('gray')).toBeTruthy();
    expect(window.getComputedStyle(container.firstElementChild!).backgroundColor).toBe('rgb(238, 238, 238)');
  });

  test('Render successfully with transparent', () => {
    const {container} = render(
      <IconButton color="transparent" />
    );
    expect(container.firstElementChild!.classList.contains('transparent')).toBeTruthy();
    expect(window.getComputedStyle(container.firstElementChild!).backgroundColor).toBe('transparent');
  });

  test('Render successfully with invaid color', () => {
    const {container} = render(
      // @ts-ignore
      <IconButton color="abc" />
    );
    expect(container.firstElementChild!.classList.contains('gray')).toBeTruthy();
    expect(window.getComputedStyle(container.firstElementChild!).backgroundColor).toBe('rgb(238, 238, 238)');
  });

  test('Render successfully with circle shape', () => {
    const {container} = render(
      <IconButton shape="circle" />
    );
    expect(container.firstElementChild!.classList.contains('circle')).toBeTruthy();
  });

  test('Render successfully with square shape', () => {
    const {container} = render(
      <IconButton shape="square" />
    );
    expect(container.firstElementChild!.classList.contains('square')).toBeTruthy();
  });

  test('Render successfully with invaid shape', () => {
    const {container} = render(
      // @ts-ignore
      <IconButton shape="abc" />
    );
    expect(container.firstElementChild!.classList.contains('circle')).toBeTruthy();
  });

  test('Render successfully with normal size', () => {
    const {container} = render(
      <IconButton size="normal" />
    );
    expect(container.firstElementChild!.classList.contains('normal')).toBeTruthy();
  });

  test('Render successfully with small size', () => {
    const {container} = render(
      <IconButton size="small" />
    );
    expect(container.firstElementChild!.classList.contains('small')).toBeTruthy();
  });

  test('Render successfully with invaid size', () => {
    const {container} = render(
      // @ts-ignore
      <IconButton size="abc" />
    );
    expect(container.firstElementChild!.classList.contains('normal')).toBeTruthy();
  });

  test('Render successfully with insert type', () => {
    const {container} = render(
      <IconButton type="insert" />
    );
    expect(container.children[0].children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

  test('Render successfully with remove type', () => {
    const {container} = render(
      <IconButton type="remove" />
    );
    expect(container.children[0].children[0].children[0].getAttribute('d')).toBe('M19,13H5V11H19V13Z');
  });

  test('Render successfully with close type', () => {
    const {container} = render(
      <IconButton type="close" />
    );
    expect(container.children[0].children[0].children[0]
      .getAttribute('d')).toBe('M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z');
  });

  test('Render successfully with file type', () => {
    const {container} = render(
      <IconButton type="file" />
    );
    expect(container.children[0].children[0].children[0]
      .getAttribute('d')).toBe('M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6Z');
  });

  test('Render successfully with right type', () => {
    const {container} = render(
      <IconButton type="right" />
    );
    expect(container.children[0].children[0].children[0]
      .getAttribute('d')).toBe('M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z');
  });

  test('Render successfully with left type', () => {
    const {container} = render(
      <IconButton type="left" />
    );
    expect(container.children[0].children[0].children[0]
      .getAttribute('d')).toBe('M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z');
  });

  test('Render successfully with invaid type', () => {
    const {container} = render(
      // @ts-ignore
      <IconButton type="abc" />
    );
    expect(container.children[0].children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

  test('Render successfully with disabled', () => {
    const {container} = render(
      <IconButton isDisabled />
    );
    expect(container.firstElementChild).toBeDisabled();
  });

  test('Render successfully with enabled', () => {
    const {container} = render(
      <IconButton isDisabled={false} />
    );
    expect(container.firstElementChild).not.toBeDisabled();
  });

  test('Render successfully with invaid disabled', () => {
    const {container} = render(
      // @ts-ignore
      <IconButton isDisabled="abc" />
    );
    expect(container.firstElementChild).not.toBeDisabled();
  });

  test('Render successfully with show', () => {
    const {container} = render(
      <IconButton isVisible />
    );
    expect(container.firstElementChild).toBeVisible();
  });

  test('Render successfully with hide', () => {
    const {container} = render(
      <IconButton isVisible={false} />
    );
    expect(container.firstElementChild).toBe(null);
  });

  test('Render successfully with invaid visible', () => {
    const {container} = render(
      // @ts-ignore
      <IconButton isVisible="abc" />
    );
    expect(container.firstElementChild).toBeVisible();
  });

  test('Render successfully with click event', () => {
    const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
      expect(e.type).toBe('click');
    };
    const {container} = render(<IconButton onClick={handleClick} />);
    if (container.firstElementChild) {
      fireEvent.click(container.firstElementChild);
    } else {
      expect(false);
    }
  });

});