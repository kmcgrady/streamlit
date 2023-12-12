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

type ElementType =
  | "alert"
  | "arrowDataFrame"
  | "arrowTable"
  | "arrowVegaLiteChart"
  | "audio"
  | "balloons"
  | "bokehChart"
  | "button"
  | "downloadButton"
  | "cameraInput"
  | "chatInput"
  | "checkbox"
  | "colorPicker"
  | "componentInstance"
  | "dataFrame"
  | "table"
  | "dateInput"
  | "deckGlJsonChart"
  | "docString"
  | "empty"
  | "exception"
  | "favicon"
  | "fileUploader"
  | "graphvizChart"
  | "iframe"
  | "imgs"
  | "json"
  | "linkButton"
  | "markdown"
  | "metric"
  | "multiselect"
  | "numberInput"
  | "plotlyChart"
  | "progress"
  | "radio"
  | "selectbox"
  | "skeleton"
  | "slider"
  | "snow"
  | "spinner"
  | "text"
  | "textArea"
  | "textInput"
  | "timeInput"
  | "toast"
  | "vegaLiteChart"
  | "video"
  | "heading"
  | "code"

type ComponentMapType = {
  [key in ElementType]: (props: any) => React.ReactElement
}

type MappingNotYetDefined = (props: any) => any

type ExplicitComponentMap = {
  juice: (props: string) => string
  alert: (props: string) => string
  arrowDataFrame: MappingNotYetDefined
  arrowTable: MappingNotYetDefined
  arrowVegaLiteChart: MappingNotYetDefined
  audio: MappingNotYetDefined
  balloons: MappingNotYetDefined
  bokehChart: MappingNotYetDefined
  button: MappingNotYetDefined
  downloadButton: MappingNotYetDefined
  cameraInput: MappingNotYetDefined
  chatInput: MappingNotYetDefined
  checkbox: MappingNotYetDefined
  colorPicker: MappingNotYetDefined
  componentInstance: MappingNotYetDefined
  dataFrame: MappingNotYetDefined
  table: MappingNotYetDefined
  dateInput: MappingNotYetDefined
  deckGlJsonChart: MappingNotYetDefined
  docString: MappingNotYetDefined
  empty: MappingNotYetDefined
  exception: MappingNotYetDefined
  favicon: MappingNotYetDefined
  fileUploader: MappingNotYetDefined
  graphvizChart: MappingNotYetDefined
  iframe: MappingNotYetDefined
  imgs: MappingNotYetDefined
  json: MappingNotYetDefined
  linkButton: MappingNotYetDefined
  markdown: MappingNotYetDefined
  metric: MappingNotYetDefined
  multiselect: MappingNotYetDefined
  numberInput: MappingNotYetDefined
  plotlyChart: MappingNotYetDefined
  progress: MappingNotYetDefined
  radio: MappingNotYetDefined
  selectbox: MappingNotYetDefined
  skeleton: MappingNotYetDefined
  slider: MappingNotYetDefined
  snow: MappingNotYetDefined
  spinner: MappingNotYetDefined
  text: MappingNotYetDefined
  textArea: MappingNotYetDefined
  textInput: MappingNotYetDefined
  timeInput: MappingNotYetDefined
  toast: MappingNotYetDefined
  vegaLiteChart: MappingNotYetDefined
  video: MappingNotYetDefined
  heading: (props: { value: string }) => React.ReactElement
  code: MappingNotYetDefined
}

// constrain to element types
export type ComponentMapper = ExplicitComponentMap | ComponentMapType
