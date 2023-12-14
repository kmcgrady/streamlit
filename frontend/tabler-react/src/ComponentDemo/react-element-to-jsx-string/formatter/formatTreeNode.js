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

var _formatReactElementNode = require("./formatReactElementNode")

var _formatReactElementNode2 = _interopRequireDefault(_formatReactElementNode)

var _formatReactFragmentNode = require("./formatReactFragmentNode")

var _formatReactFragmentNode2 = _interopRequireDefault(
  _formatReactFragmentNode
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var jsxStopChars = ["<", ">", "{", "}"]
var shouldBeEscaped = function shouldBeEscaped(s) {
  return jsxStopChars.some(function (jsxStopChar) {
    return s.includes(jsxStopChar)
  })
}

var escape = function escape(s) {
  if (!shouldBeEscaped(s)) {
    return s
  }

  return "{`" + s + "`}"
}

var preserveTrailingSpace = function preserveTrailingSpace(s) {
  var result = s
  if (result.endsWith(" ")) {
    result = result.replace(/^(\S*)(\s*)$/, "$1{'$2'}")
  }

  if (result.startsWith(" ")) {
    result = result.replace(/^(\s*)(\S*)$/, "{'$1'}$2")
  }

  return result
}

exports.default = function (node, inline, lvl, options) {
  if (node.type === "number") {
    return String(node.value)
  }

  if (node.type === "string") {
    return node.value
      ? "" + preserveTrailingSpace(escape(String(node.value)))
      : ""
  }

  if (node.type === "ReactElement") {
    return (0, _formatReactElementNode2.default)(node, inline, lvl, options)
  }

  if (node.type === "ReactFragment") {
    return (0, _formatReactFragmentNode2.default)(node, inline, lvl, options)
  }

  throw new TypeError('Unknow format type "' + node.type + '"')
}
//# sourceMappingURL=formatTreeNode.js.map
