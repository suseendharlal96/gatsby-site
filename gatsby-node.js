const path = require("path")

const slugify = require("./src/util/slugify")

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === "ContentfulProjects") {
    const slugTitle = slugify(node.title)
    createNodeField({
      node,
      name: "slug",
      value: slugTitle,
    })
  }
}

exports.createPages = async ({ graphl, actions }) => {
  const { createPage } = actions
  const template = {
    singleProject: path.resolve("./src/templates/project-template"),
    tagProject: path.resolve("./src/templates/tag-template"),
  }
  const { data } = await graphql(`
    {
      projects: allContentfulProjects {
        nodes {
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

  const projects = data.projects

  //   single Project page
  projects.forEach(project => {
    createPage({
      path: `projects/${project.fields.slug}`,
      component: template.singleProject,
      context: { slug: project.fields.slug },
    })
  })

  //   tags page
  const tags = []
  projects.forEach(project => {
    tags.push(project.tag.stack)
  })
  const uniqueTags = [...new Set(tags)]
  uniqueTags.forEach(tag => {
    createPage({
      path: `projects/${tag}`,
      component: template.tagProject,
      context: { tag },
    })
  })
}
