import React from "react"

import "@styles/Layout/_header.scss"

const BaseHeader = ({ text }) => {
  return (
    <header id="l-header">
      <h1 id="l-header--h1" className="u-fs__2-5rem">
        {text}
      </h1>
    </header>
  )
}

export default BaseHeader
