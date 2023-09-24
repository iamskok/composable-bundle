export type TailwindTheme = Record<string, Record<string, Record<string | number, string>>>;

/**
 * Represents the configuration options for a build process.
 * 
 * @field externalLibraries - List of external libraries to be included in the build (e.g. 'react', 'react-dom').
 * @field outDir - The output folder for the build.
 * @field envFilePath - The path to the environment file.
 * @field theme - The theme object following TailwindCSS's naming convention.
 * @field devPort - The port to use when running the dev server.
 * @field previewPort - The port to use when running the preview server.
 * @field country - The country code for the country that the app is being built for.
 */
export type BuildTimeConfig = {
  externalLibraries: string[];
  outDir: string;
  envFilePath: string;
  theme: TailwindTheme;
  devPort: number,
  previewPort: number,
  country: string;
};
