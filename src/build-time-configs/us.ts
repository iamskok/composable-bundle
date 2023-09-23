import type { BuildTimeConfig } from "../types/buildTimeConfig";

/**
 * This is the config that is used when building the USA version of the app.
 */
export const usConfig: BuildTimeConfig = {
  externalLibraries: [],
  outDir: 'dist/us',
  envFilePath: 'src/build-time-configs/us.env',
}
