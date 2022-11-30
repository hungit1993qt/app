/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: "#313a46",
        purple: "#727cf5",
        "light-white": "rgba(255,255,255,0.17)",
        colorBorder: "#e7ebf0",
        content: "#fafbfe",
        box: "#fff",
        descript: "#98a6ad",
        piecolor1: "#0088FE",
        piecolor2: "#00C49F",
        piecolor3: "#FFBB28",
        piecolor4: "#FF8042",
        "text-number": "#6c757d",
        "border-color": "#f1f3fa",
      },
    },
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "547px",
      // => @media (min-width: 547px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }
      xl: "1024px",
      // => @media (min-width: 1024px) { ... }
      "2xl": "1680px",
      // => @media (min-width: 1680px) { ... }
    },
  },
  plugins: [],
};
