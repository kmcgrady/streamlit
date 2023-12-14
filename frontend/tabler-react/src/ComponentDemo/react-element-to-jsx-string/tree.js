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

/* eslint-disable no-use-before-define */

var createStringTreeNode = (exports.createStringTreeNode =
  function createStringTreeNode(value) {
    // eslint-disable-line no-unused-vars
    return {
      type: "string",
      value: value,
    }
  })

var createNumberTreeNode = (exports.createNumberTreeNode =
  function createNumberTreeNode(value) {
    // eslint-disable-line no-unused-vars
    return {
      type: "number",
      value: value,
    }
  })

var createReactElementTreeNode = (exports.createReactElementTreeNode =
  function createReactElementTreeNode( // eslint-disable-line no-unused-vars
    displayName,
    props,
    defaultProps,
    childrens
  ) {
    return {
      type: "ReactElement",
      displayName: displayName,
      props: props,
      defaultProps: defaultProps,
      childrens: childrens,
    }
  })

var createReactFragmentTreeNode = (exports.createReactFragmentTreeNode =
  function createReactFragmentTreeNode(key, childrens) {
    // eslint-disable-line no-unused-vars
    return {
      type: "ReactFragment",
      key: key,
      childrens: childrens,
    }
  })
//# sourceMappingURL=tree.js.map
