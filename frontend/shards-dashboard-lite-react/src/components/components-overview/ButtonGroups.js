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
import { ButtonGroup, Button } from "shards-react"

const ButtonGroups = () => (
  <ButtonGroup className="mb-3">
    <Button theme="primary">Fizz</Button>
    <Button theme="white">Buzz</Button>
    <Button theme="white">Foo</Button>
    <Button theme="white">Bar</Button>
  </ButtonGroup>
)

export default ButtonGroups
