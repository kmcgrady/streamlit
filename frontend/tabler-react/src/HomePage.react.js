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

//

import * as React from "react"

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react"

import C3Chart from "react-c3js"

import SiteWrapper from "./SiteWrapper.react"

import { StreamlitColumnLayout, StreamlitView } from "@streamlit/lib"

function Home({ layout }) {
  return (
    <SiteWrapper>
      <StreamlitColumnLayout
        layout={layout}
        containerComponent={({ children }) => (
          <Page.Content title="">{children}</Page.Content>
        )}
        rowComponent={({ children, isTitle, isMain }) => {
          if (isTitle) {
            return (
              <Grid.Row>
                <div
                  style={{
                    width: "100%",
                    marginLeft: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {children}
                </div>
              </Grid.Row>
            )
          }

          if (isMain) {
            return (
              <Grid.Row>
                <div style={{ width: "100%", marginBottom: "10px" }}>
                  {children}
                </div>
              </Grid.Row>
            )
          }
          return <Grid.Row>{children}</Grid.Row>
        }}
        colComponent={({ children, numColumns, isMain }) => {
          if (isMain) {
            return <Grid.Col sm={12}>{children}</Grid.Col>
          }
          return (
            <Grid.Col sm={12 / numColumns}>
              <Card>{children}</Card>
            </Grid.Col>
          )
        }}
        cardComponent={({ namespace }) => (
          <Card.Body>
            <Grid.Col>
              <StreamlitView namespace={namespace} />
            </Grid.Col>
          </Card.Body>
        )}
        cardHasHeader={true}
      />
    </SiteWrapper>
  )
}

export default Home
