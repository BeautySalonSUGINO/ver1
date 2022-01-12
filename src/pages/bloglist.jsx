import React from "react"

import { graphql, Link } from "gatsby"

import BaseLayout from "@components/BaseLayout"

import Seo from "@containers/Seo"

const BlogList = ({ data, location }) => {
  return (
    <BaseLayout>
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
  )
}

export default BlogList

export const query = graphql`
  query {
    allContentfulBlog(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 10
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
