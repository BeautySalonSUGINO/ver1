import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = props => {
  const { pagetitle, pagedesc } = props

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
        }
      }
    }
  `)

  const metaData = data.site.siteMetadata

  const title = pagetitle || metaData.title

  const description = pagedesc || metaData.description

  return (
    <Helmet>
      <html lang={metaData.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default Seo
