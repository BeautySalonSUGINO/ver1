import React from "react"
import BaseHeader from "../BaseHeader"
import BaseFooter from "../BaseFooter"

const BaseLayout = ({ children, headerText }) => {
  return (
    <>
      <BaseHeader text={headerText} />
      <main id="main">{children}</main>
      <BaseFooter />
    </>
  )
}

export default BaseLayout
