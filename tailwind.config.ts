import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      fontFamily: {
        'sans': ['Merriweather Sans','Graphik', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        // 'cot': ['MerriweatherSans']
      },
    },
    screens: {
      'xs': '320px',
      ...defaultTheme.screens
    },
    colors: {
      dark: "#000D3A",
      light: "#9BB6FD",
      lighter: "#C7CFEB",
    }
  },
  plugins: [],
} satisfies Config

