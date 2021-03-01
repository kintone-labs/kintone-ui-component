import { configure, addParameters } from '@storybook/web-components';

const newViewports = {
  iPhone11ProMax: {
    name: 'iPhone 11 Pro Max',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iPhone11Pro: {
    name: 'iPhone 11 Pro',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhoneSE: {
    name: 'iPhoneSE',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  googlePixel2: {
    name: 'Google Pixel 2',
    styles: {
      width: '411px',
      height: '731px',
    },
  },
};
addParameters({
  viewport: { viewports: newViewports },
});

const req = require.context('../src', true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
