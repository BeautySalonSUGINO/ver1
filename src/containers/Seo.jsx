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
          locate
          fbappid
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

      <meta property="og:site_name" content={metaData.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locate" content={metaData.locate} />
      <meta property="fb:app_id" content={metaData.fbappid} />
    </Helmet>
  )
}

export default Seo
