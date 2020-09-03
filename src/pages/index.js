import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default () => {
  return (
    <Layout>
      <Profile />
      <Services />
      {/* <Jobs /> */}
      {/* <Projects projects={projects} title="featured projects" showLink /> */}
    </Layout>
  )
}

// export const featuredProjects = graphql`
//   { 
//     allStrapiProjects(filter: { featured: { eq: true } }) {
//       nodes {
//         github
//         id
//         description
//         title
//         url
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
