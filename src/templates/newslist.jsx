import React from "react"

import { graphql, Link } from "gatsby"

import HamburgerMenu from "@components/HamburgerMenu"
import BaseLayout from "@components/BaseLayout"

import Seo from "@containers/Seo"

const NewsList = ({ data, location }) => {
  return (
    <>
      <HamburgerMenu />

      <BaseLayout headerText="NEWS">
        <Seo
          pagetitle="ニュース一覧"
          pagedesc="スギノ美容室のニュース一覧です。"
          pagepath={location.pathname}
        />
        <div className="pageWrap">
          <section>
            {data.allContentfulNews.edges.map(({ node }) => {
              return (
                <Link to={`/news/${node.slug}`} key={node.id}>
                  <h3>{node.title}</h3>
                </Link>
              )
            })}
          </section>
        </div>
      </BaseLayout>
    </>
  )
}

export default NewsList

export const query = graphql`
  query {
    allContentfulNews(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 50
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
