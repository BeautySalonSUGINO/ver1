import React from "react"

import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

import BaseLayout from "../components/BaseLayout"

import Seo from "../containers/Seo"

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

const NewsPost = ({ data, pageContext, location }) => {
  const contentfulNews = data.contentfulNews
  return (
    <BaseLayout>
      <Seo
        pagetitle={contentfulNews.title}
        pagepath={location.pathname}
        pageimg={contentfulNews.eyecatch.file.url}
        pageimgw={contentfulNews.eyecatch.file.details.image.width}
        pageimgh={contentfulNews.eyecatch.file.details.image.height}
      />

      <h2>{contentfulNews.title}</h2>
      <time dateTime={contentfulNews.publishDate}>
        <p>{contentfulNews.publishDateJP}</p>
      </time>
      <ul>
        {contentfulNews.category.map(cat => {
          return <li key={cat.id}>{cat.category}</li>
        })}
      </ul>

      <div>{renderRichText(contentfulNews.content, options)}</div>

      {pageContext.next && (
        <Link to={`/news/${pageContext.next.slug}`} rel="prev">
          前のニュース
        </Link>
      )}
      {pageContext.previous && (
        <Link to={`/news/${pageContext.previous.slug}`} rel="next">
          次のニュース
        </Link>
      )}
    </BaseLayout>
  )
}

export default NewsPost

export const query = graphql`
  query ($id: String!) {
    contentfulNews(id: { eq: $id }) {
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
        file {
          details {
            image {
              width
              height
            }
          }
          url
        }
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
