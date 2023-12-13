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

import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"

import { StreamlitApp } from "@streamlit/lib"
import routes from "./routes"
import withTracker from "./withTracker"

import "bootstrap/dist/css/bootstrap.min.css"
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css"

export default () => {
  const [url, _] = React.useState(window.location.href)

  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <StreamlitApp endpoint={url}>
        <div>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component
                        {...props}
                        {...route.customProps}
                        key={route.path}
                      />
                    </route.layout>
                  )
                })}
              />
            )
          })}
        </div>
      </StreamlitApp>
    </Router>
  )
}
