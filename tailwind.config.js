/** @type {import('tailwindcss').Config} */
import customTheme from './src/infrastructure/theme'

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...customTheme.colors
    },
    spacing: {
      0: customTheme.space[0],
      1: customTheme.space[1],
      2: customTheme.space[2],
      3: customTheme.space[3],
      4: customTheme.space[4],
      5: customTheme.space[5],
      6: customTheme.space[6],
      7: customTheme.space[7],
      8: customTheme.space[8]
    },
    lineHeight: {
      ...customTheme.lineHeight
    },
    fontWeight: {
      ...customTheme.fontWeights
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      caption: [customTheme.fontSizes.caption, { lineHeight: customTheme.lineHeight.body}],
      button: [customTheme.fontSizes.button, { lineHeight: customTheme.lineHeight.body}],
      body: [customTheme.fontSizes.body, { lineHeight: customTheme.lineHeight.body}],
      title: [customTheme.fontSizes.title, { lineHeight: customTheme.lineHeight.title}],
      h5: [customTheme.fontSizes.h5, { lineHeight: customTheme.lineHeight.h5}],
      h4: [customTheme.fontSizes.h4, { lineHeight: customTheme.lineHeight.h4}],
      h3: [customTheme.fontSizes.h3, { lineHeight: customTheme.lineHeight.h3}],
      h2: [customTheme.fontSizes.h2, { lineHeight: customTheme.lineHeight.h2}],
      h1: [customTheme.fontSizes.h1, { lineHeight: customTheme.lineHeight.h1}]
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

