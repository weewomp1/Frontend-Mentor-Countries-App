// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fontSizes: {
        h1: '24px',
        h2: '18px',
        h3: '16px',
        h4: '14px',
        h5: '12px'
    },
    colors: {
      black300: '#2b3844',
      black600: '#202c36',
      grey300: '#fafafa',
      black900: '#111517',
      black300: '#848484'
    },
    fonts: {
        NunintoSans: ''
    }
  },
  media: {
    desktop: '(min-width: 720px)',
    mobile: '(min-width: 640px)',
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});