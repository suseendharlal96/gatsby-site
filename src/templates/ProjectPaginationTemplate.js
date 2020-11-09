import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPaginationTemplate = ({
  data,
  pageContext: { currentPage, totalPages, skip },
}) => {
  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />
      <section className="projects-page">
        <Projects
          title="all projects"
          skip={skip}
          projects={data.projects.nodes}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </section>
    </Layout>
  )
}

export const projectPaginationQuery = graphql`
  query pagination($limit: Int!, $skip: Int!) {
    projects: allContentfulProjects(
      sort: { fields: title, order: ASC }
      limit: $limit
      skip: $skip
    ) {
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
`

export default ProjectPaginationTemplate
