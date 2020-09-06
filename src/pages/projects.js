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
        nodes{
          ...projectFragment
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
