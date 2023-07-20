/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Kaushan Script", "cursive"],
        hero: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '425px',
      },
    },
  },
  plugins: [],
}

