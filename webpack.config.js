const environment = process.env.NODE_ENV == "production" ? "production" : "development";
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./webpack/main.js`,
  mode: environment,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/public/assets/js`,
    // 出力ファイル名
    filename: "main.min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  target: ["web", "es5"],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
