import React from "react"

import { graphql, Link } from "gatsby"

import BaseLayout from "@components/BaseLayout"
import HamburgerMenu from "@components/HamburgerMenu"

import Seo from "@containers/Seo"

const BlogList = ({ data, location }) => {
  return (
    <>
      <HamburgerMenu />

      <BaseLayout headerText="BLOG">
        <Seo
          pagetitle="ブログ一覧"
          pagedesc="スギノ美容室のブログ一覧です。"
          pagepath={location.pathname}
        />
        <section>
          {data.allContentfulBlog.edges.map(({ node }) => {
            return (
              <Link to={`/blog/${node.slug}`} key={node.id}>
                <h3>{node.title}</h3>
              </Link>
            )
          })}
        </section>
      </BaseLayout>
    </>
  )
}

export default BlogList

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: { order: DESC, fields: publishDate }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`
