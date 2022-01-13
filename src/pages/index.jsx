import React from "react"

import { graphql } from "gatsby"

import TopMainVisualHeader from "@components/TopMainVisualHeader"
import ProductArea from "@components/ProductArea"
import InfomationArea from "@containers/InfomationArea"
import BaseFooter from "@components/BaseFooter"

import Seo from "@containers/Seo"
import NewsArea from "@containers/NewsArea"
import HamburgerMenu from "@components/HamburgerMenu"

const Index = ({ data }) => {
  return (
    <>
      <Seo />

      <HamburgerMenu />

      <TopMainVisualHeader />

      <ProductArea />

      <NewsArea data={data} />

      <InfomationArea />

      <BaseFooter />
    </>
  )
}

export default Index

export const query = graphql`
  query {
    allContentfulNews(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 4
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate
          publishDateJP: publishDate(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
