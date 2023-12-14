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

Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function (obj) {
        return typeof obj
      }
    : function (obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj
      }

exports.default = sortObject
function sortObject(value) {
  // return non-object value as is
  if (
    value === null ||
    (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object"
  ) {
    return value
  }

  // return date and regexp values as is
  if (value instanceof Date || value instanceof RegExp) {
    return value
  }

  // make a copy of array with each item passed through sortObject()
  if (Array.isArray(value)) {
    return value.map(sortObject)
  }

  // make a copy of object with key sorted
  return Object.keys(value)
    .sort()
    .reduce(function (result, key) {
      // eslint-disable-next-line no-param-reassign
      result[key] = sortObject(value[key])
      return result
    }, {})
}
//# sourceMappingURL=sortObject.js.map
