import React from "react"

import BaseLayout from "../components/BaseLayout"

import Seo from "../containers/Seo"

const NotFound = () => {
  return (
    <BaseLayout>
      <Seo />
      <div>404:ページが見つかりません</div>
    </BaseLayout>
  )
}

export default NotFound
