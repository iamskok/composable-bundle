import { defineConfig, mergeConfig } from 'vite';
import { config } from 'dotenv';
import react from '@vitejs/plugin-react';
import type { BuildTimeConfig } from './src/types/buildTimeConfig';
import PreprocessorDirectives from 'unplugin-preprocessor-directives/vite';

/**
 * Sources the environment file.
 */
export const sourceEnvFile = (envFilePath: string): void => {
  try {
    config({ path: envFilePath });
  } catch (error) {
    console.error(`Failed to source env file: ${envFilePath}`);
    throw error;
  }
};

/**
 * Common vite config.
 */
export const commonViteConfig = defineConfig({
  plugins: [PreprocessorDirectives(), react()],
  build: {
    minify: false,
  },
});

/**
 * Creates a vite config based on the build time config and the common vite config.
 *
 * @param buildTimeConfig - The build time config.
 */
export const createViteConfig = (buildTimeConfig: BuildTimeConfig) => {
  sourceEnvFile(buildTimeConfig.envFilePath);

  return mergeConfig(commonViteConfig, defineConfig({
    build: {
      outDir: buildTimeConfig.outDir,
      rollupOptions: {
        external: buildTimeConfig.externalLibraries,
      },
    },
  }));
};
