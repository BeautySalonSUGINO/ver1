import React from "react"

import "@stylesComponent/_menuText.scss"

const BaseMenuText = ({ menu, price }) => {
  return (
    <div className="c-menuText u-mb__16px">
      <p>{menu}</p>
      <p>{price}</p>
    </div>
  )
}

export default BaseMenuText
