/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
        aldrich: ["Aldrich", "sans-serif"],
      },
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./src/assets/site-bg.jpg')",
        about: "url('./src/assets/about.png')",
        services: "url('./src/assets/services.png')",
      },
    },
  },
  plugins: [],
};
