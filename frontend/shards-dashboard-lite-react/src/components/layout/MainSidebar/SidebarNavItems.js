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

import React, { useCallback, useEffect } from "react"
import { Nav } from "shards-react"
import { StreamlitView, useStreamlitAppUrl } from "@streamlit/lib"

import SidebarNavItem from "./SidebarNavItem"
import { Store } from "../../../flux"

function SidebarNavItems() {
  const [navItems, setNavItems] = React.useState(Store.getSidebarItems())
  const { appPages } = useStreamlitAppUrl()

  const handleChange = useCallback(() => {
    setNavItems(Store.getSidebarItems())
  })

  useEffect(() => {
    Store.addChangeListener(handleChange)
    return () => {
      Store.removeChangeListener(handleChange)
    }
  }, [handleChange])

  return (
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        {appPages.map((item, idx) => (
          <SidebarNavItem key={idx} item={item} />
        ))}
      </Nav>
      <StreamlitView namespace="sidebar" />
    </div>
  )
}

export default SidebarNavItems
