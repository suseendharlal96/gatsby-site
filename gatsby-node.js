const path = require("path")

const slugify = require("./src/util/slugify")

exports.onCreateNode = ({ node, getNode, actions }) => {
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

    const projectsPerPage = 3
    const totalPages = Math.ceil(projects.length / projectsPerPage)
    Array.from({ length: totalPages }).map((_, index) => {
      const currentPage = index + 1
      if (index === 0) {
        return
      } else {
        createPage({
          path: `/projects/page/${currentPage}`,
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
  }
}
