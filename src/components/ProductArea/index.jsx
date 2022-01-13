import React from "react"
import ProductSlider from "../ProductSlider"

import { Link } from "gatsby"

import "@stylesProject/_productArea.scss"

import Scissors from "@images/Scissors.png"

const ProductArea = () => {
  return (
    <section id="p-productArea">
      <h2 className="c-h2 u-mb__16px">PRODUCT</h2>

      <ProductSlider />

      <div className="c-scissorsButton u-mb__96px">
        <Link to={`/product/`}>
          <div className="c-scissorsButton--content">
            <div className="c-scissorsButton--icon">
              <img src={Scissors} alt="ハサミのアイコン" />
            </div>
            <p className="c-scissorsButton--p u-ml__16px u-pb__5px">
              一覧はこちら
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default ProductArea
