import React from "react"

import "@stylesProject/_infomationArea.scss"
import "@stylesComponent/_gradient.scss"

import Infomation from "@components/Infomation"
import GoogleMap from "../GoogleMap"

const InfomationArea = () => {
  return (
    <div id="p-infomationWrap">
      <section id="p-infomationArea" className="u-pt__32px">
        <Infomation />
        <GoogleMap />
      </section>
    </div>
  )
}

export default InfomationArea
