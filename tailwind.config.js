/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep teal — trust, reliability, primary brand color
        teal: {
          50: "#EAF3F1",
          100: "#CFE6E1",
          400: "#1B7A6C",
          500: "#0F6E62",
          600: "#0B5D52",
          700: "#084A42",
          900: "#062F2A",
        },
        // Marigold — warmth, action, used sparingly as an accent
        marigold: {
          100: "#FCEACB",
          300: "#F6C878",
          500: "#F0A93B",
          600: "#D98F22",
        },
        // Warm paper background
        paper: {
          DEFAULT: "#FBF7EF",
          dark: "#F3EDE0",
        },
        // Deep teal-black ink for text (not pure black)
        ink: {
          DEFAULT: "#16231F",
          soft: "#3F4E49",
          faint: "#6B7A75",
        },
      },
      fontFamily: {
        heading: ["var(--font-baloo)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 8px 24px -8px rgba(11, 93, 82, 0.18)",
      },
    },
  },
  plugins: [],
};
