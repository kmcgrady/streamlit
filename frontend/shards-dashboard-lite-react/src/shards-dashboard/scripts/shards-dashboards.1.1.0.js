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

/*!
 * Shards Dashboards v1.1.0
 * Copyright 2011-2018 DesignRevision
 * SEE LICENSE FILE
 */
;(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory()
    : typeof define === "function" && define.amd
    ? define(factory)
    : factory()
})(this, function () {
  "use strict"

  if (typeof Chart === "undefined") {
    throw new Error(
      "Shards Dashboard requires the Chart.js library in order to function properly."
    )
  }

  window.ShardsDashboards = window.ShardsDashboards
    ? window.ShardsDashboards
    : {}

  $.extend($.easing, {
    easeOutSine: function easeOutSine(x, t, b, c, d) {
      return c * Math.sin((t / d) * (Math.PI / 2)) + b
    },
  })

  /**
   * Chart.js - Line Chart with Vertical Line
   */
  Chart.defaults.LineWithLine = Chart.defaults.line
  Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw: function draw(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease)
      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
        var activePoint = this.chart.tooltip._active[0],
          ctx = this.chart.ctx,
          x = activePoint.tooltipPosition().x,
          topY = this.chart.scales["y-axis-0"].top,
          bottomY = this.chart.scales["y-axis-0"].bottom

        // Draw the line
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(x, topY)
        ctx.lineTo(x, bottomY)
        ctx.lineWidth = 0.5
        ctx.strokeStyle = "#ddd"
        ctx.stroke()
        ctx.restore()
      }
    },
  })

  $(document).ready(function () {
    /**
     * Dropdown adjustments
     */

    var slideConfig = {
      duration: 270,
      easing: "easeOutSine",
    }

    // Add dropdown animations when toggled.
    $(":not(.main-sidebar--icons-only) .dropdown").on(
      "show.bs.dropdown",
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .slideDown(slideConfig)
      }
    )

    $(":not(.main-sidebar--icons-only) .dropdown").on(
      "hide.bs.dropdown",
      function () {
        $(this)
          .find(".dropdown-menu")
          .first()
          .stop(true, true)
          .slideUp(slideConfig)
      }
    )

    /**
     * Sidebar toggles
     */
    $(".toggle-sidebar").click(function (e) {
      $(".main-sidebar").toggleClass("open")
    })
  })
})

//# sourceMappingURL=shards-dashboards.1.1.0.js.map
