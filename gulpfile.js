
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

const paths = {
  scss: {
    src: './app/scss/**/*.scss',
    dest: './app/css'
  },
  js: {
    src: './app/js_source/**/*.js',
    dest: './app/js',
  },
  html: {
    src: './app/*.html'
  }
};

// Завдання для компіляції SCSS
function styles() {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()])) // Використання postcss з autoprefixer
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// Babael for ES2015
function scripts() {
  return gulp.src(paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// Завдання для запуску BrowserSync
function serve() {
  browserSync.init({
    server: {
      baseDir: './app/'
    }
  });

  gulp.watch(paths.scss.src, styles);
  gulp.watch(paths.js.src, scripts);
  gulp.watch(paths.html.src).on('change', browserSync.reload);

}

exports.styles = styles;
exports.scripts = scripts;
exports.serve = gulp.series(gulp.parallel(styles, scripts), serve);
exports.default = gulp.series(gulp.parallel(styles, scripts), serve);
