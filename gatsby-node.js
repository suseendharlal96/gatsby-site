const path = require("path")

const slugify = require("./src/util/slugify")

// exports.onCreateWebpackConfig = ({ actions }) => {
//   const { setWebpackConfig } = actions
//   setWebpackConfig({
//     externals: {
//       jquery: "jQuery", // important: 'Q' capitalized
//     },
//   })
// }

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "ContentfulProjects") {
    const slugTitle = slugify(node.title)
    createNodeField({
      node,
      name: "slug",
      value: slugTitle,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = {
    singleProject: path.resolve("./src/templates/SingleProject.js"),
    tagProject: path.resolve("./src/templates/SingleTag.js"),
    projectPagination: path.resolve(
      "./src/templates/ProjectPaginationTemplate.js"
    ),
    projectsTagPagination: path.resolve(
      "./src/templates/ProjectsTagPaginationTemplate.js"
    ),
  }
  const { data } = await graphql(`
    {
      projects: allContentfulProjects {
        nodes {
          title
          fields {
            slug
          }
          tag {
            stack
          }
        }
      }
    }
  `)
  if (data) {
    const projects = data.projects.nodes
    //   single Project page
    projects.forEach(project => {
      createPage({
        path: `/projects/${project.fields.slug}`,
        component: template.singleProject,
        context: { title: project.title },
      })
    })

    //   tags page
    const tags = []
    projects.forEach(project => {
      project.tag.stack.forEach(t => {
        tags.push(t)
      })
    })
    const uniqueTags = [...new Set(tags)]
    uniqueTags.forEach(tag => {
      createPage({
        path: `/projects/${slugify(tag)}`,
        component: template.tagProject,
        context: { tag },
      })
    })

    // pagination in projects page
    const projectsPerPage = 4
    const totalPages = Math.ceil(projects.length / projectsPerPage)
    Array.from({ length: totalPages }).map((_, index) => {
      const currentPage = index + 1
      if (index === 0) {
        return
      } else {
        createPage({
          path: `/projects/${currentPage}`,
          component: template.projectPagination,
          context: {
            limit: projectsPerPage,
            skip: index * projectsPerPage,
            currentPage,
            totalPages,
          },
        })
      }
    })

    // pagination in projects tag if tag count is more than 3
    const allTags = {}
    projects.forEach(pro => {
      pro.tag.stack.forEach(t => {
        allTags[t] = (allTags[t] || 0) + 1
        if (allTags[t] > 3) {
          const tagsPerPage = 4
          const totalPages = Math.ceil(allTags[t] / tagsPerPage)
          Array.from({ length: totalPages }).map((_, index) => {
            const currentPage = index + 1
            if (index === 0) {
              return
            } else {
              createPage({
                path: `/projects/${slugify(t)}/${currentPage}`,
                component: template.projectsTagPagination,
                context: {
                  limit: tagsPerPage,
                  skip: index * tagsPerPage,
                  currentPage,
                  tagCount: allTags[t],
                  totalPages,
                  tag: t,
                },
              })
            }
          })
        }
      })
    })
  }
}
