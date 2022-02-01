const em = (size, base = 16) => {
  return size / base + "em";
};

const object = (limit, base = 16) => {
  return {
    ...[...Array(limit + 1)].reduce((object, _, index) => {
      object[`${index}`] = `${index / base}rem`;
      return object;
    }, {}),
  };
};

module.exports = {
  content: ["src/**/*.{html,js,jsx}"],
  theme: {
    spacing: object(200),
    colors: {
      default: "#222222",
      white: "#ffffff",
      black: "#000000",
      // red: "#f32424",
      // blue: "#1fb6ff",
      // purple: "#7e5bef",
      // pink: "#ff49db",
      // orange: "#ff7849",
      // green: "#13ce66",
      // yellow: "#ffc82c",
      // gray: "#8492a6",
    },
    fontFamily: {
      sans: ["Noto Sans JP", "游ゴシック体", "Yu Gothic", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "MS Pゴシック", "MS PGothic", "sans-serif"],
      serif: ["Noto Serif JP", "游明朝体", "Yu Mincho", "YuMincho", "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", "serif"],
    },
    fontSize: object(80),
    lineHeight: {
      xxs: "1",
      xs: "1.2",
      sm: "1.4",
      md: "1.6",
      lg: "1.8",
      xl: "2",
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
      extend: {},
    }),
  ],
};
