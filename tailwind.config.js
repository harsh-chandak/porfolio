/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mysql-blue': '#00758F',
        'mysql-orange': '#F29111',
      },
    },
  },
  plugins: [],
}
