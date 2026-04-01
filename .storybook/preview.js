import { action } from "storybook/actions";

const serializeEvent = (event) => {
  const obj = {};
  for (const key in event) {
    if (typeof event[key] === "function" || key === key.toUpperCase()) continue;
    const val = event[key];
    if (val instanceof HTMLElement) {
      obj[key] = val.constructor.name || val.tagName;
    } else {
      obj[key] = val;
    }
  }
  return obj;
};

const withEventActions = (storyFn, context) => {
  const handles = context.parameters?.actions?.handles;
  if (!handles?.length) return storyFn();

  const root = document.getElementById("storybook-root");
  if (root && !root.__eventActionsAttached) {
    root.__eventActionsAttached = new Set();
  }

  if (!root) return storyFn();

  handles.forEach((name) => {
    if (!root.__eventActionsAttached.has(name)) {
      root.__eventActionsAttached.add(name);
      root.addEventListener(name, (event) => {
        action(name)(serializeEvent(event));
      });
    }
  });
  return storyFn();
};

const newViewports = {
  iPhone11ProMax: {
    name: "iPhone 11 Pro Max",
    styles: {
      width: "414px",
      height: "896px",
    },
  },
  iPhone11Pro: {
    name: "iPhone 11 Pro",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  iPhoneSE: {
    name: "iPhoneSE",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  googlePixel2: {
    name: "Google Pixel 2",
    styles: {
      width: "411px",
      height: "731px",
    },
  },
};
export default {
  decorators: [withEventActions],

  parameters: {
    viewport: {
      options: newViewports
    },
  },

  initialGlobals: {
    viewport: {
      value: "reset",
      isRotated: false
    }
  }
};
