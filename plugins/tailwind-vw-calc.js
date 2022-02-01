// 参考：https://zenn.dev/ixkaito/articles/tailwindcss-fluid-spacing

const plugin = require("tailwindcss/plugin");
const dynamicSpacing = plugin.withOptions(
  () => {
    return () => {
      // empty
    };
  },
  (options) => {
    const spacing = () => {
      // const sizes = [...(options?.sizes ?? Object.keys(require("tailwindcss/defaultTheme").spacing)), ...(options?.extend?.sizes ?? [])]
      const sizes = [
        ...(options?.sizes ??
          Object.keys(
            [...Array(100 + 1)].reduce((object, _, index) => {
              object[`${index}`] = `${index / 16}rem`;
              return object;
            }, {}),
          )),
      ]
        .filter((size) => Number(size) !== 0 && !isNaN(size))
        .map((size) => `${size}`);

      // SPデザイン基準のVW計算
      const values = sizes.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: cur * 0.26666666666666666667, // 1 ÷ 375 * 100
        }),
        {},
      );

      // タブレット基準のVW計算
      // const valuesTb = sizes.reduce(
      //   (acc, cur) => ({
      //     ...acc,
      //     [cur]: cur * 0.09765625, // 1 ÷ 1024 * 100
      //   }),
      //   {},
      // );

      // PCデザイン基準のVW計算
      // const valuesPc = sizes.reduce(
      //   (acc, cur) => ({
      //     ...acc,
      //     [cur]: cur * 0.073206442166910688141, // 1 ÷ 1366 * 100
      //   }),
      //   {},
      // );

      const obj = {};
      // SPデザイン基準のVW計算
      for (const [size, value] of Object.entries(values)) {
        obj[`vw-${size}`] = `${value}vw`;
      }
      // タブレット基準のVW計算
      // for (const [size, value] of Object.entries(valuesTb)) {
      //   obj[`vw-tb-${size}`] = `${value}vw`;
      // }
      // PCデザイン基準のVW計算
      // for (const [size, value] of Object.entries(valuesPc)) {
      //   obj[`vw-pc-${size}`] = `${value}vw`;
      // }
      return obj;
    };

    return {
      theme: {
        extend: {
          spacing: spacing(),
          // fontSize: spacing(),
        },
      },
    };
  },
);

// モジュールを他のプログラムで利用できるようにする
module.exports = dynamicSpacing;
