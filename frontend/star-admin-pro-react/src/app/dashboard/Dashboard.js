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

import React, { Component, Fragment } from "react"

import { StreamlitView } from "@streamlit/lib"

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.layout = props.customProps.layout || [3, 1]
  }

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.customProps.layout !== this.props.customProps.layout) {
      this.layout = this.props.customProps.layout
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <StreamlitView />
              </div>
            </div>
          </div>
        </div>
        {this.layout.map((numColumns, i) => (
          <Fragment key={i}>
            <div className="row">
              <div className="col-md-12 grid-margin">
                <div>
                  <StreamlitView namespace={`row_${i + 1}_title`} />
                </div>
              </div>
            </div>
            <div className="row">
              {Array.from({ length: numColumns }, (_, j) => (
                <div
                  className={`col-md-${
                    12 / numColumns
                  } grid-margin stretch-card`}
                  key={j}
                >
                  <div className="card">
                    <div className="card-body">
                      <StreamlitView namespace={`row_${i + 1}_${j + 1}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    )
  }
}
export default Dashboard
