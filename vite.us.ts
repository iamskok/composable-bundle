import { createViteConfig } from './vite.common';
import { usConfig } from './src/configs/us';
import { updateCssTheme } from './src/theming/build-time';

updateCssTheme(usConfig.theme);
export default createViteConfig(usConfig);
