/** @type {import('tailwindcss').Config} */
module.exports = {
  content : [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme : {
    colors : {
      transparent   : "transparent",
      current       : "currentColor",
      "upsdell-red" : "#AE1F27",
      "purple-navy" : "#5F5693",
      "green-cyan"  : "#469970",
      "puce"        : "#D18899",
      "white"       : "#FFFFFF",
      "black"       : "#000"
    },
    extend : {
    },
  },
  plugins : [],
};
