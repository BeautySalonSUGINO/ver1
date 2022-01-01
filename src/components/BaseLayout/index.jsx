import React from "react"
import BaseHeader from "../BaseHeader"
import BaseFooter from "../BaseFooter"

const BaseLayout = ({ children }) => {
  return (
    <>
      <BaseHeader />
      {children}
      <BaseFooter />
    </>
  )
}

export default BaseLayout
