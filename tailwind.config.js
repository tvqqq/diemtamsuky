module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: '#6A1D0F',
      },
    },
    fontFamily: {
      mono: ['Ephesis'],
      serif: ['"Cormorant SC"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
