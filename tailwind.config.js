module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      80: '80% !important',
    },
    extend: {
      colors: {
        dark: '#101010',
      },
    },
    screens: {
      sm: '640px',

      md: '768px',

      lt: '1024px',

      '2xl': '1440px',
    },
  },
  plugins: [],
};
