import React from "react"
import Slider from "react-slick"

import { StaticImage } from "gatsby-plugin-image"

import "@stylesComponent/_topMainVisual.scss"

const TopMainVisualHeader = () => {
  const settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
  }

  return (
    <Slider {...settings}>
      <div className="c-topMainVisual__div">
        <StaticImage
          layout="fullWidth"
          src="../../assets/images/main-visual.png"
          alt="メインビジュアル1"
          style={{ height: "100%" }}
        />
      </div>
      <div className="c-topMainVisual__div">
        <StaticImage
          layout="fullWidth"
          src="../../assets/images/main-visual2.jpg"
          alt="メインビジュアル2"
          style={{ height: "100%" }}
        />
      </div>
    </Slider>
  )
}

export default TopMainVisualHeader
