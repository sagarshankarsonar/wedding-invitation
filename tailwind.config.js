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
          600: "#E0115F", // शाही रानी पिंक
          700: "#B80C4E",
          900: "#5B0627",
        },
        cream: {
          50: "#FFFFFF",
          100: "#FFFEFA", // उजळ पांढरा-क्रीम बेस
          200: "#F5F0E6",
          300: "#EADDC7",
        },
        gold: {
          500: "#D4AF37", // रॉयल गोल्ड
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
