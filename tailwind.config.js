module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: '#6A1D0F',
        back: '#E1D3C1',
      },
      backgroundImage: {
        'banner-1': "url('/banner1.jpg')",
        'banner-2': "url('/banner2.jpg')",
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
