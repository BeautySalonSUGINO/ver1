import React from "react"

import BaseLayout from "../components/BaseLayout"

import Seo from "../containers/Seo"

const NotFound = ({ location }) => {
  return (
    <BaseLayout>
      <Seo pagetitle="ページが見つかりません" pagepath={location.pathname} />
      <div>404:ページが見つかりません</div>
    </BaseLayout>
  )
}

export default NotFound
