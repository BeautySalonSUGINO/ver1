import React from "react"

import { graphql } from "gatsby"

import HamburgerMenu from "@components/HamburgerMenu"
import TopMainVisualHeader from "@components/TopMainVisualHeader"
import ProductArea from "@components/ProductArea"
import InfomationArea from "@containers/InfomationArea"
import BaseFooter from "@components/BaseFooter"
import ConceptArea from "@components/ConceptArea"
import MenuArea from "@components/MenuArea"

import Seo from "@containers/Seo"
import NewsArea from "@containers/NewsArea"

const Index = ({ data }) => {
  return (
    <>
      <Seo />

      <HamburgerMenu />

      <TopMainVisualHeader />

      <ProductArea />

      <NewsArea data={data} />

      <ConceptArea />

      <MenuArea />

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
