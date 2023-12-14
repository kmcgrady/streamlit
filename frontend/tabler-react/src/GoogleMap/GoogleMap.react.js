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
import cn from "classnames"

import "./GoogleMap.css"

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap as ReactGoogleMap,
} from "react-google-maps"

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <ReactGoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      disableDefaultUI={true}
    />
  ))
)

function GoogleMap({ blackAndWhite }) {
  const containerClasses = cn("GoogleMapContainer", { blackAndWhite })
  return (
    <MapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div className={containerClasses} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}

export default GoogleMap
