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

// Layout Types
import { DefaultLayout } from "./layouts"

// Route Views
import BlogOverview from "./views/BlogOverview"
import ColumnLayout from "./views/ColumnLayout"

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: ColumnLayout,
    customProps: {
      layout: [3, 1],
    },
  },
  {
    path: "/Home",
    exact: true,
    layout: DefaultLayout,
    component: ColumnLayout,
    customProps: {
      layout: [3, 1],
    },
  },
  {
    path: "/Core_Metrics",
    layout: DefaultLayout,
    component: ColumnLayout,
    customProps: {
      layout: [2, 2, 2],
    },
  },
  {
    path: "/Community_Cloud_Q3_Focus",
    layout: DefaultLayout,
    component: ColumnLayout,
    customProps: {
      layout: [1, 2, 2, 1, 1],
    },
  },
  {
    path: "/LLM_Cloud_Apps",
    layout: DefaultLayout,
    component: BlogOverview,
  },
  // {
  //   path: "/blog-overview",
  //   layout: DefaultLayout,
  //   component: BlogOverview
  // },
  // {
  //   path: "/user-profile-lite",
  //   layout: DefaultLayout,
  //   component: UserProfileLite
  // },
  // {
  //   path: "/add-new-post",
  //   layout: DefaultLayout,
  //   component: AddNewPost
  // },
  // {
  //   path: "/errors",
  //   layout: DefaultLayout,
  //   component: Errors
  // },
  // {
  //   path: "/components-overview",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview
  // },
  // {
  //   path: "/tables",
  //   layout: DefaultLayout,
  //   component: Tables
  // },
  // {
  //   path: "/blog-posts",
  //   layout: DefaultLayout,
  //   component: BlogPosts
  // }
]
