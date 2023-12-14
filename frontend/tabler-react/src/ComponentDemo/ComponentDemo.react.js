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

//

import * as React from "react"
import cn from "classnames"
import { Button } from "tabler-react"
import "./ComponentDemo.css"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { prism } from "react-syntax-highlighter/dist/styles/prism"
import reactElementToJSXString from "./react-element-to-jsx-string"

class ComponentDemo extends React.PureComponent {
  state = {
    codeOpen: false,
  }
  handleSourceButtonOnClick = e => {
    e.preventDefault()
    this.setState(s => ({ codeOpen: !s.codeOpen }))
  }

  render() {
    const { className, children, asString } = this.props
    const { codeOpen } = this.state
    const classes = cn("ComponentDemo", className)
    return (
      <div className={classes}>
        <Button
          onClick={this.handleSourceButtonOnClick}
          size="sm"
          color="primary"
          outline
          className="viewSourceBtn"
        >
          {codeOpen ? "Close" : "Source"}
        </Button>
        <div className="example">{children}</div>
        {codeOpen && (
          <div className="highlight">
            <SyntaxHighlighter language="jsx" style={prism}>
              {asString || reactElementToJSXString(children)}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    )
  }
}

export default ComponentDemo
