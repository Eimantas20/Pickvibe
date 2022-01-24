module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '639px' },
      'xl': { 'max': '1200px' },
    },
    extend: {
      backgroundImage: {
        'search': "url('./img/search.svg')",
      },
      textColor: {
        'rdac': '#d32d2b',
        'rddel': '#d32728',
        'grina': '#91c71a',
      },
    },
    fontFamily: {
      'robo': ['Roboto', 'Helvetica', 'Arial']
    }
  },
  plugins: [],
}
