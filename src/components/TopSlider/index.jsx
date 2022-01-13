import React from "react"
import Slider from "react-slick"

import { StaticImage } from "gatsby-plugin-image"

const TopSlider = () => {
  const settings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 7000,
    speed: 1000,
    fade: true,
  }
  return (
    <Slider {...settings}>
      <div className="c-topMainVisual__div">
        <StaticImage
          layout="fullWidth"
          src="../../assets/images/main-visual1.png"
          alt="メインビジュアル1"
          style={{ height: "100%" }}
        />
      </div>
      <div className="c-topMainVisual__div">
        <StaticImage
          layout="fullWidth"
          src="../../assets/images/main-visual2.png"
          alt="メインビジュアル2"
          style={{ height: "100%" }}
        />
      </div>
    </Slider>
  )
}

export default TopSlider
