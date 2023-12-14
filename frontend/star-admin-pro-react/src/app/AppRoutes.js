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

import React, { Component, Suspense, lazy } from "react"
import { Route, Switch } from "react-router-dom"

import Spinner from "../app/shared/Spinner"

const Dashboard = lazy(() => import("./dashboard/Dashboard"))

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            exact
            path={["/", "/Home"]}
            render={props => (
              <Dashboard {...props} customProps={{ layout: [3, 1] }} />
            )}
          />
          <Route
            exact
            path="/Core_Metrics"
            render={props => (
              <Dashboard {...props} customProps={{ layout: [2, 2, 2] }} />
            )}
          />
          <Route
            exact
            path="/Community_Cloud_Q3_Focus"
            render={props => (
              <Dashboard
                {...props}
                customProps={{ layout: [1, 2, 2, 1, 1] }}
              />
            )}
          />
        </Switch>
      </Suspense>
    )
  }
}

export default AppRoutes
