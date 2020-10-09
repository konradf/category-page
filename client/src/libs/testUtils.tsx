import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './theme';

export const ThemedComponent: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
