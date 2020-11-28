import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
// import Typist from "react-typist"
import Title from "../components/Title"
import Image from "gatsby-image"
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projects-1.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 650, maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const stack = [
    { id: "1", title: "HTML" },
    { id: "2", title: "CSS" },
    { id: "3", title: "Javascript" },
    { id: "4", title: "React" },
    { id: "5", title: "Node" },
    { id: "6", title: "Angular" },
    { id: "7", title: "Vue" },
    { id: "8", title: "MongoDb" },
    { id: "9", title: "GatsbyJS" },
    { id: "10", title: "GraphQL" },
  ]
  return (
    <Layout>
      <SEO title="About Me" description="about suseendhar" />
      <section className="content-animate about-page">
        <div className="section-center about-center">
          <Image
            fluid={data.file.childImageSharp.fluid}
            className="about-img"
          />
          <article className="about-text">
            <Title title="About Me" />
            <p>
              I'm a Full~Stack developer and I take responsibility of developing
              responsive sites using HTML, CSS and JS along with latest
              frameworks and libraries like Reactjs, redux, angular7,Nodejs,
              mongodb. As a good team player, I've developed websites using
              React(also Angular & Vue), Redux, Nodejs, Mongodb along with
              GraphQL from the scratch which includes all the authentication and
              core stuffs for a website.
            </p>
            <p>
              Strong knowledge on: HTML, CSS, JS, Reactjs, Redux, Angular7,
              Nodejs, Mongodb, GatsbyJS(React static site generator),
              GraphQL(Apollo GraphQL), Vuejs & Chartjs.
            </p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
