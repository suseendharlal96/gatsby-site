import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsTagPagination = ({
  data,
  pageContext: { currentPage, totalPages, skip, tag, tagCount },
}) => {
  return (
    <Layout>
      <SEO title={tag} />
      <section className="projects-page">
        <Projects
          title={`${tagCount} projects tagged with ${tag}`}
          skip={skip}
          projects={data.projects.nodes}
          showLink
          tag={tag}
          currentPage={currentPage}
          tagLength={data.projects.totalCount}
          totalPages={totalPages}
        />
      </section>
    </Layout>
  )
}

export const tagPaginationQuery = graphql`
  query tagPaginationQuery($tag: String!, $limit: Int!, $skip: Int!) {
    projects: allContentfulProjects(
      filter: { tag: { stack: { in: [$tag] } } }
      sort: { fields: title, order: ASC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        ...projectFragment
      }
      totalCount
    }
  }
`

export default ProjectsTagPagination
