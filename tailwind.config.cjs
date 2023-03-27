/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E779C1",

          secondary: "#58C7F3",

          accent: "#F3CC30",

          neutral: "#20134E",

          "base-100": "#2D1B69",

          info: "#53C0F3",

          success: "#71EAD2",

          warning: "#F3CC30",

          error: "#E24056",

          white: "#ffffff",

          black: "#1a1a1a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
