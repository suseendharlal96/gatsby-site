import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Typist from "react-typist"
import { graphql, useStaticQuery } from "gatsby"
import Resume from "../assets/suseendhar_webDev.pdf"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "suseendharlal_id_photo.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 400, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className="content-animate hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              Full Stack Developer
            </h1>
            <div className="underline"></div>
            <Typist cursor={{ show: false }} avgTypingDelay={40}>
              <h4 style={{ lineHeight: "2" }}>
                Hello, I'm Suseendhar. I love creating high quality websites and
                apps that use the latest and greatest tools out there to
                maximize UI and UX quality.
              </h4>
            </Typist>
            {/* <Link to="/contact" className="btn">
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
            </a> */}
          </div>
        </article>
        <Image
          fluid={data.file.childImageSharp.fluid}
          style={{ left: "95px" }}
          className="hero-img"
        />
        <button className="content-animate nav-btn">
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
