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

import React, { ComponentType, ReactElement } from "react"

import { StreamlitView } from "../StreamlitView"

export interface ColumnLayoutProps {
  layout?: number[]
  containerComponent: ComponentType<any>
  rowComponent: ComponentType<any>
  colComponent: ComponentType<any>
  cardComponent: ComponentType<any>
}

export function StreamlitColumnLayout({
  layout = [2, 2, 2],
  containerComponent: ContainerComponent,
  rowComponent: RowComponent,
  colComponent: ColComponent,
  cardComponent: CardComponent,
}: ColumnLayoutProps): ReactElement {
  return (
    <ContainerComponent>
      {/* Page Header */}
      <RowComponent isTitle={false} isMain={true}>
        <ColComponent isMain={true} numColumns={1}>
          <StreamlitView />
        </ColComponent>
      </RowComponent>
      {/* Make 3 rows each with 2 columns */}
      {layout.map((numColumns, i) => (
        <div key={i} style={{ width: "100%" }}>
          <RowComponent isTitle={true} isMain={false}>
            <StreamlitView namespace={`row_${i + 1}_title`} />
          </RowComponent>
          <RowComponent isTitle={false} isMain={false}>
            {Array.from({ length: numColumns }, (_, j) => (
              <ColComponent isMain={false} numColumns={numColumns} key={j}>
                <CardComponent namespace={`row_${i + 1}_${j + 1}`} />
              </ColComponent>
            ))}
          </RowComponent>
        </div>
      ))}
    </ContainerComponent>
  )
}
