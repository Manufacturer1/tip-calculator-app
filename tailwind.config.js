/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          strongCyan:'hsl(172, 67%, 45%)',
        },
        neutral:{
          veryDarkCyan:'hsl(183, 100%, 15%)',
          darkGrayishCyan:'hsl(186, 14%, 43%)',
          grayishCyan:'hsl(184, 14%, 56%)',
          lighGrayishCyan:'hsl(185, 41%, 84%)',
          veryLightGrayishCyan:'hsl(189, 41%, 97%)'
        }
      }
    },
  },
  plugins: [],
}

