import React from "react"

import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"

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

const Topic = ({ data, location }) => {
  const contentfulTopic = data.contentfulTopic
  return (
    <BaseLayout>
      <Seo
        pagetitle={contentfulTopic.title}
        pagedesc={`${documentToPlainTextString(
          JSON.parse(contentfulTopic.content.raw)
        ).slice(0, 70)}...`}
        pagepath={location.pathname}
      />

      <h2>{contentfulTopic.title}</h2>
      <time dateTime={contentfulTopic.publishDate}>
        <p>{contentfulTopic.publishDateJP}</p>
      </time>

      <div>{renderRichText(contentfulTopic.content, options)}</div>
    </BaseLayout>
  )
}

export default Topic

export const query = graphql`
  query {
    contentfulTopic {
      title
      publishDate
      publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
      content {
        raw
      }
    }
  }
`
