import React from "react"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPagination from "../components/ProjectPagination"

const ProjectPaginationTemplate = ({
  data,
  pageContext: { currentPage, totalPages, skip },
}) => {
  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />
      <section className="projects-page">
        <ProjectPagination currentPage={currentPage} totalPages={totalPages} />
        <Projects
          title="all projects"
          skip={skip}
          projects={data.projects.nodes}
        />
        <div style={{ paddingBottom: "2%" }}>
          <ProjectPagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </Layout>
  )
}

export const tagQuery = graphql`
  query pagination($limit: Int!, $skip: Int!) {
    projects: allContentfulProjects(limit: $limit, skip: $skip) {
      nodes {
        id
        title
        github
        featured
        desc {
          childMarkdownRemark {
            html
          }
        }
        live
        tag {
          stack
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ProjectPaginationTemplate
