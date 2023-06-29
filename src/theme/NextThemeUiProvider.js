'use client';

import { theme } from 'theme';
import { ThemeUIProvider } from 'theme-ui';

export const NextThemeUiProvider = ({ children }) => {
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>;
};
