import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "susee-orig.png" }) {
        childImageSharp {
          fixed(height: 650, width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Suseendhar Lal</h1>
            <h4>UI developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image
          fixed={data.file.childImageSharp.fixed}
          className="hero-img"
          style={{ position: "absolute", right: "0px" }}
        />
      </div>
    </header>
  )
}

export default Hero
