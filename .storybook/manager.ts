import { addons } from '@storybook/manager-api';
import coreTheme from './core-theme';

addons.setConfig({
  theme: coreTheme,
  sidebar: {
    showRoots: true,
  },
});
