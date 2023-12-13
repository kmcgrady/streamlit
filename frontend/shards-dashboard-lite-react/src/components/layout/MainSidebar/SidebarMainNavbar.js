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

import PropTypes from "prop-types"
import React from "react"
import { Navbar, NavbarBrand } from "shards-react"
//import logo from '../../../images/shards-dashboards-logo.svg'
import logo from "../../../images/streamlit-logo.svg"

import { Constants, Dispatcher } from "../../../flux"

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this)
  }

  handleToggleSidebar() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR,
    })
  }

  render() {
    const { hideLogoText } = this.props
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <NavbarBrand
            className="w-100 mr-0"
            href="#"
            style={{ lineHeight: "25px" }}
          >
            <div className="d-table m-auto text-left">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "50px" }}
                // src={require("../../../images/shards-dashboards-logo.svg")}
                src={logo}
                alt="Streamlit Dashboard"
              />
              {!hideLogoText && (
                <span
                  className="d-none d-md-inline ml-1"
                  style={{ fontSize: "1.5rem", textDecoration: "none" }}
                >
                  Streamlit
                </span>
              )}
            </div>
          </NavbarBrand>
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}
          >
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    )
  }
}

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool,
}

SidebarMainNavbar.defaultProps = {
  hideLogoText: false,
}

export default SidebarMainNavbar
