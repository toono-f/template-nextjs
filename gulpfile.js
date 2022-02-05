const gulp = require("gulp");
const replace = require("gulp-replace");
const rename = require("gulp-rename");

const path = process.env.NODE_ENV == "production" ? "out" : "out_dev";

const htmlReplace = () => {
  return gulp
    .src([`./${path}/**/*.html`])
    .pipe(replace(/(?<=\/_next\/static\/css\/).*?(?=\.css)/g, "main")) // next export時のcssのファイル名を置換
    .pipe(replace(/_next\/static\/css\//g, "assets/css/")) // next export時のcssのパス名を置換
    .pipe(gulp.dest(`./${path}/`));
};

const cssRename = () => {
  return gulp
    .src([`./${path}/_next/static/css/*.css`])
    .pipe(rename("main.css"))
    .pipe(gulp.dest(`./${path}/assets/css/`));
};

gulp.task("default", gulp.series(gulp.parallel(htmlReplace, cssRename)));

const remConversion = () => {
  return gulp
    .src([`./src/**/*.scss`])
    .pipe(replace(/([1-9]\d*|0)(\.\d+)?px/g, "rem($1$2)")) // 整数 or 少数 + px ➝ rem()に変換
    .pipe(gulp.dest(`./src/`));
};

gulp.task("remConversion", gulp.parallel(remConversion));
