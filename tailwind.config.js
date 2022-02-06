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
      default: "#1a1a1a",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Noto Sans JP", "游ゴシック体", "Yu Gothic", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "MS Pゴシック", "MS PGothic", "sans-serif"],
      serif: ["Lato", "Noto Sans JP", "游ゴシック体", "Yu Gothic", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "MS Pゴシック", "MS PGothic", "sans-serif"],
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
        pc: { raw: `all and (max-width: ${em(1365)})` },
        tb: { raw: `only screen and (max-width: ${em(1023)})` },
        sp: { raw: `only screen and (max-width: ${em(767)})` },
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
