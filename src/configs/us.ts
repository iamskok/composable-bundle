import type { BuildTimeConfig } from '../types/buildTimeConfig';

/**
 * This is the config that is used when building the USA version of the app.
 */
export const usConfig: BuildTimeConfig = {
  externalLibraries: [],
  outDir: 'dist-us',
  envFilePath: 'src/configs/us.env',
  devPort: 4000,
  previewPort: 4001,
  country: 'USA',
  theme: {
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
  },
};
