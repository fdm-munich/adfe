/** @type {import('tailwindcss').Config} */
module.exports = {
  content : [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme : {
    colors : {
      transparent         : "transparent",
      current             : "currentColor",
      "upsdell-red"       : "#AE1F27",
      "upsdell-red-light" : "#C75A63",
      "purple-navy"       : "#5F5693",
      "purple-navy-light" : "#8a80b3",
      "green-cyan"        : "#469970",
      "green-cyan-light"  : "#7CD0A4",
      "puce"              : "#D18899",
      "white"             : "#FFFFFF",
      "black"             : "#000",
      "grayish"           : "#9DA3A6"
    },
    extend : {
    },
  },
  plugins : [],
};
