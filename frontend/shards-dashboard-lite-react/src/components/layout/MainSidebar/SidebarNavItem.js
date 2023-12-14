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
import PropTypes from "prop-types"
import { NavLink as RouteNavLink } from "react-router-dom"
import { NavItem, NavLink } from "shards-react"
import { useStreamlitAppCommands } from "@streamlit/lib"
import file from "./file.svg"
import homepage from "./home.svg"
import activeFile from "./active-file.png"
import activeHomepage from "./active-home.png"

const SidebarNavItem = ({ item }) => {
  const { changePage } = useStreamlitAppCommands()

  const currentPath = window.location.pathname.slice(1)

  let activePage = false
  let src = file
  if (currentPath === "" && item.pageName === "Home") {
    activePage = true
  } else {
    activePage = currentPath === item.pageName ? true : false
  }

  if (item.pageName === "Home" && activePage) {
    src = activeHomepage
  } else if (item.pageName !== "Home" && activePage) {
    src = activeFile
  } else if (item.pageName === "Home" && !activePage) {
    src = homepage
  }

  return (
    <NavItem>
      <NavLink
        tag={RouteNavLink}
        to={`/${item.pageName}`}
        onClick={e => {
          changePage(item.pageScriptHash)
        }}
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          textDecoration: "none",
          padding: "12px 32px, 12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "8px",
          color: activePage ? "#1A6CE7" : "#808495",
          boxShadow: activePage ? "inset 2px 0 0 #1A6CE7" : "none",
          background: activePage ? "#FAFAFA" : "none",
        }}
      >
        {/* {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )} */}
        <img src={src} className="sidebar-icons" />
        {item.pageName && <span>{item.pageName.replace(/_/g, " ")}</span>}
        {/* {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )} */}
      </NavLink>
    </NavItem>
  )
}

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object,
}

export default SidebarNavItem
