import { createViteConfig } from './vite.common';
import { ukConfig } from './src/configs/uk';
import { updateCssTheme } from './src/theming/build-time';

updateCssTheme(ukConfig.theme);
export default createViteConfig(ukConfig);
