'use client';

import React from 'react';
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps as NextThemeProviderProps,
} from 'next-themes';

interface ThemeProviderProps extends NextThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
