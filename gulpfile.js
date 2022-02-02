const gulp = require("gulp");
const replace = require("gulp-replace");
const rename = require("gulp-rename");

const path = process.env.NODE_ENV == "production" ? "out" : "out_dev";

const htmlReplace = () => {
  return gulp
    .src([`./${path}/**/*.html`])
    .pipe(replace(/(?<=\/_next\/static\/css\/).*?(?=\.css)/g, "main"))
    .pipe(replace(/_next\/static\/css\//g, "assets/css/"))
    .pipe(gulp.dest(`./${path}/`));
};

const cssRename = () => {
  return gulp
    .src([`./${path}/_next/static/css/*.css`])
    .pipe(rename("main.css"))
    .pipe(gulp.dest(`./${path}/assets/css/`));
};

gulp.task("default", gulp.series(gulp.parallel(htmlReplace, cssRename)));
