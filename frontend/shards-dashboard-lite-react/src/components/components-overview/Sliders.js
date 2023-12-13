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
import { ListGroupItem, Slider } from "shards-react"

const Sliders = () => (
  <ListGroupItem className="px-3">
    <div className="mb-2 pb-1">
      <strong className="text-muted d-block">Custom Sliders</strong>
      <Slider
        theme="success"
        className="my-4"
        connect={[true, false]}
        start={[85]}
        range={{ min: 0, max: 100 }}
        tooltips
      />
      <Slider
        theme="info"
        className="my-4"
        connect={[false, true]}
        start={[15]}
        range={{ min: 0, max: 100 }}
      />
      <Slider
        connect
        start={[35, 65]}
        pips={{
          mode: "positions",
          values: [0, 25, 50, 75, 100],
          stepped: true,
          density: 5,
        }}
        range={{ min: 0, max: 100 }}
      />
    </div>
  </ListGroupItem>
)

export default Sliders
