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

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _tree = require("./../tree")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var supportFragment = Boolean(_react.Fragment)

var getReactElementDisplayName = function getReactElementDisplayName(element) {
  return (
    element.type.displayName ||
    element.type.name || // function name
    (typeof element.type === "function" // function without a name, you should provide one
      ? "No Display Name"
      : element.type)
  )
}

var noChildren = function noChildren(propsValue, propName) {
  return propName !== "children"
}

var onlyMeaningfulChildren = function onlyMeaningfulChildren(children) {
  return (
    children !== true &&
    children !== false &&
    children !== null &&
    children !== ""
  )
}

var filterProps = function filterProps(originalProps, cb) {
  var filteredProps = {}

  Object.keys(originalProps)
    .filter(function (key) {
      return cb(originalProps[key], key)
    })
    .forEach(function (key) {
      return (filteredProps[key] = originalProps[key])
    })

  return filteredProps
}

var parseReactElement = function parseReactElement(element, options) {
  var _options$displayName = options.displayName,
    displayNameFn =
      _options$displayName === undefined
        ? getReactElementDisplayName
        : _options$displayName

  if (typeof element === "string") {
    return (0, _tree.createStringTreeNode)(element)
  } else if (typeof element === "number") {
    return (0, _tree.createNumberTreeNode)(element)
  } else if (!_react2.default.isValidElement(element)) {
    throw new Error(
      "react-element-to-jsx-string: Expected a React.Element, got `" +
        (typeof element === "undefined" ? "undefined" : _typeof(element)) +
        "`"
    )
  }

  var displayName = displayNameFn(element)

  var props = filterProps(element.props, noChildren)
  if (element.ref !== null) {
    props.ref = element.ref
  }

  var key = element.key
  if (typeof key === "string" && key.search(/^\./)) {
    // React automatically add key=".X" when there are some children
    props.key = key
  }

  var defaultProps = filterProps(element.type.defaultProps || {}, noChildren)
  var childrens = _react2.default.Children.toArray(element.props.children)
    .filter(onlyMeaningfulChildren)
    .map(function (child) {
      return parseReactElement(child, options)
    })

  if (supportFragment && element.type === _react.Fragment) {
    return (0, _tree.createReactFragmentTreeNode)(key, childrens)
  }

  return (0, _tree.createReactElementTreeNode)(
    displayName,
    props,
    defaultProps,
    childrens
  )
}

exports.default = parseReactElement
//# sourceMappingURL=parseReactElement.js.map
