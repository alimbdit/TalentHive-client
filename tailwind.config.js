/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7d0eed",

          secondary: "#a2aef9",

          accent: "#9873FF",

          neutral:"#7E90FE",

          "base-100": "#FFFFFF",

          info: "#757575",

          success: "#6BDBA7",

          warning: "#FFD700",

          error: "#E73651",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
