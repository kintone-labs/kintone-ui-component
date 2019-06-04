function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
    : {
      r: 0,
      g: 0,
      b: 0
    };
}

function rgbToHex(r: number, g: number, b: number) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgbToHsv(r_opt: number, g_opt: number, b_opt: number) {
  const r = r_opt / 255,
    g = g_opt / 255,
    b = b_opt / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const v = max;

  const d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;

      default:
        h = 0;
    }
    h /= 6;
  }
  return {h: h, s: s, v: v};
}

function hsvToRgb(h: number, s: number, v: number) {
  let r = 0,
    g = 0,
    b = 0;

  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }

  return {r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
}

const invertColor = (hex_opt: string) => {
  let hex = hex_opt;
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  // invert color components
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
};

const padZero = (str: string, len_opt?: number) => {
  const len = len_opt || 2;
  const zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
};

const isHexString = (str: string) => {
  return /^#[0-9A-F]{6}$/i.test(str);
};

export {hexToRgb, rgbToHex, rgbToHsv, invertColor, hsvToRgb, isHexString};