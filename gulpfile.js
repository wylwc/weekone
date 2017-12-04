var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");
var concat = require("gulp-concat")
// gulp.task("js",function(){
//     gulp.src("./js")
//     .pipe()
//     .pipe(concat("rejs.js"))
//     .pipe()
// })


// gulp.task("css",function(){
//     gulp.src("./css/style.css")
//     .pipe(concat("recss.css"))
//     .pipe(minifyCss())
//     .pipe(gulp.dest("./css"))
// })
var options = {
    collapseWhitespace:true,
    removeEmptyAttributes:true
}
gulp.task("html",function(){
    gulp.src("./index.html")
    .pipe(concat("rehtml.html"))
    .pipe(htmlmin(options))
    .pipe(gulp.dest("./"))
})