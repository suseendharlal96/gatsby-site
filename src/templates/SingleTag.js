import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SingleTag = ({ data, pageContext: { tag } }) => {
  return (
    <Layout>
      <SEO title={tag} />
      <section className="projects-page">
        {data.projects.nodes.length > 4 ? (
          <Projects
            title={`${data.projects.nodes.length} projects tagged with ${tag}`}
            projects={data.projects.nodes.slice(0, 4)}
            showLink
            tag={tag}
            tagLength={data.projects.nodes.length}
            currentPage={1}
            totalPages={Math.ceil(data.projects.totalCount / 4)}
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
      </section>
    </Layout>
  )
}

export const singleTagQuery = graphql`
  query singleTag($tag: String!) {
    projects: allContentfulProjects(
      filter: { tag: { stack: { in: [$tag] } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        ...projectFragment
      }
      totalCount
    }
  }
`

export default SingleTag
