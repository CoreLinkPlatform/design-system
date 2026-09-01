import { createContext, useContext, type ReactNode } from 'react';
import { themes, type ThemeName } from './index';

const ThemeContext = createContext<ThemeName>('light');

export function ThemeProvider({
  mode = 'light',
  children,
}: {
  mode?: ThemeName;
  children: ReactNode;
}) {
  return (
    <ThemeContext.Provider value={mode}>
      <div data-theme={mode}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export { themes };
