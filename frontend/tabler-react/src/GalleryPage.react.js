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

import { Page, Grid, GalleryCard, Form } from "tabler-react"

import SiteWrapper from "./SiteWrapper.react"

import json from "./data/Gallery.Items"
// TODO:Add GalleryCardList component to avoid insert extra className
// TODO:Update Page.Header to additional components

function GalleryPage() {
  const options = (
    <React.Fragment>
      <Form.Select className="w-auto mr-2">
        <option value="asc">Newest</option>
        <option value="desc">Oldest</option>
      </Form.Select>
      <Form.Input icon="search" placeholder="Search photo" />
    </React.Fragment>
  )
  return (
    <SiteWrapper>
      <Page.Content>
        <Page.Header
          title="Gallery"
          subTitle="1 - 12 of 1713 photos"
          options={options}
        />

        <Grid.Row className="row-cards">
          {json.items.map((item, key) => (
            <Grid.Col sm={6} lg={4} key={key}>
              <GalleryCard>
                <GalleryCard.Image
                  src={item.imageURL}
                  alt={`Photo by ${item.fullName}`}
                />
                <GalleryCard.Footer>
                  <GalleryCard.Details
                    avatarURL={item.avatarURL}
                    fullName={item.fullName}
                    dateString={item.dateString}
                  />
                  <GalleryCard.IconGroup>
                    <GalleryCard.IconItem name="eye" label={item.totalView} />
                    <GalleryCard.IconItem
                      name="heart"
                      label={item.totalLike}
                      right
                    />
                  </GalleryCard.IconGroup>
                </GalleryCard.Footer>
              </GalleryCard>
            </Grid.Col>
          ))}
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default GalleryPage
