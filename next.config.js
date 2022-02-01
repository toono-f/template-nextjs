const path = require("path");

const directory = process.env.NEXT_PUBLIC_API_ORIGIN;
const directory_demo = process.env.NEXT_PUBLIC_API_ORIGIN_DEMO;

const isProd = process.env.NODE_ENV == "production";
const isDemo = process.env.NEXT_PUBLIC_ENVIRONMENT == "demo";

const { resolve } = require("path");

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false, // フォントを最適化無効
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    // 参考：https://zenn.dev/catnose99/scraps/5e3d51d75113d3
  },
  trailingSlash: true,
  // 参考：https://blog.kimizuka.org/entry/2021/01/16/203050
  basePath: isProd ? (isDemo ? directory_demo : directory) : "",
  assetPrefix: isProd ? (isDemo ? directory_demo : directory) : "",
  publicRuntimeConfig: {
    basePath: isProd ? (isDemo ? directory_demo : directory) : "",
  },
  images: {
    disableStaticImages: true, // next/imagesではなくnext-optimized-imagesを利用する場合 true
    // 参考:https://exerror.com/nextjs-typeerror-unsupported-file-type-undefined-after-update-to-v-11/
  },
  webpack: (config) => {
    config.resolve.alias["@public"] = resolve(__dirname, "public");
    config.module.rules.push({
      test: /(\.ttf|\.otf|\.woff|\.woff2)$/,
      use: "raw-loader",
    });
    return config;
  },
  // generateBuildId: async () => {
  //   return "";
  // },
};

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImages: true,
        optimizeImagesInDev: false,
        removeOriginalExtension: true,
        responsive: {
          adapter: require("responsive-loader/sharp"),
          // sizes: [640, 960, 1200, 1800],
        },
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        webp: {
          preset: "default",
          quality: 75,
        },
      },
    ],
  ],
  nextConfig,
);
