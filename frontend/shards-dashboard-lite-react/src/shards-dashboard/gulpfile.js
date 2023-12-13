/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var gulp = require("gulp")
var browserSync = require("browser-sync").create()
var sass = require("gulp-sass")
var cleanCSS = require("gulp-clean-css")
var rename = require("gulp-rename")

gulp.task("default", ["serve"])

gulp.task("compile:sass", function () {
  return gulp
    .src("styles/scss/shards-dashboards.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(rename({ suffix: "." + require("./package.json").version }))
    .pipe(gulp.dest("./styles"))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./styles"))
    .pipe(browserSync.stream())
})

gulp.task("compile", ["compile:sass"])

gulp.task("serve", ["compile"], function () {
  browserSync.init({ server: "." })
  gulp.watch("styles/**/*.scss", ["compile:sass"])
})
