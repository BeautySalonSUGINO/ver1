const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query {
      allContentfulBlog(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
    return
  }

  blogresult.data.allContentfulBlog.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/templates/blogpost.jsx`),
      context: {
        id: node.id,
      },
    })
  })

  const newsresult = await graphql(`
    query {
      allContentfulNews(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (newsresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
    return
  }

  newsresult.data.allContentfulNews.edges.forEach(({ node }) => {
    createPage({
      path: `/news/${node.slug}`,
      component: path.resolve(`./src/templates/newspost.jsx`),
      context: {
        id: node.id,
      },
    })
  })
}
