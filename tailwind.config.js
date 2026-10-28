/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rani: {
          custom: "#E30B5C", // तुम्ही दिलेला अचूक HEX कोड
          950: "#3D0218",
          900: "#5B0627",
          800: "#800A38",
        },
        cream: {
          50: "#FFFFFF",
          100: "#FFFEFA",
          200: "#F5F0E6",
        },
        gold: {
          400: "#ECC94B",
          500: "#D4AF37",
          600: "#AA771C",
        },
      },
      fontFamily: {
        serif: ["Cinzel Decorative", "Cinzel", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        script: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
