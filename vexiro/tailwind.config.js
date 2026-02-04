/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vixora-bg': '#050507',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        urbanist: ["Urbanist", "sans-serif"],
       syne: ["Syne", "sans-serif"]
      }
    },
  },
  plugins: [],
}
