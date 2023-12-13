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
import { Row, Col, Button } from "shards-react"

const SmallButtons = () => (
  <Row className="mb-3 mt-2">
    <Col>
      <Button size="sm" theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button size="sm" theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button size="sm" theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button size="sm" theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button size="sm" theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button size="sm" theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button size="sm" theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button size="sm" theme="white" className="mb-2 mr-1">
        White
      </Button>
    </Col>
  </Row>
)

export default SmallButtons
