/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7d0eed",

          secondary: "#a2aef9",

          accent: "#b6e87a",

          neutral: "#17141F",

          "base-100": "#FFFFFF",

          info: "#A2B2E2",

          success: "#6BDBA7",

          warning: "#FFD700",

          error: "#E73651",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
