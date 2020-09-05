import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "susee-bw.png" }) {
        childImageSharp {
          fluid(maxHeight: 650, maxWidth: 650) {
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
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Full Stack Developer</h1>
            <h4>
              Hello, my name is Suseedhar. I love creating high quality websites
              and apps that use the latest and greatest tools out there to
              maximize UI and UX quality.
            </h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image
          fluid={data.file.childImageSharp.fluid}
          style={{ left: "80px" }}
          className="hero-img"
        />
      </div>
    </header>
  )
}

export default Hero
