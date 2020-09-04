import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Profile from "../components/Profile"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default () => {
  const featuredProjects = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: "true" } } }
      ) {
        nodes {
          html
          frontmatter {
            title
            github
            live
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)
  console.log(featuredProjects)
  return (
    <Layout>
      <Profile />
      <Services />
      {/* <Jobs /> */}
      <Projects
        projects={featuredProjects.projects.nodes}
        title="featured projects"
        showLink
      />
    </Layout>
  )
}
