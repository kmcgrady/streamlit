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

import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
  Empty,
  Email,
  ProfilePage,
} from "./pages/index.js"

import HomePage from "./HomePage.react.js"
import FormElementsPage from "./FormElementsPage.react.js"
import PricingCardsPage from "./interface/PricingCardsPage.react.js"
import CardsDesignPage from "./interface/CardsDesignPage.react.js"
import StoreCardsPage from "./components/StoreCardsPage.react.js"
import IconPage from "./components/IconPage.react.js"
import ChartsPage from "./interface/ChartsPage.react.js"
import GalleryPage from "./GalleryPage.react.js"
import MapCardsPage from "./components/MapCardsPage.react.js"
import BlogPage from "./components/BlogPage.react.js"
import { StreamlitApp } from "@streamlit/lib"

import "tabler-react/dist/Tabler.css"

function App(props) {
  const [initialUrl] = useState(window.location.href)
  return (
    <React.StrictMode>
      <StreamlitApp endpoint={initialUrl}>
        <Router>
          <Switch>
            <Route component={HomePage} />
          </Switch>
        </Router>
      </StreamlitApp>
    </React.StrictMode>
  )
}

export default App
