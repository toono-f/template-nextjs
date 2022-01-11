module.exports = {
  plugins: {
    "postcss-import": {}, // CSS内で@importを有効にする
    tailwindcss: {}, // tailwindcssを導入する
    autoprefixer: {}, // どのブラウザでも動くようにする
    cssnano: {}, // 圧縮する
  },
};
