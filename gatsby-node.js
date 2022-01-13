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

  const blogListPerPage = 10
  const blogList = blogresult.data.allContentfulBlog.edges.length
  const blogPages = Math.ceil(blogList / blogListPerPage)

  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/bloglist/` : `/bloglist/${i + 1}`,
      component: path.resolve("./src/templates/bloglist.jsx"),
      context: {
        skip: blogListPerPage * i,
        limit: blogListPerPage,
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

  const newsListPerPage = 50
  const newsList = newsresult.data.allContentfulNews.edges.length
  const newsPages = Math.ceil(newsList / newsListPerPage)

  Array.from({ length: newsPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/newslist/` : `/newslist/${i + 1}`,
      component: path.resolve("./src/templates/newslist.jsx"),
      context: {
        skip: newsListPerPage * i,
        limit: newsListPerPage,
      },
    })
  })
}
