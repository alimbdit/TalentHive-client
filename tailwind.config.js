/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ac10ea",

          secondary: "#bb97f4",

          accent: "#b9d4f7",

          neutral: "#3B2A3C",

          "base-100": "#35424B",

          info: "#AAC9E9",

          success: "#1FA356",

          warning: "#FFD700",

          error: "#F53D53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
