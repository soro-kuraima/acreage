import { Theme } from '@aws-amplify/ui-react';

const acreageTheme: Theme = {
  name: 'acreage-theme',
  overrides: [
    {
      colorMode: 'dark',
      tokens: {
        colors: {
          font: {
            primary: { value: '#fcfad4' },
            secondary: { value: '#f7f4e2' },
            tertiary: { value: '#fgfgfg' },
            disabled: { value: '#e6e6e6' },
            inverse: { value: '#ffffff' },
            interactive: { value: '#a5dee5' },
            hover: { value: '#c8e7e8' },
            focus: { value: '#eef8fa' },
            active: { value: '#eef8fa' },
            info: { value: '#90e0ef' },
            warning: { value: '#e85d04' },
            error: { value: '#d00000' },
            success: { value: '#22f07e' },
          },
          background: {
            primary: { value: '#2a2a2a' },
            secondary: { value: '#111111' },
            tertiary: { value: '#000000' },
          },
          border: {
            primary: { value: '#e6e6e6' },
            secondary: { value: '#dfdfdf' },
            tertiary: { value: '#606060' },
            disabled: { value: '#606060' },
            pressed: { value: '#00857a' },
            focus: { value: '#00857a' },
            error: { value: '#dc2f02' },
          },
          brand: {
            primary: {
              100: { value: '#00857a' },
              90: { value: '#00b8a9' },
              80: { value: '#00c2a9' },
              60: { value: '#00ebd8' },
              40: { value: '#00c2a9' },
              20: { value: '#00b8a9' },
              10: { value: '#00857a' },
            },
          },
        },
      },
    },
  ],
};

export { acreageTheme };
