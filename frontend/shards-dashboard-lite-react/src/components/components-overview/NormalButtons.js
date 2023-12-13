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

const NormalButtons = () => (
  <Row>
    <Col>
      <Button theme="primary" className="mb-2 mr-1">
        Primary
      </Button>
      <Button theme="secondary" className="mb-2 mr-1">
        Secondary
      </Button>
      <Button theme="success" className="mb-2 mr-1">
        Success
      </Button>
      <Button theme="danger" className="mb-2 mr-1">
        Danger
      </Button>
      <Button theme="warning" className="mb-2 mr-1">
        Warning
      </Button>
      <Button theme="info" className="mb-2 mr-1">
        Info
      </Button>
      <Button theme="dark" className="mb-2 mr-1">
        Dark
      </Button>
      <Button theme="light" className="mb-2 mr-1">
        Light
      </Button>
    </Col>
  </Row>
)

export default NormalButtons
