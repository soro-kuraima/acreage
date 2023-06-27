export type ThemeName = 'light' | 'dark';

export type ThemeColorVariations =
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'background';

export type ThemeColorVariationTypes =
  | 'light'
  | 'main'
  | 'dark'
  | 'contrastText';

export type ThemeColors = {
  [color in ThemeColorVariations]: Record<ThemeColorVariationTypes, string>;
};
