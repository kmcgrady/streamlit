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

var _tree = require("./../tree")

exports.default = function (previousNodes, currentNode) {
  var nodes = previousNodes.slice(
    0,
    previousNodes.length > 0 ? previousNodes.length - 1 : 0
  )
  var previousNode = previousNodes[previousNodes.length - 1]

  if (
    previousNode &&
    (currentNode.type === "string" || currentNode.type === "number") &&
    (previousNode.type === "string" || previousNode.type === "number")
  ) {
    nodes.push(
      (0, _tree.createStringTreeNode)(
        String(previousNode.value) + String(currentNode.value)
      )
    )
  } else {
    if (previousNode) {
      nodes.push(previousNode)
    }

    nodes.push(currentNode)
  }

  return nodes
}
//# sourceMappingURL=mergeSiblingPlainStringChildrenReducer.js.map
