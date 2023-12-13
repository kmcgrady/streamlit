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

/*
 |--------------------------------------------------------------------------
 | Shards Dashboards: Components Overview Template
 |--------------------------------------------------------------------------
 */

"use strict"
;(function ($) {
  $(document).ready(function () {
    // Slider example 1
    $("#slider-example-1").customSlider({
      start: 85,
      connect: [true, false],
      tooltips: true,
      range: {
        min: 0,
        max: 100,
      },
    })

    // Slider example 2
    $("#slider-example-2").customSlider({
      start: 15,
      connect: [false, true],
      range: {
        min: 0,
        max: 100,
      },
    })

    // Slider example 3
    $("#slider-example-3").customSlider({
      start: [35, 65],
      range: {
        min: 0,
        max: 100,
      },
      connect: true,
      pips: {
        mode: "positions",
        values: [0, 25, 50, 75, 100],
        density: 5,
      },
    })
  })
})(jQuery)
