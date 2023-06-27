// eslint-disable-next-line @typescript-eslint/no-var-requires
const { darkColors, lightColors } = require('./src/theme/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '128px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Verdana', 'sans-serif'],
      },
    },
    fontSize: {
      xs: '0.55rem',
      sm: '0.625rem',
      base: '0.75rem',
      md: '0.85rem',
      lg: '0.90rem',
      xl: '1rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '1.625rem',
      '5xl': '2.25rem',
    },
  },
  /* eslint-disable */
  plugins: [
    require('tailwindcss-themer')({
      themes: [
        {
          name: 'light',

          extend: {
            colors: {
              ...lightColors,
            },
          },
        },
        {
          name: 'dark',

          extend: {
            colors: { ...darkColors },
          },
        },
      ],
    }),
  ],
};
