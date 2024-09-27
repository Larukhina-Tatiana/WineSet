const { src, dest, watch, parallel, series } = require("gulp");
// конвертация sass-css
// const scss = require("gulp-sass")(require("sass"));
const sass = require("gulp-sass")(require("sass"));
// const sass = require("gulp-sass");
//переименование и объединиение сжатие css
const concat = require("gulp-concat");
// сжатие js
const uglify = require("gulp-uglify-es").default;
// добавление префиксов в старіе версии браузеров
const autoprefixer = require("gulp-autoprefixer");
// очистка папок
const clean = require("gulp-clean");
//  сжатие и конвертация картинок
const avif = require("gulp-avif");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const svgSprite = require("gulp-svg-sprite");
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();

// Конвертер шрифтов
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");

const include = require("gulp-include");

function fonts() {
  return src("src/fonts/*.*")
    .pipe(
      fonter({
        formats: ["woff", "ttf"],
      })
    )
    .pipe(src("fonts/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("fonts"));
}

function htmlInclude() {
  return src([
    "./src/html/index.html",
    "./src/html/page-gift-sets.html",
    "./src/html/page-glasses.html",
    "./src/html/page-delicacies.html",
  ])
    .pipe(
      fileinclude({
        prefix: "@",
        basepath: "@file",
      })
    )
    .pipe(dest("./"))
    .pipe(browserSync.stream());
}

const notify = require("gulp-notify");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");

function styles() {
  return src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", notify.onError())
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("./css/"))
    .pipe(browserSync.stream());
}

const svgSprites = () => {
  return src("./src/images/sprite/**.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("images/sprite"));
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  watch("./src/scss/**/*.scss", styles);
  watch("./src/html/*.html", htmlInclude);
  // watch("./src/images/**.jpg", imgToApp);
  // watch("./src/images/**.png", imgToApp);
  // watch("./src/images/**.jpeg", imgToApp);
  watch("./src/images/sprite/**.svg", svgSprites);
  // watch("./src/resources/**", resources);
  // watch("./src/fonts/**.ttf", fonts);
  // watch("./src/fonts/**.ttf", fontsStyle);
  // watch("./src/js/**/*.js", scripts);
};

// function styles() {
//   // return src("app/scss/style.scss")
//   return src([
//     "node_modules/swiper/swiper-bundle.css",
//     "node_modules/animate.css/animate.css",
//     // "node_modules/simplelightbox/dist/simple-lightbox.css",
//     "node_modules/nouislider/dist/nouislider.css",
//     // "node_modules/aos/dist/aos.css",
//     "css/ion.rangeSlider.css",
//     "css/jquery.formstyler.css",
//     "css/jquery.formstyler.theme.css",
//     // "css/jquery.rateyo.css",
//     "scss/style.scss",
//     // "!/css/style.min.css",
//   ])
//     .pipe(concat("style.min.css"))
//     .pipe(scss({ outputStyle: "compressed" }))
//     .pipe(dest("css"))
//     .pipe(
//       autoprefixer({
//         overrideBrowsersList: ["last 10 version"],
//         grid: true,
//       })
//     );
// }

function scripts() {
  return (
    src([
      // "https://unpkg.com/aos@2.3.1/dist/aos.js",
      "node_modules/jquery/dist/jquery.js",
      "node_modules/swiper/swiper-bundle.js",
      // "node_modules/mixitup/dist/mixitup.js",
      "libs/splide/splide.min.js",
      // "libs/mixitup3/mixitup.min.js",
      // "libs/smoothscroll/smooth-scroll.min.js",
      // "libs/choices/choices.min.js",
      // "libs/simplebar/simplebar.min.js",
      // "libs/slick/slick.min.js",
      // "node_modules/nouislider/dist/nouislider.js",
      // "node_modules/simplelightbox/dist/simple-lightbox.min.js",
      // "node_modules/siema/dist/siema.min.js",
      // "node_modules/aos/dist/aos.js",
      "libs/formstyler/jquery.formstyler.min.js",
      // "libs/tooltip/uikit.min.js",
      // "js/ion.rangeSlider.min.js",
      // "js/jquery.rateyo.js",
      // "./src/js/burgers.js",
      // "./src/js/sliders.js",
      // "./src/js/favorite.js",
      // "./src/js/menu.js",
      // "./src/js/cart.js",
      // "./src/js/script.js",
      // "./src/js/filter-style.js",
      // "./src/js/progress.js",
      // "./src/js/to-top.js",
      // "./src/js/accordeon.js",
      // "libs/graph-modal/graph-modal.min.js",
      // "./src/js/my-mixitup.js",
      // "./src/js/modals.js",
      // "./src/js/selects.js",
      // "./src/js/tabs.js",
      // "js/modal.js",
      // Для подключения многих (всех) файлов js? Обязательно исключать main.min.js
      // 'app/js/*.js',
      // '!app/js/main.min.js'
      "!/js/main.min.js",
    ])
      .pipe(concat("main.min.js"))
      // .pipe(concat("main.js"))
      .pipe(uglify())
      .pipe(dest("js"))
  );
}

function images() {
  // return src(["app/images/**/*.*", "!app/images/**/*.svg"])
  return (
    src(["src/images/*.*", "src/!images/*.svg"])
      .pipe(newer("images"))
      .pipe(avif({ quality: 50 }))

      // .pipe(src("app/images/**/*.*"))
      .pipe(src("src/images/*.*"))
      .pipe(newer("images"))
      .pipe(webp())

      .pipe(src("src/images/*.*"))
      .pipe(newer("images"))
      .pipe(imagemin())

      .pipe(dest("images/gift-sets"))
  );
}

// function sprite() {
//   return src("images/src/icons/*.svg")
//     .pipe(
//       svgSprite({
//         mode: {
//           stack: {
//             sprite: "../sprite.svg",
//             example: true,
//           },
//         },
//       })
//     )
//     .pipe(dest("images"));
// }

// функция удаления папок
function cleanDist() {
  return src("dist").pipe(clean("*.*"));
}

// функция переноса файлов в чистую папку для сдачи
function building() {
  // прописывать всё что есть - картинки, шрифты..
  return src(
    [
      "app/css/style.min.css",
      "app/js/main.min.js",
      "app/**/*.html",
      "app/fonts/*.*",
      "app/images/*.*",
      "!app/images/*.svg",
      "!app/images/stack",
      "app/images/sprite.svg",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

// слешение за обновлениями файлов
function watching() {
  // watch(["app/*.html"], includeh);
  watch(["app/scss/*.scss", "app/scss/components/*.scss"], styles);
  watch(["app/images/**/*.*"], images);
  watch(["app/js/main.js"], scripts);
}

exports.fonts = fonts;
// exports.includeh = includeh;
exports.htmlInclude = htmlInclude;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
// exports.sprite = sprite;
exports.svgSprites = svgSprites;
exports.building = building;
exports.watching = watching;
exports.watchFiles = watchFiles;

exports.build = series(cleanDist, building);

// exports.default = parallel(styles, images, scripts, watching);

exports.default = series(parallel(htmlInclude), images, styles, watchFiles);
