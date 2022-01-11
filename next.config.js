const path = require("path");

const directory = process.env.NEXT_PUBLIC_API_ORIGIN;
const directory_demo = process.env.NEXT_PUBLIC_API_ORIGIN_DEMO;

const isProd = process.env.NODE_ENV == "production";
const isDemo = process.env.NEXT_PUBLIC_ENVIRONMENT == "demo";

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    // 参考：https://zenn.dev/catnose99/scraps/5e3d51d75113d3
  },
  trailingSlash: true,
  // 参考：https://blog.kimizuka.org/entry/2021/01/16/203050
  basePath: isProd ? (isDemo ? directory_demo : directory) : "",
  assetPrefix: isProd ? (isDemo ? directory_demo : directory) : "",
  publicRuntimeConfig: {
    basePath: isProd ? (isDemo ? directory_demo : directory) : "",
  },
};
