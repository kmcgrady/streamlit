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

import { Page, Grid, Card, Icon } from "tabler-react"

import faIcons from "../data/icons/fa"
import feIcons from "../data/icons/fe"
import flagIcons from "../data/icons/flag"
import paymentIcons from "../data/icons/payment"
import SiteWrapper from "../SiteWrapper.react"

const iconSets = [
  {
    prefix: "fe",
    title: "Feather Icons",
    icons: feIcons,
    description: "Simply beautiful open source icons.",
    link: "https://feathericons.com",
  },
  {
    prefix: "fa",
    title: "Font Awesome",
    icons: faIcons,
    description: "Powered by Font Awesome set.",
    link: "http://fontawesome.io",
  },
  { prefix: "flag", title: "Flags", icons: flagIcons },
  { prefix: "payment", title: "Payments", icons: paymentIcons },
]

function IconPage() {
  return (
    <SiteWrapper>
      <Page.Content title="Icons">
        {iconSets.map(iconSet => (
          <Card key={iconSet.prefix}>
            <Card.Header>
              <Card.Title>{iconSet.title}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Grid.Row>
                <Grid.Col lg={3}>
                  <p>
                    {iconSet.description}
                    {iconSet.link && (
                      <span>
                        {" "}
                        For more info{" "}
                        <a
                          href={iconSet.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          click here
                        </a>
                        .
                      </span>
                    )}
                  </p>
                  <p>
                    <code>{`<Icon prefix="${iconSet.prefix}" name="ICON_NAME" />`}</code>
                  </p>
                </Grid.Col>
                <Grid.Col lg={9}>
                  <div className="icons-list-wrap">
                    <ul className="icons-list">
                      {iconSet.icons.map(icon => (
                        <li className="icons-list-item" key={icon}>
                          <Icon prefix={iconSet.prefix} name={icon} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Grid.Col>
              </Grid.Row>
            </Card.Body>
          </Card>
        ))}
      </Page.Content>
    </SiteWrapper>
  )
}

export default IconPage
