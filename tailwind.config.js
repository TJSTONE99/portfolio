const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend : {
      boxShadow: {
        'md-white' : '0 4px 6px -1px rgba(89, 128, 214, 0.1), 0 2px 4px -1px rgba(89, 128, 214, 0.06);',
        'xl-white' : '0 20px 25px -5px rgba(89, 128, 214, 0.1), 0 10px 10px -5px rgba(89, 128, 214, 0.04);'
      },
      fontFamily : {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      scale : ['hover', 'dark'],
      transform : ['hover', 'dark'],
    },
  },
  plugins: [],
}
