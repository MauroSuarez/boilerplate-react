import { themes } from '@/themes';

export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export const mapTheme: (variables: ITheme) => IMappedTheme = (variables: ITheme) => {
  return {
    '--color-primary': variables.primary || '', // DEFAULT COLOR THEME
    '--color-secondary': variables.secondary || '', // DEFAULT COLOR THEME
    '--btn-background-primary': variables.backgroundPrimary || '',
    '--btn-background-secondary': variables.backgroundSecondary || '',
    '--btn-text-primary': variables.textPrimary || '',
    '--btn-text-secondary': variables.textSecondary || '',
    '--btn-border-primary': variables.borderPrimary || '',
    '--btn-border-secondary': variables.borderSecondary || '',
    '--btn-hover-background-secondary': variables.hoverBackgroundSecondary || '',
  };
};

export const extend: (extending: ITheme, newTheme: ITheme) => ITheme = (
  extending: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extending, ...newTheme };
};

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;
  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};
