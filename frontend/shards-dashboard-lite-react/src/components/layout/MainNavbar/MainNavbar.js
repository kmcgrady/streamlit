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
import classNames from "classnames"
import { Container, Navbar } from "shards-react"

import NavbarSearch from "./NavbarSearch"
import NavbarNav from "./NavbarNav/NavbarNav"
import NavbarToggle from "./NavbarToggle"

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  )

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar
          type="light"
          className="align-items-stretch flex-md-nowrap p-0"
        >
          <NavbarSearch />
          <NavbarNav />
          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  )
}

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool,
}

MainNavbar.defaultProps = {
  stickyTop: true,
}

export default MainNavbar
