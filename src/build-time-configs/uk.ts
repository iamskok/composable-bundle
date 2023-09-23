import type { BuildTimeConfig } from "../types/buildTimeConfig";

/**
 * This is the config that is used when building the UK version of the app.
 */
export const ukConfig: BuildTimeConfig = {
  externalLibraries: ["react-confetti"],
  outDir: 'dist/uk',
  envFilePath: 'src/build-time-configs/uk.env',
};
