import React, { useState } from "react"

import { useKeenSlider } from "keen-slider/react"

import { StaticImage } from "gatsby-plugin-image"

import "@stylesComponent/_productSlider.scss"

import arrowLeftSvg from "@images/arrow-left.svg"
import arrowRightSvg from "@images/arrow-right.svg"

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="c-productSlider">
      <div>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <a href="https://www.louvredo.com/hair/pro_s_m/">
              <div className="keen-slider__slide">
                <StaticImage
                  layout="fixed"
                  src="../../assets/images/fukugen-pro.png"
                  alt="復元ドライヤーのPR画像"
                />
              </div>
            </a>

            <a href="https://ndot.jp/lineup/shea_shampoo">
              <div className="keen-slider__slide">
                <StaticImage
                  layout="fixed"
                  src="../../assets/images/n-dot.png"
                  alt="N.のPR画像"
                />
              </div>
            </a>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map(idx => {
              return (
                <button
                  key={idx}
                  aria-label="dot"
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              )
            })}
          </div>
        )}
      </div>
      <div className="c-productSlider--arrow">
        <button
          onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
        >
          <img src={arrowLeftSvg} alt="Arrowアイコン（左）" />
        </button>
        <button
          className="u-mt__32px"
          onClick={e => e.stopPropagation() || instanceRef.current?.next()}
        >
          <img src={arrowRightSvg} alt="Arrowアイコン（右）" />
        </button>
      </div>
    </div>
  )
}

export default ProductSlider
