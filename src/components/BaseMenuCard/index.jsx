import React from "react"

import "@stylesComponent/_menuCard.scss"

const BaseMenuCard = ({ menuIcon, menuIconAlt, menuHead, children }) => {
  return (
    <div className="c-menuCard u-mrl__32px u-mb__16px">
      <h3 className="c-menuCard--h3 u-mb__16px">
        <div className="c-menuCard--icon">
          <img src={menuIcon} alt={menuIconAlt} />
        </div>
        <p className="u-fs__1-5rem u-ml__16px">{menuHead}</p>
      </h3>
      {children}
    </div>
  )
}

export default BaseMenuCard
