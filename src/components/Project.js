import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({
  title,
  github,
  live,
  desc: {
    childMarkdownRemark: { html },
  },
  image,
  tag: { stack },
  index,
}) => {
  return (
    <article className="project">
      {image && <Image fluid={image.fluid} className="project-img" />}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <div
          className="project-desc"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={live}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}
Project.propTypes = {}

export default Project
