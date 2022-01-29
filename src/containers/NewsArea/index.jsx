import React from "react"
import { Link } from "gatsby"

import NewsAreaStyle from "../../components/NewsAreaStyle"

const NewsArea = ({ data }) => {
  return (
    <NewsAreaStyle>
      {data.allContentfulNews.edges.map(({ node }) => {
        return (
          <div
            className="c-newsContentsItem u-mb__12px u-pb__12px"
            key={node.id}
          >
            <Link to={`/news/${node.slug}`}>
              <p className="c-newsContentsItem--day u-ml__32px">
                {node.publishDateJP}
              </p>
              <p className="c-newsContentsItem--title u-ml__96px">
                {node.title}
              </p>
            </Link>
          </div>
        )
      })}
    </NewsAreaStyle>
  )
}

export default NewsArea
