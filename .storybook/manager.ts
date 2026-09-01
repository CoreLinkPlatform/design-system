import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  brandTitle: 'Core Platform Design System',
  brandUrl: 'https://coreplatform.ir',
  brandTarget: '_self',

  fontBase: 'Noto Sans Arabic, Noto Sans, sans-serif',

  colorPrimary: '#0066FF',
  colorSecondary: '#00C2FF',

  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderRadius: 16,

  textColor: '#111827',
  textInverseColor: '#ffffff',
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
