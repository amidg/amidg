const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        levitate: {
          "0%": { transform: "translate(0)" },
          "10%": { transform: "translate(-0.5px, -0.5px)" },
          "20%": { transform: "translate(0.5px, -px)" },
          "30%": { transform: "translate(-0.5px, 0.5px)" },
          "40%": { transform: "translate(0.5px, 0.5px)" },
          "50%": { transform: "translate(-0.5px, -0.5px)" },
          "60%": { transform: "translate(0.5px, -0.5px)" },
          "70%": { transform: "translate(-0.5px, 0.5px)" },
          "80%": { transform: "translate(-0.5px, -0.5px)" },
          "90%": { transform: "translate(0.5px, -0.5px)" },
          "100%": { transform: "translate(0)" },
        },
        slide: {
          "0%": { transform: "translateY(100%)", opacity: 0.1 },
          "15%": { transform: "translateY(0)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },

        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },

        "noise-animation-1": {
          "0%": { transform: "translate(0)" },
          "10%": { transform: "translate(-2px, -2px)" },
          "20%": { transform: "translate(2px, -2px)" },
          "30%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, 2px)" },
          "50%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, -2px)" },
          "70%": { transform: "translate(-2px, 2px)" },
          "80%": { transform: "translate(-2px, -2px)" },
          "90%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },

        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
      }
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slide: "slide 9s linear infinite",
        ["infinite-slider"]: "infiniteSlider 35s linear infinite",
        levitate: "levitate 1s ease-in-out infinite",
        "noise-animation-1": "noise-animation-1 2s linear infinite",
        wave: 'wave 1.5s infinite'
      },
      colors: {
        main: "#0F1521",
        // second: "#1B263E",
        second: '#EDB200',
        text: "#5686f5",
        "main-light": "#fcfcfc",
        "second-light": "#f6f9fe",
        "light-text": "#020617",
        "text-secondary": "#727e99",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}