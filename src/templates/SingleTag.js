import React from "react"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SingleTag = ({ data, pageContext: { tag } }) => {
  console.log(data, tag)
  return (
    <Layout>
      <SEO title={tag} />
      <Projects
        title={`${
          data.projects.nodes.length > 1
            ? data.projects.nodes.length + " Projects"
            : data.projects.nodes.length + " Project"
        } tagged with ${tag}`}
        projects={data.projects.nodes}
        showLink
      />
    </Layout>
  )
}

export const tagQuery = graphql`
  query singleTag($tag: String!) {
    projects: allContentfulProjects(
      filter: { tag: { stack: { in: [$tag] } } }
    ) {
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

export default SingleTag
