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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button,
} from "shards-react"

const SeamlessInputGroups = () => (
  <div>
    <InputGroup seamless className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">person</i>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput value="design.revision" onChange={() => {}} />
    </InputGroup>

    <InputGroup seamless className="mb-3">
      <FormInput
        type="password"
        value="mySuperSecretPassword"
        onChange={() => {}}
      />
      <InputGroupAddon type="append">
        <InputGroupText>
          <i className="material-icons">lock</i>
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup seamless className="mb-3">
      <FormInput placeholder="Recipient's username" />
      <InputGroupAddon type="append">
        <Button theme="white">Button</Button>
      </InputGroupAddon>
    </InputGroup>
  </div>
)

export default SeamlessInputGroups
