/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kdam: ['Kdam Thmor Pro', 'sans-serif'], // Define el nombre y el fallback
      },
    },
    colors: {
      'primary': '#4C6793',
      'primary-active': '#0F1035',
      'secondary': '#7B828C',
      'light': '#C0DBFF',
      'black': '#000000',
      'alternative': '#176B87',
      'white': '#ffffff',
      'sombra': '#7b828c63',
      'red': '#FF8383'
    }
  },
  plugins: [],
}

