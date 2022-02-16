const gulp = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
require("dotenv").config();

const env = process.env;
const path = env.NODE_ENV == "production" ? "out" : "out_dev";
const directory = env.NODE_ENV == "production" ? env.NEXT_PUBLIC_API_ORIGIN : env.NEXT_PUBLIC_API_ORIGIN_DEV;

const bgUrlReplace = () => {
  return gulp
    .src([`./${path}/_next/static/css/*.css`])
    .pipe(replace(/background-image:url\(\//g, `background-image:url(${directory}/`))
    .pipe(gulp.dest(`./${path}/_next/static/css/`));
};

const htmlReplace = () => {
  return gulp
    .src([`./${path}/**/*.html`])
    .pipe(replace(/(?<=\/_next\/static\/css\/).*?(?=\.css)/g, "main")) // next export時のcssのファイル名を置換
    .pipe(replace(/_next\/static\/css\//g, "assets/css/")) // next export時のcssのパス名を置換
    .pipe(replace(/<style><\/style>/g, "")) // 空のstyleタグを削除
    .pipe(replace(/ data-n-g=""\/><noscript data-n-css=""><\/noscript>/g, "/>")) // 不要記述を削除
    .pipe(replace(/<meta name="next-head-count" content=".*?"\/>/g, "")) // 不要記述を削除
    .pipe(gulp.dest(`./${path}/`));
};

const cssRename = () => {
  return gulp
    .src([`./${path}/_next/static/css/*.css`])
    .pipe(rename("main.css"))
    .pipe(gulp.dest(`./${path}/assets/css/`));
};

gulp.task("default", gulp.series(bgUrlReplace, gulp.parallel(htmlReplace, cssRename)));

const remConversion = () => {
  return gulp
    .src([`./src/**/*.scss`])
    .pipe(replace(/([1-9]\d*|0)(\.\d+)?px/g, "rem($1$2)")) // 整数 or 少数 + px ➝ rem()に変換
    .pipe(gulp.dest(`./src/`));
};

gulp.task("remConversion", gulp.parallel(remConversion));
