import React from "react"

import { graphql } from "gatsby"

import BaseLayout from "../components/BaseLayout"

const BlogPost = ({ data }) => {
  const contentfulNews = data.contentfulNews
  return (
    <BaseLayout>
      <h2>{contentfulNews.title}</h2>
    </BaseLayout>
  )
}

export default BlogPost

export const query = graphql`
  query {
    contentfulNews {
      title
    }
  }
`
