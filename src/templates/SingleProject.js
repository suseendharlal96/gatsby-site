import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import Title from "../components/Title"

const SingleProject = ({ data: { project }, pageContext: { title } }) => {
  return (
    <Layout>
      <SEO title={title} />
      <Title title={title} />
      <Project key={project.id} {...project} />
    </Layout>
  )
}

export const query = graphql`
  query GetSingleproject($title: String!) {
    project: contentfulProjects(title: { eq: $title }) {
      id
      title
      github
      live
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
`

export default SingleProject
