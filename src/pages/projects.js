import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"
import ProjectPagination from "../components/ProjectPagination"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  const allProjects = useStaticQuery(graphql`
    {
      projects: allContentfulProjects(limit: 3) {
        nodes {
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
        <ProjectPagination
          currentPage={1}
          totalPages={Math.ceil(allProjects.projects.totalCount / 3)}
        />
        <Projects projects={allProjects.projects.nodes} title="all projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage
