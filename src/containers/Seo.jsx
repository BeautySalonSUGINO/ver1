import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = () => {
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

  return (
    <Helmet>
      <html lang={metaData.lang} />
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
    </Helmet>
  )
}

export default Seo
