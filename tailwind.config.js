module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
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
      fontSize: {
        h3: "2.5rem",
        h4: "2rem",
      },
      height: {
        88: "22rem",
        100: "30rem",
        110: "42rem",
        main: "75vh",
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
