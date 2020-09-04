import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  const allProjects = useStaticQuery(graphql`
    {
      projects: allContentfulProjects {
        nodes {
          id
          title
          github
          live
          featured
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          tag {
            stack
          }
          desc {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={allProjects.projects.nodes} title="all projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage
