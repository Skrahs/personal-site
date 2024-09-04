module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3B82F6',
        },
        gray: {
          400: '#9CA3AF',
          500: '#6B7280',
          800: '#1F2937',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
