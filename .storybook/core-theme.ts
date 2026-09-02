import { create } from '@storybook/theming';

const coreTheme = create({
  base: 'light',
  brandTitle: 'Core Platform Design System',
  brandUrl: 'https://coreplatform.ir',
  brandTarget: '_self',
  brandImage: '/core-logo.svg',
  fontBase: "'Noto Sans Arabic Variable', 'Noto Sans Variable', sans-serif",
  fontCode: "'JetBrains Mono', monospace",
  colorPrimary: '#168BFF',
  colorSecondary: '#00C2FF',
  appBg: '#F7F9FC',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E2E8F0',
  appBorderRadius: 8,
  textColor: '#111827',
  textInverseColor: '#F8FAFC',
  barBg: '#FFFFFF',
  barTextColor: '#475569',
  barSelectedColor: '#168BFF',
  barHoverColor: '#168BFF',
  inputBg: '#FFFFFF',
  inputBorder: '#CBD5E1',
  inputTextColor: '#111827',
  inputBorderRadius: 8,
});

export default coreTheme;
