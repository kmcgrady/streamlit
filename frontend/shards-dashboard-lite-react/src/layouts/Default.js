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

import MainSidebar from "../components/layout/MainSidebar/MainSidebar"

const DefaultLayout = ({ children, noNavbar, noFooter }) => {
  function OverrideBodyStyle() {
    const body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = "#F0F2F6"
  }

  OverrideBodyStyle()

  return (
    <Container fluid style={{ backgroundColor: "#F0F2F6" }}>
      <Row>
        <MainSidebar />
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
          style={{ marginTop: "5em" }}
        >
          {/* {!noNavbar && <MainNavbar />} */}
          {children}
          {/* {!noFooter && <MainFooter />} */}
        </Col>
      </Row>
    </Container>
  )
}

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,
}

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false,
}

export default DefaultLayout
