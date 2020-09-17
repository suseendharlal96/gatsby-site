import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Typist from "react-typist"
import Title from "../components/Title"
import Image from "gatsby-image"
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "susee-orig.png" }) {
        childImageSharp {
          fixed(height: 500, width: 355) {
            ...GatsbyImageSharpFixed
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
    { id: "9", title: "GraphQL" },
  ]
  return (
    <Layout>
      <SEO title="About Me" description="about suseendhar" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image
            fixed={data.file.childImageSharp.fixed}
            className="about-img"
          />
          <article className="about-text">
            <Title title="About Me" />
            <Typist avgTypingDelay={20} cursor={{ show: false }}>
              <p>
                I'm a full stack developer, I enjoy the process of making a web
                site/app from start to finish. This gives me the ability to keep
                an eye on the big picture the whole time I'm working on
                something. In my spare time, I enjoy watching movies, listening
                songs, surfing into social medias and spending time with
                friends.
              </p>
            </Typist>
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
