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
import { Col } from "shards-react"
import { StreamlitView } from "@streamlit/lib"

import SidebarMainNavbar from "./SidebarMainNavbar"
import SidebarSearch from "./SidebarSearch"
import SidebarNavItems from "./SidebarNavItems"

import { Store } from "../../../flux"

class MainSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuVisible: false,
      sidebarNavItems: Store.getSidebarItems(),
    }

    this.onChange = this.onChange.bind(this)
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState({
      ...this.state,
      menuVisible: Store.getMenuState(),
      sidebarNavItems: Store.getSidebarItems(),
    })
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      this.state.menuVisible && "open"
    )

    return (
      <Col tag="aside" className={classes} lg={{ size: 2 }} md={{ size: 3 }}>
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        <SidebarNavItems />
      </Col>
    )
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool,
}

MainSidebar.defaultProps = {
  hideLogoText: false,
}

export default MainSidebar
