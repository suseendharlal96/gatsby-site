import React from "react"

import Projects from "../components/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPagination from "../components/ProjectPagination"

const ProjectsTagPagination = ({
  data,
  pageContext: { currentPage, totalPages, skip, tag },
}) => {
  console.log(data)
  return (
    <Layout>
      <SEO />
      <section className="projects-page">
        <ProjectPagination
          tag={tag}
          currentPage={currentPage}
          totalPages={totalPages}
        />
        <Projects
          title={`Projects tagged with ${tag}`}
          skip={skip}
          projects={data.projects.nodes}
          showLink
        />
        <div style={{ paddingBottom: "2%" }}>
          <ProjectPagination
            tag={tag}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </Layout>
  )
}

export const tagPaginationQuery = graphql`
  query tagPaginationQuery($tag: String!, $limit: Int!, $skip: Int!) {
    projects: allContentfulProjects(
      filter: { tag: { stack: { in: [$tag] } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        ...projectFragment
      }
      totalCount
    }
  }
`

export default ProjectsTagPagination
