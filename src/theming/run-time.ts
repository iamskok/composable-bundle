import type { TailwindTheme } from '../types/buildTimeConfig';

/**
 * Theme object that we pretend to fetch from an API
 */
export const theme: TailwindTheme = {
  colors: {
    primary: {
      100: '#EDE7F6',
      200: '#D1C4E9',
      300: '#B39DDB',
      400: '#9575CD',
      500: '#7E57C2',
      600: '#673AB7',
      700: '#5E35B1',
    },
    secondary: {
      100: '#FCE4EC',
      200: '#F8BBD0',
      300: '#F48FB1',
      400: '#F06292',
      500: '#EC407A',
      600: '#D81B60',
      700: '#C2185B',
    },
  },
};

/**
 * Fetches the theme from an API and applies it to the document at runtime.
 * 
 * @param delay
 */
export const fetchAndApplyTheme = (delay = 2000) => {
  setTimeout(() => {
    for (const [color, shades] of Object.entries(theme.colors)) {
      for (const [shade, value] of Object.entries(shades)) {
        document.documentElement.style.setProperty(`--color-${color}-${shade}`, value);
      }
    }
  }, delay);
};
