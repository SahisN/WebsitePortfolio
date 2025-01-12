/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx}", // Scan all JS, TS, JSX, and TSX files in src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    }, // Add customizations here
  },
  plugins: [require("daisyui")],
};
