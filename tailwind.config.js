const colors = require('tailwindcss/colors')
const indielayer = require('@indielayer/ui/tailwind.preset')

module.exports = {
  darkMode: 'class',
  // load indielayer ui presets
  presets: [indielayer()],
  // allow PurgeCSS to analyze components
  content: [
    './index.html',
    './**/*.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/@indielayer/ui/**/*',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "rgb(242,242,242)",
          "100": "rgb(228,228,229)",
          "200": "rgb(198,198,199)",
          "300": "rgb(161,163,164)",
          "400": "rgb(81,86,88)",
          "500": "#001e26",
          "600": "rgb(0,28,36)",
          "700": "rgb(0,26,33)",
          "800": "rgb(0,19,25)",
          "900": "rgb(0,16,21)"
        },
        secondary: {
          "50": "rgb(242,242,243)",
          "100": "rgb(228,229,229)",
          "200": "rgb(198,199,200)",
          "300": "rgb(161,165,167)",
          "400": "rgb(81,90,96)",
          "500": "#012a36",
          "600": "rgb(1,40,51)",
          "700": "rgb(1,36,47)",
          "800": "rgb(1,27,35)",
          "900": "rgb(1,23,30)"
        },
        tertiary: {
          "50": "rgb(248,250,250)",
          "100": "rgb(241,245,245)",
          "200": "rgb(225,235,235)",
          "300": "rgb(209,225,224)",
          "400": "rgb(182,208,206)",
          "500": "#accac8",
          "600": "rgb(163,192,190)",
          "700": "rgb(149,175,173)",
          "800": "rgb(111,131,130)",
          "900": "rgb(94,111,110)"
        },
        success: colors.green,
        warning: colors.yellow,
        error: colors.red,
      },
    },
  },
  plugins: [],
}
