/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "body-bg": "hsl(0, 0%, 98%)",
        "element-bg": "hsl(0, 0%, 100%)",
        "text-color": "hsl(200, 15%, 8%)",
        "input-bg": "hsl(0, 0%, 52%)",
        shadow: "hsla(0, 2%, 85%, 0.3)",
        // "box-shadow": 0px 0px 5px 2px hsla(0, 2%, 79%, 0.5);
        // "text-shadow": 0 20px 30px rgba(0, 0, 0, 0.2);
        "active-link": " hsl(209, 23%, 22%)",
        "active-link-color": "hsl(0, 0%, 100%)",
        // "shimmer-bg-img": "linear-gradient(
        //   to right,
        //   hsl(0, 0%, 95%) 0%,
        //   hsl(0, 0%, 99%) 20%,
        //   hsl(0, 0%, 95%) 40%,
        //   hsl(0, 0%, 95%) 100%
        // )",
        // "shimmer-bg: hsl(0, 0%, 95%);

        "dark-body-bg": "hsl(207, 26%, 17%)",
        "dark-element-bg": "hsl(209, 23%, 22%)",
        "dark-text-color": "hsl(0, 0%, 100%)",
        "dark-input-bg": "hsl(0, 0%, 52%)",
        "dark-shadow": "hsla(209, 38%, 11%, 0.3)",
        // "box-shadow": 0px 0px 5px 2px hsla(0, 2%, 79%, 0.5);
        // "text-shadow": 0 20px 30px rgba(0, 0, 0, 0.2);
        "dark-active-link": "hsl(0, 0%, 100%)",
        "dark-active-link-color": "hsl(200, 15%, 8%)",
      },
      keyframes: {
        pulse: {
          "50%": { opacity: "40%" },
        },
      },
    },
  },
  plugins: [],
};
