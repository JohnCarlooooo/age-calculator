/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Purple: `hsl(259, 100%, 65%)`,
        LightRed: `hsl(0, 100%, 67%)`,
        White: `hsl(0, 0%, 100%)`,
        OffWhite: `hsl(0, 0%, 94%)`,
        LightGrey: `hsl(0, 0%, 86%)`,
        SmokeyGrey: `hsl(0, 1%, 44%)`,
        OffBlack: `hsl(0, 0%, 8%)`,
      },
    },
    screens: {
      mobile: `375px`,
      desktop: `1440px`,
    },
  },
  plugins: [],
};
