import React from "react"

import { graphql } from "gatsby"

import TopMainVisualHeader from "@components/TopMainVisualHeader"

import NewsArea from "@containers/NewsArea"

import Seo from "@containers/Seo"

const Index = ({ data }) => {
  return (
    <>
      <Seo />
      <TopMainVisualHeader />
      <NewsArea data={data} />
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
