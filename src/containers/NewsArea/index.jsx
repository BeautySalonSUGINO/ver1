import React from "react"
import { Link } from "gatsby"

import NewsAreaStyle from "../../components/NewsAreaStyle"

const NewsArea = ({ data }) => {
  return (
    <NewsAreaStyle>
      {data.allContentfulNews.edges.map(({ node }) => {
        return (
          <ul className="c-newsContentsItem u-mb__12px u-pb__12px">
            <Link to={`/news/${node.slug}`} key={node.id}>
              <li className="c-newsContentsItem--day u-ml__32px">
                {node.publishDateJP}
              </li>
              <li className="u-ml__96px">{node.title}</li>
            </Link>
          </ul>
        )
      })}
    </NewsAreaStyle>
  )
}

export default NewsArea
