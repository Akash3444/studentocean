module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif"
      },
      boxShadow: {
        around: '0 0 80px 0px theme(colors.gray.200)',
        'around-dark': '0 0 80px 0px theme(colors.gray.700)'
      }
    },
  },
  plugins: [],
}