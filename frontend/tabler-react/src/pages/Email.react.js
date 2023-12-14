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

import React from "react"
import {
  Page,
  Grid,
  Badge,
  Button,
  Card,
  Container,
  List,
  Form,
} from "tabler-react"
import SiteWrapper from "../SiteWrapper.react"

function Email() {
  return (
    <SiteWrapper>
      <div className="my-3 my-md-5">
        <Container>
          <Grid.Row>
            <Grid.Col md={3}>
              <Page.Title className="mb-5">Mail Service</Page.Title>
              <div>
                <List.Group transparent={true}>
                  <List.GroupItem
                    className="d-flex align-items-center"
                    to="/email"
                    icon="inbox"
                    active
                  >
                    Inbox
                    <Badge className="ml-auto">14</Badge>
                  </List.GroupItem>
                  <List.GroupItem
                    to="/email"
                    className="d-flex align-items-center"
                    icon="send"
                  >
                    Sent Mail
                  </List.GroupItem>
                  <List.GroupItem
                    to="/email"
                    className="d-flex align-items-center"
                    icon="alert-circle"
                  >
                    Important{" "}
                    <Badge className="ml-auto badge badge-secondary">3</Badge>
                  </List.GroupItem>
                  <List.GroupItem
                    to="/email"
                    className="d-flex align-items-center"
                    icon="star"
                  >
                    Starred
                  </List.GroupItem>
                  <List.GroupItem
                    to="/email"
                    className="d-flex align-items-center"
                    icon="file"
                  >
                    Drafts
                  </List.GroupItem>
                  <List.GroupItem
                    to="/email"
                    className="d-flex align-items-center"
                    icon="tag"
                  >
                    Tags
                  </List.GroupItem>
                  <List.GroupItem
                    to="/email"
                    className="d-flex align-items-center"
                    icon="trash-2"
                  >
                    Trash
                  </List.GroupItem>
                </List.Group>
                <div className="mt-6">
                  <Button
                    RootComponent="a"
                    href="/email"
                    block={true}
                    color="secondary"
                  >
                    Compose new Email
                  </Button>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col md={9}>
              <Card>
                <Card.Header>
                  <Card.Title>Compose new message</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group>
                      <Grid.Row className="align-items-center">
                        <Grid.Col sm={2}>To:</Grid.Col>
                        <Grid.Col sm={10}>
                          <Form.Input type="text" />
                        </Grid.Col>
                      </Grid.Row>
                    </Form.Group>
                    <Form.Group>
                      <Grid.Row className="align-items-center">
                        <Grid.Col sm={2}>Subject:</Grid.Col>
                        <Grid.Col sm={10}>
                          <Form.Input type="text" />
                        </Grid.Col>
                      </Grid.Row>
                    </Form.Group>
                    <Form.Textarea rows={10} />
                    <Button.List className="mt-4" align="right">
                      <Button color="secondary">Cancel</Button>
                      <Button color="primary">Send message</Button>
                    </Button.List>
                  </Form>
                </Card.Body>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Container>
      </div>
    </SiteWrapper>
  )
}

export default Email
