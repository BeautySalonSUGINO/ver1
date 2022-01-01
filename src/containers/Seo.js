import React from "react"
import { Helmet } from "react-helmet"

const Seo = () => {
  return (
    <Helmet>
      <html lang="ja" />
      <title>Beauty Salon SUGINO</title>
      <meta
        name="description"
        content="三重県松阪市にあるレトロで小さな美容室「Beauty Salon SUGINO」のホームページです。"
      />
    </Helmet>
  )
}

export default Seo
