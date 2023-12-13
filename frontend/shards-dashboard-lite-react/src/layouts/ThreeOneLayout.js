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
import { Col, Container, Row } from "shards-react"

import MainFooter from "../components/layout/MainFooter"
import MainNavbar from "../components/layout/MainNavbar/MainNavbar"
import MainSidebar from "../components/layout/MainSidebar/MainSidebar"

const ThreeOneLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        <h1>ThreeOneLayout!</h1>
        {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
)

ThreeOneLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,
}

ThreeOneLayout.defaultProps = {
  noNavbar: false,
  noFooter: false,
}

export default ThreeOneLayout
