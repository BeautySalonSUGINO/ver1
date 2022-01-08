import React from "react"

import { graphql } from "gatsby"

import BaseLayout from "../components/BaseLayout"

const BlogPost = ({ data }) => {
  const contentfulNews = data.contentfulNews
  return (
    <BaseLayout>
      <h2>{contentfulNews.title}</h2>
      <time dateTime={contentfulNews.publishDate}>
        <p>{contentfulNews.publishDateJP}</p>
      </time>
    </BaseLayout>
  )
}

export default BlogPost

export const query = graphql`
  query {
    contentfulNews {
      title
      publishDate
      publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
    }
  }
`
