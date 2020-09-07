import React from "react"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectPagination from "../components/ProjectPagination"

const SingleTag = ({ data, pageContext: { tag } }) => {
  return (
    <Layout>
      <SEO title={tag} />
      <section className="projects-page">
        {data.projects.nodes.length > 3 && (
          <ProjectPagination
            tag={tag}
            currentPage={1}
            totalPages={Math.ceil(data.projects.totalCount / 3)}
          />
        )}
        {data.projects.nodes.length > 3 ? (
          <Projects
            title={`Projects tagged with ${tag}`}
            projects={data.projects.nodes.slice(0, 3)}
            showLink
          />
        ) : (
          <Projects
            title={`${
              data.projects.nodes.length > 1
                ? data.projects.nodes.length + " Projects"
                : data.projects.nodes.length + " Project"
            } tagged with ${tag}`}
            projects={data.projects.nodes}
            showLink
          />
        )}
        {data.projects.nodes.length > 3 && (
          <div style={{ paddingBottom: "2%" }}>
            <ProjectPagination
              tag={tag}
              currentPage={1}
              totalPages={Math.ceil(data.projects.totalCount / 3)}
            />
          </div>
        )}
      </section>
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
