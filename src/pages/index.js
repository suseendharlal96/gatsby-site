import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import $ from "jquery"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"

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
  const scrollToId = id => {
    // console.log($(id))
    // var el = document.getElementById(id)
    // let lessBy = 80
    // if (id === "service") {
    //   lessBy = 100
    // }
    // $("html, body").animate(
    //   {
    //     scrollTop: $(el).offset().top - lessBy,
    //   },
    //   500
    // )
  }
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
