import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = () => {
  const allProjects = useStaticQuery(graphql`
    {
      projects: allContentfulProjects(
        limit: 3
        sort: { fields: title, order: ASC }
      ) {
        nodes {
          title
          ...projectFragment
        }
        totalCount
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects
          projects={allProjects.projects.nodes}
          title="all projects"
          currentPage={1}
          totalPages={Math.ceil(allProjects.projects.totalCount / 3)}
        />
      </section>
    </Layout>
  )
}

export default ProjectsPage
