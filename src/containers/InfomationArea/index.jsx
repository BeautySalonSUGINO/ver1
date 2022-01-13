import React from "react"

import "@stylesProject/_infomationArea.scss"
import "@stylesComponent/_gradient.scss"

import Infomation from "@components/Infomation"
import GoogleMap from "../GoogleMap"

const InfomationArea = () => {
  return (
    <div id="p-infomationWrap">
      <span className="gradilent__3 u-mb__32px"></span>
      <section id="p-infomationArea">
        <Infomation />
        <GoogleMap />
      </section>
    </div>
  )
}

export default InfomationArea
