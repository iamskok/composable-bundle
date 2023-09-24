## Composable bundling with Vite

This project is a demonstration of how to use Vite to create a composable bundle. It includes examples of how to use run-time and build-time theme configurations, as well as how to compose business logic features at build time using QR Login as an example.

The project is built using Vite, Tailwind, TypeScript, and React.

## Getting started

```sh
npm i
```

## Scripts

The following scripts are available for running and building the project:

- `dev`: Starts a development server for the project.
- `dev:uk`: Starts a development server for the project with UK configuration.
- `dev:us`: Starts a development server for the project with US configuration.
- `build`: Builds the project for production.
- `build:uk`: Builds the project for production with UK configuration.
- `build:us`: Builds the project for production with US configuration.
- `preview`: Serves the production build of the project locally.
- `preview:uk`: Serves the production build of the project with UK configuration locally.
- `preview:us`: Serves the production build of the project with US configuration locally.
- `update-theme`: Updates the theme configuration for the project.
- `lint`: Runs the linter for the project.
- `format`: Formats the code for the project.
- `clean-vite-cache`: Cleans the Vite cache for the project.

## Project Structure

The project is organized into the following folders:

- `theming`: Contains run-time and build-time functions to configure Tailwind themes.
- `configs`: Contains UK and US build-time configuration files for the project.
- `components`: Contains the React components for the project.
- `index.css`: Contains the global CSS variables for the project.
- `vite.config.ts`: Contains the default Vite configuration for the project.
- `vite.common.ts`: Contains a utility function for generating other Vite configurations for the project.
- `vite.uk.ts`: Contains the UK-specific Vite configuration for the project.
- `vite.us.ts`: Contains the US-specific Vite configuration for the project.
- `tailwind.config.js`: Contains the Tailwind CSS configuration for the project.
