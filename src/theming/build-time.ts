import fs from 'fs';
import path from 'path';
import type { TailwindTheme } from '../types/buildTimeConfig';

/**
 * Converts the theme object to CSS variables.
 *
 * @param theme - The theme object to convert.
 * @returns - CSS string with CSS variables for each color and shade.
 */
export const convertThemeToCSS = (theme: TailwindTheme): string => {
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

/**
 * Updates the CSS file with the theme's CSS variables.
 * 
 * @param theme - The theme object to use to update the CSS file.
 */
export const updateCssTheme = (theme: TailwindTheme) => {
  // Get the path to the CSS file.
  const cssFilePath = path.join(process.cwd(), 'src', 'index.css');

  try {
    const data = fs.readFileSync(cssFilePath, 'utf8');
    let updatedData = data;

    // This regular expression matches the :root selector and its contents in a CSS file.
    // It is used to extract the contents of the :root selector.
    const rootSelectorRegex = /:root\s*{([^}]+)}/g;

    // Replace the :root selector block with the CSS variables for the theme.
    updatedData = updatedData.replace(rootSelectorRegex, convertThemeToCSS(theme));

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
};
