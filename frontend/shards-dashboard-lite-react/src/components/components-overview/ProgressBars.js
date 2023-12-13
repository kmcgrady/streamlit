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
import { ListGroupItem, Progress } from "shards-react"

const ProgressBars = () => (
  <ListGroupItem className="px-3">
    <div className="mb-2">
      <strong className="text-muted d-block mb-3">Progress Bars</strong>
      <Progress style={{ height: "5px" }} value={50} className="mb-3" />
      <Progress
        theme="success"
        style={{ height: "5px" }}
        className="mb-3"
        value={40}
      />
      <Progress
        theme="info"
        style={{ height: "5px" }}
        className="mb-3"
        value={60}
      />
      <Progress
        theme="danger"
        style={{ height: "5px" }}
        className="mb-3"
        value={80}
      />
    </div>
  </ListGroupItem>
)

export default ProgressBars
