const em = (size, base = 16) => {
  return size / base + "em";
};

module.exports = {
  content: ["src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      default: "#222222",
      white: "#ffffff",
      black: "#000000",
      red: "#f32424",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: "#8492a6",
    },
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
      // serif: ["Noto Serif JP", "serif"],
    },
    extend: {
      screens: {
        xl: { raw: `all and (max-width: ${em(1920)})` },
        lg: { raw: `all and (max-width: ${em(1440)})` },
        md: { raw: `only screen and (max-width: ${em(896)})` },
        sm: { raw: `only screen and (max-width: ${em(480)})` },
        print: { raw: "print" },
      },
    },
  },
  plugins: [
    require("./plugins/tailwind-vw-calc.js")({
      extend: {
        sizes: [100, 200],
      },
    }),
  ],
};
