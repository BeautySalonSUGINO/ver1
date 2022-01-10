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
          next {
            title
            slug
          }
          previous {
            title
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

  blogresult.data.allContentfulBlog.edges.forEach(
    ({ node, next, previous }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`./src/templates/blogpost.jsx`),
        context: {
          id: node.id,
          next,
          previous,
        },
      })
    }
  )

  const newsresult = await graphql(`
    query {
      allContentfulNews(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
          next {
            title
            slug
          }
          previous {
            title
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

  newsresult.data.allContentfulNews.edges.forEach(
    ({ node, next, previous }) => {
      createPage({
        path: `/news/${node.slug}`,
        component: path.resolve(`./src/templates/newspost.jsx`),
        context: {
          id: node.id,
          next,
          previous,
        },
      })
    }
  )
}
