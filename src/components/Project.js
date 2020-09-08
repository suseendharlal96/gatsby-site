import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import slugify from "../util/slugify"
const Project = ({
  title,
  github,
  live,
  skip,
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
        {index >= 0 && (
          <span className="project-number">
            {skip
              ? skip + index + 1 <= 9
                ? "0" + (skip + index + 1)
                : skip + index + 1
              : index + 1 <= 9
              ? "0" + (index + 1)
              : index + 1}
            .
          </span>
        )}
        <Link to={index >= 0 ? `/projects/${slugify(title)}` : null}>
          <h3>{title || "default title"}</h3>
        </Link>
        <div
          className="project-desc"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
          <a rel="noreferrer noopener" target="_blank" href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a rel="noreferrer noopener" target="_blank" href={live}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}
Project.propTypes = {}

export default Project
