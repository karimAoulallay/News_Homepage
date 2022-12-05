/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.html"],
  theme: {
    extend: {
      colors: {
        textColorLight: "hsl(233, 8%, 79%)",
        textColorDark: "hsl(236, 13%, 42%)",
        primaryColor: "hsl(240, 100%, 5%)",
        secondyColor: "hsl(5, 85%, 63%)",
        thirdlyColor: "hsl(35, 77%, 62%)",
        neutralColor: "hsl(36, 100%, 99%)",
      },
    },
  },
  plugins: [],
};
