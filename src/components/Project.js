import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import slugify from "../util/slugify"
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
      {/* <Link to={index >= 0 ? `/projects/${slugify(title)}` : null}> */}
        {image && <Image fluid={image.fluid} className="project-img" />}
      {/* </Link> */}
      <div className="project-info">
        <Link to={index >= 0 ? `/projects/${slugify(title)}` : null}>
        {index >= 0 && <span className="project-number">0{index + 1}.</span>}
        <h3>{title || "default title"}</h3>
        <div
          className="project-desc"
          dangerouslySetInnerHTML={{ __html: html }}
          />
          </Link>
        <div className="project-stack">
          {stack.map((item, index) => {
            return (
              <Link key={index} to={`/projects/${slugify(item)}`}>
                <span>{item}</span>
              </Link>
            )
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
