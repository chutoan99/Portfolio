module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      80: '80% !important',
    },
    extend: {
      colors: {
        primary: '#7D11F9',
        label: '#3f3a64',
        input: '#6c757d',
        dark: '#101010',
        black: '#000000',
        white: '#ffffff',
        description: '#696969',
      },
      border: {
        primary: '#7d11f9',
      },
      background: {
        white: '#ffffff',
        primary: '#7D11F9',
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
