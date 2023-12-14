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

exports.default = function (sortProps) {
  return function (a, b) {
    if (a === b) {
      return 0
    }

    if (["key", "ref"].includes(a)) {
      return -1
    } else if (["key", "ref"].includes(b)) {
      return 1
    }

    if (!sortProps) {
      return 0
    }

    return a < b ? -1 : 1
  }
}
//# sourceMappingURL=propNameSorter.js.map
