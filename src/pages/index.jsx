import React from "react"

import TopMainVisualHeader from "@components/TopMainVisualHeader"
import NewsArea from "@components/NewsArea"

import Seo from "@containers/Seo"

const Index = () => {
  return (
    <>
      <Seo />
      <TopMainVisualHeader />
      <NewsArea />
    </>
  )
}

export default Index
