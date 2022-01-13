import React from "react"
import GoogleMapReact from "google-map-react"

import "@stylesComponent/_googleMap.scss"

import suginoMarker from "@images/marker.png"

const AnyReactComponent = () => (
  <div className="c-googleMap--marker">
    <img src={suginoMarker} alt="マーカー" />
  </div>
)

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 34.56692685363993,
      lng: 136.53440636571634,
    },
    zoom: 15,
  }

  return (
    //サイズの大きさを指定
    <div className="c-googleMap u-mb__96px">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          //マーカーの緯度と経度
          lat={34.56692685363993}
          lng={136.53440636571634}
        />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
