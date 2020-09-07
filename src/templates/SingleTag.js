import React from "react"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SingleTag = ({ data, pageContext: { tag } }) => {
  return (
    <Layout>
      <SEO title={tag} />
      {data.projects.nodes.length > 3 && (
        <ProjectPagination
          currentPage={1}
          totalPages={data.projects.totalCount / 3}
        />
      )}
      <Projects
        title={`${
          data.projects.nodes.length > 1
            ? data.projects.nodes.length + " Projects"
            : data.projects.nodes.length + " Project"
        } tagged with ${tag}`}
        projects={data.projects.nodes}
        showLink
      />
      {data.projects.nodes.length > 3 && (
        <ProjectPagination
          currentPage={1}
          totalPages={data.projects.totalCount / 3}
        />
      )}
    </Layout>
  )
}

export const tagQuery = graphql`
  query singleTag($tag: String!) {
    projects: allContentfulProjects(
      filter: { tag: { stack: { in: [$tag] } } }
    ) {
      nodes {
        ...projectFragment
      }
      totalCount
    }
  }
`

export default SingleTag
