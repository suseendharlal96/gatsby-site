import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"

export default () => {
  const featuredProjects = useStaticQuery(graphql`
    {
      projects: allContentfulProjects(filter: { featured: { eq: true } }) {
        nodes {
          title
          ...projectFragment
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Profile />
      <Services />
      <Jobs />
      <Projects
        hideTag
        projects={featuredProjects.projects.nodes}
        title="featured projects"
        showLink
      />
    </Layout>
  )
}
