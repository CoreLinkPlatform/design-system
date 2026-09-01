import { create } from '@storybook/theming';

const coreTheme = create({
  base: 'light',

  brandTitle: 'Core Platform Design System',
  brandUrl: 'https://coreplatform.ir',
  brandTarget: '_self',
  brandImage: '/core-logo.svg',

  fontBase: 'Noto Sans Arabic, Noto Sans, sans-serif',
  fontCode: 'JetBrains Mono, monospace',

  colorPrimary: '#0066FF',
  colorSecondary: '#00C2FF',

  appBg: '#F8FAFC',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E5E7EB',
  appBorderRadius: 16,

  textColor: '#111827',
  textInverseColor: '#FFFFFF',

  barBg: '#FFFFFF',
  barTextColor: '#64748B',
  barSelectedColor: '#0066FF',
  barHoverColor: '#0066FF',

  inputBg: '#FFFFFF',
  inputBorder: '#CBD5E1',
  inputTextColor: '#111827',
  inputBorderRadius: 12,
});

export default coreTheme;
