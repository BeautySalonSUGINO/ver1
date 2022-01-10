import React from "react"

import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import BaseLayout from "../components/BaseLayout"

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <div style={{ width: "20%" }}>
          <GatsbyImage
            image={node.data.target.gatsbyImageData}
            alt={
              node.data.target.description
                ? node.data.target.description
                : node.data.target.title
            }
          />
        </div>
      )
    },
  },
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

const BlogPost = ({ data, pageContext }) => {
  const contentfulBlog = data.contentfulBlog
  return (
    <BaseLayout>
      <h2>{contentfulBlog.title}</h2>
      <time dateTime={contentfulBlog.publishDate}>
        <p>{contentfulBlog.publishDateJP}</p>
      </time>
      <ul>
        {contentfulBlog.category.map(cat => {
          return <li key={cat.id}>{cat.category}</li>
        })}
      </ul>

      <div>{renderRichText(contentfulBlog.content, options)}</div>

      {pageContext.next && (
        <Link to={`/blog/${pageContext.next.slug}`} rel="prev">
          前の記事
        </Link>
      )}
      {pageContext.previous && (
        <Link to={`/blog/${pageContext.previous.slug}`} rel="next">
          次の記事
        </Link>
      )}
    </BaseLayout>
  )
}

export default BlogPost

export const query = graphql`
  query ($id: String!) {
    contentfulBlog(id: { eq: $id }) {
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
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(layout: FULL_WIDTH)
            title
            description
          }
        }
      }
    }
  }
`
