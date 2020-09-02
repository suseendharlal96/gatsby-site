import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero-img.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
      <div className="section-center hero-center"></div>
      <article className="hero-info">
        {/* <div>
          <div className="underline">
            <h1>I'm Suseendhar Lal</h1>
            <h4>UI developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </div> */}
      </article>
      <Image fluid={data.file.childImageSharp.fluid} className="hero-img" />
    </header>
  )
}

export default Hero
