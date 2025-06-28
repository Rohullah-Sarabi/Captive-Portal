/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        awcc: {
          blue: '#0056B3',
          darkBlue: '#003366',
          lightBlue: '#0077CC',
          orange: '#FF6600',
          yellow: '#FFCC00',
          lightGray: '#F5F5F5',
          gray: '#DDDDDD',
          darkGray: '#666666',
          black: '#333333'
        }
      },
      backgroundImage: {
        'awcc-gradient': 'linear-gradient(to bottom, #0056B3, #003366)'
      }
    },
  },
  plugins: [],
}