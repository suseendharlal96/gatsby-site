import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Typist from "react-typist"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Resume from "../assets/resume.pdf"

const Profile = ({ scrollToId }) => {
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

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <Typist cursor={{ show: false }}>
              <h1>Full Stack Developer</h1>
              <div className="underline"></div>
              <h4>
                Hello, I'm Suseendhar. I love creating high quality websites and
                apps that use the latest and greatest tools out there to
                maximize UI and UX quality.
              </h4>
            </Typist>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <a
              style={{ marginLeft: "2%" }}
              href={Resume}
              className="btn"
              download
              target="__blank"
            >
              Résumé
            </a>
            <SocialLinks />
          </div>
        </article>
        <Image
          fluid={data.file.childImageSharp.fluid}
          style={{ left: "45px" }}
          className="hero-img"
        />
        <button
          className="content-animate nav-btn"
          onClick={() => scrollToId("service")}
        >
          <div style={{ transform: "rotate(180deg)" }}>
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
        </button>
      </div>
    </header>
  )
}

export default Profile
