module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        input: '0px -1px 2px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        'leftbar-inactive': '#929292',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
