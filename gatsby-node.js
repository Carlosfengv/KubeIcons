/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allNavYaml {
            edges {
              node {
                label
                title
                description
                items {
                  label
                  title
                }
              }
            }
          }
      }
    `)
    result.data.allNavYaml.edges.forEach(({ node }) => {
      console.log(node)
      createPage({
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.,
          label: node.label,
          title: node.title,
          description: node.description
        },
      })
    })
  }