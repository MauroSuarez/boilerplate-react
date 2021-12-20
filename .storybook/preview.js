import React from 'react';
import { AppProvider } from '@/providers';
import '../src/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const defaultTheme = 'easy';

export const decorators = [
  (Story) => (
    <AppProvider defaultTheme={defaultTheme}>
      <Story />
    </AppProvider>
  ),
];
