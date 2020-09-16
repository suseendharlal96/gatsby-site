import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import Title from "../components/Title"

import Tags from "../constants/tags"

const SingleProject = ({ data: { project }, pageContext: { title } }) => {
  return (
    <Layout>
      <SEO title={title} />
      <Title title={title} />
      <Tags />
      <Project key={project.id} {...project} />
    </Layout>
  )
}

export const singleProjectQuery = graphql`
  query GetSingleproject($title: String!) {
    project: contentfulProjects(title: { eq: $title }) {
      title
      ...projectFragment
    }
  }
`

export default SingleProject
