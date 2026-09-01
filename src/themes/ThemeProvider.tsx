import React, { createContext, useContext } from 'react';
import { themes, ThemeName } from './index';

const ThemeContext = createContext<ThemeName>('light');

export function ThemeProvider({
  mode = 'light',
  children,
}: {
  mode?: ThemeName;
  children: React.ReactNode;
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
