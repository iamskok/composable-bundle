import fs from 'fs';
import path from 'path';
import type { Theme } from '../types/theme';

/**
 * Theme object used at build time.
 */
const theme: Theme = {
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
 * Converts the theme object to CSS variables.
 *
 * @param theme - The theme object to convert.
 * @returns - CSS string with CSS variables for each color and shade.
 */
const convertThemeToCSS = (theme: Theme): string => {
  let css = '';

  // Iterate over each color and shade in the theme object.
  for (const [color, shades] of Object.entries(theme.colors)) {
    for (const [shade, value] of Object.entries(shades)) {
      // Create the CSS variable name based on tailwindcss's naming convention.
      const variableName = `--color-${color}-${shade}`;
      // Create a regex pattern to validate the color value against.
      const hexPattern = /^#[0-9A-Fa-f]{6}$/;

      // Validate the color value
      if (!hexPattern.test(value)) {
        throw new Error(`Invalid color value: ${value}`);
      }

      // Add the CSS variable to the CSS string with the color value.
      css += `  ${variableName}: ${value};\n`;
    }
  }

  // Return the CSS string wrapped in a :root selector block.
  return `:root {\n${css}}`;
};

const cssFilePath = path.join(process.cwd(), 'src', 'index.css');

/**
 * Updates the CSS file with the theme's CSS variables.
 */
try {
  const data = fs.readFileSync(cssFilePath, 'utf8');

  let updatedData = data;

  // This regular expression matches the :root selector and its contents in a CSS file.
  // It is used to extract the contents of the :root selector.
  const rootSelectorRegex = /:root\s*{([^}]+)}/g;

  // Replace the :root selector block with the CSS variables for the theme.
  // updatedData = updatedData?.replace(rootSelectorRegex, () => {
  //   const css = convertThemeToCSS(theme);
  //   return css.replace(':root {\n', '').replace('}\n', '');
  // });
  updatedData = updatedData.replace(rootSelectorRegex,  convertThemeToCSS(theme));

  // Write the updated CSS file to disk.
  if (updatedData !== undefined) {
    fs.writeFileSync(cssFilePath, updatedData, 'utf8');
    console.log('CSS file updated successfully!');
  } else {
    throw new Error(`Error updating CSS file! updatedData is undefined'`);
  }
} catch (error) {
  console.error(error);
  throw new Error(`Error updating CSS file!`);
}
