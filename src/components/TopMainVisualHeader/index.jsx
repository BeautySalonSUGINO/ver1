import React from "react"

import "@styles/Layout/_topHeader.scss"
import "@stylesComponent/_topMainVisualHeader.scss"

import TopSlider from "../TopSlider"

import suginoLogo from "@images/logo.png"
import scrollArrow from "@images/scroll-arrow.svg"
import headerIvy1 from "@images/header-ivy1.svg"
import headerIvy2 from "@images/header-ivy2.svg"

const TopMainVisualHeader = () => {
  return (
    <header id="l-topHeader" className="u-mb__96px">
      <TopSlider />
      <div id="l-topHeader__ivy1">
        <img src={headerIvy1} alt="ツタの装飾1" />
      </div>
      <div id="l-topHeader__scrollArrow">
        <img src={scrollArrow} alt="スクロールアロー" />
      </div>
      <h1 id="l-topHeader__logo">
        <img src={suginoLogo} alt="スギノ美容室のロゴ" />
      </h1>
      <div id="l-topHeader__ivy2">
        <img src={headerIvy2} alt="ツタの装飾2" />
      </div>
    </header>
  )
}

export default TopMainVisualHeader
