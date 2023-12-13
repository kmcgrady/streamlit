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

import { StreamlitView } from "@streamlit/lib"
import StreamlitCard from "../components/streamlit/StreamlitComponents"

const TwoColumnLayout = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <Col sm="12">
        <StreamlitView style={{ width: "100%", height: "100%" }} />
      </Col>
    </Row>
    {/* Make 3 rows each with 2 columns */}
    {[1, 2, 3].map(i => (
      <>
        <Row className="mb-4 ml-4">
          <StreamlitView namespace={`row_${i}_title`} />
        </Row>
        <Row key={i}>
          {[1, 2].map(j => (
            <Col lg="6" md="6" sm="6" className="mb-4" key={j}>
              <StreamlitCard namespace={`row_${i}_${j}`} />
            </Col>
          ))}
        </Row>
      </>
    ))}
  </Container>
)

TwoColumnLayout.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array,
}

TwoColumnLayout.defaultProps = {}

export default TwoColumnLayout
