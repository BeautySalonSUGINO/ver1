import React from "react"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import BaseLayout from "../components/BaseLayout"

const BlogPost = ({ data }) => {
  const contentfulNews = data.contentfulNews
  return (
    <BaseLayout>
      <h2>{contentfulNews.title}</h2>
      <time dateTime={contentfulNews.publishDate}>
        <p>{contentfulNews.publishDateJP}</p>
      </time>
      <ul>
        {contentfulNews.category.map(cat => {
          return <li key={cat.id}>{cat.category}</li>
        })}
      </ul>
      <GatsbyImage
        image={contentfulNews.eyecatch.gatsbyImageData}
        alt={contentfulNews.eyecatch.description}
      />
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
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        gatsbyImageData(width: 500, layout: CONSTRAINED)
        description
      }
    }
  }
`
