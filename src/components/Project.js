import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = props => {
  console.log(props)
  return (
    <article className="project">
      {props.frontmatter.image && (
        <Image
          fluid={props.frontmatter.image.childImageSharp.fluid}
          className="project-img"
        />
      )}
      <div className="project-info">
        <span className="project-number">0{props.index + 1}.</span>
        <h3>{props.frontmatter.title || "default title"}</h3>
        <div
          className="project-desc"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
        <div className="project-stack">
          {props.frontmatter.tags.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={props.frontmatter.github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={props.frontmatter.live}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}
Project.propTypes = {}

export default Project
