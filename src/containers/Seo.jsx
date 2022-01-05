import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = props => {
  const { pagetitle, pagedesc, pagepath, pageimg, pageimgw, pageimgh } = props

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

  const imgurl = pageimg
    ? `${metaData.siteUrl}${pageimg}`
    : `${metaData.siteUrl}/sugino_ogp.jpg`

  const imgw = pageimgw || 1920
  const imgh = pageimgh || 1080

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

      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgw} />
      <meta property="og:image:height" content={imgh} />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default Seo
