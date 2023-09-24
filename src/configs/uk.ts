import type { BuildTimeConfig } from '../types/buildTimeConfig';

/**
 * This is the config that is used when building the UK version of the app.
 */
export const ukConfig: BuildTimeConfig = {
  externalLibraries: ['react-confetti'],
  outDir: 'dist-uk',
  envFilePath: 'src/configs/uk.env',
  devPort: 5000,
  previewPort: 5001,
  country: 'UK',
  theme: {
    colors: {
      primary: {
        100: '#E0E7FF',
        200: '#B0BEFF',
        300: '#7E8BFF',
        400: '#3D6BFF',
        500: '#1E40AF',
        600: '#1D3DBF',
        700: '#132D99',
      },
      secondary: {
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#047857',
        600: '#065F46',
        700: '#064E3B',
      },
    },
  },
};
