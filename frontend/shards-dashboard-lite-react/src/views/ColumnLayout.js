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

import { StreamlitColumnLayout } from "@streamlit/lib"
import StreamlitCard from "../components/streamlit/StreamlitComponents"

const ColumnLayout = ({ layout = [2, 2, 2] }) => (
  <StreamlitColumnLayout
    layout={layout}
    containerComponent={({ children }) => (
      <Container fluid className="main-content-container px-4">
        {children}
      </Container>
    )}
    rowComponent={({ isTitle, isMain, children }) => {
      if (isMain) {
        return (
          <Row noGutters className="page-header py-4">
            {children}
          </Row>
        )
      }

      if (isTitle) {
        return <Row className="mb-4 ml-4">{children}</Row>
      }

      return <Row>{children}</Row>
    }}
    colComponent={({ isMain, numColumns, children }) => {
      if (isMain) {
        return <Col sm="12">{children}</Col>
      }

      return (
        <Col
          lg={12 / numColumns}
          md={12 / numColumns}
          sm={12 / numColumns}
          className="mb-4"
        >
          {children}
        </Col>
      )
    }}
    cardComponent={({ namespace }) => <StreamlitCard namespace={namespace} />}
  />
)

ColumnLayout.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array,
}

ColumnLayout.defaultProps = {}

export default ColumnLayout
