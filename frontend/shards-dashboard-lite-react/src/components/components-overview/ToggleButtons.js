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
import { Col, FormCheckbox } from "shards-react"

const ToggleButtons = () => (
  <Col sm="12" md="4" className="mb-3">
    <strong className="text-muted d-block mb-2">Toggle Switches</strong>
    <fieldset>
      <FormCheckbox toggle small>
        Default
      </FormCheckbox>
      <FormCheckbox toggle small defaultChecked>
        Checked
      </FormCheckbox>
      <FormCheckbox toggle small disabled>
        Disabled
      </FormCheckbox>
      <FormCheckbox toggle small defaultChecked disabled>
        Disabled Checked
      </FormCheckbox>
    </fieldset>
  </Col>
)

export default ToggleButtons
