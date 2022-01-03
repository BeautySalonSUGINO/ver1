import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = props => {
  const { pagetitle, pagedesc, pagepath } = props

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
          siteUrl
        }
      }
    }
  `)

  const metaData = data.site.siteMetadata

  const title = pagetitle ? `${pagetitle}| ${metaData.title}` : metaData.title

  const description = pagedesc || metaData.description

  const url = pagepath ? `${metaData.siteUrl}${pagepath}` : metaData.siteUrl

  return (
    <Helmet>
      <html lang={metaData.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default Seo
