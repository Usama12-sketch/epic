/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "100": "#565454",
          "200": "rgba(82, 78, 73, 0.95)",
        },
        gainsboro: "#dee2e6",
        gray: {
          "100": "#1f1f25",
          "200": "rgba(29, 29, 36, 0.75)",
          "300": "rgba(33, 37, 41, 0.75)",
        },
        burlywood: "#cda470",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "segoe-ui": "'Segoe UI'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      "31xl": "50px",
      "35xl": "54px",
      lg: "18px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
