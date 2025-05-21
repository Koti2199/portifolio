/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      // phones
      sm: { max: "767px" },
      //tablets
      md: { min: "768px", max: "992px" },
      //small desktops
      lg: { min: "993px" },
      //desktops
      // xl: { min: "1280px", max: "1535px" },
      // //large desktops
      // "2xl": { min: "1536px" },
    },
    // boxShadow: {
    //   white: "0 1px 2px 0 #ffffff, 0 1px 2px 0 #ffffff",
    //   // black: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    // },
  },
  plugins: [],
};
