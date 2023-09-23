/**
 * Represents the configuration options for a build process.
 * 
 * @field externalLibraries - List of external libraries to be included in the build (e.g. 'react', 'react-dom').
 * @field outDir - The output folder for the build.
 * @field envFilePath - The path to the environment file.
 */
export type BuildTimeConfig = {
  externalLibraries: string[];
  outDir: string;
  envFilePath: string;
};
