import COLORS from './colors'
import BREAKPOINTS from './breakpoints'

export const themeConfig = {
  screens: BREAKPOINTS,
    extend: {
      colors: COLORS,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
}
