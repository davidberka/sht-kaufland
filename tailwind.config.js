module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          main: "#E3000F",
        },
        blue: {
          main: "#1E2A4F",
        },
      },
      fontFamily: {
        body: "'Blinker', sans-serif",
      },
      height: {
        88: "22rem",
      },
      zIndex: {
        n1: -1,
      },
      backgroundImage: (theme) => ({
        redBg: "url('/src/assets/BG.png')",
        blueBg: "url('/src/assets/BG-1.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
