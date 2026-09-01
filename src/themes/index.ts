export const themes = {
  light: {
    mode: 'light',
  },
  dark: {
    mode: 'dark',
  },
} as const;

export type ThemeName = keyof typeof themes;

export { ThemeProvider, useTheme } from './ThemeProvider';
