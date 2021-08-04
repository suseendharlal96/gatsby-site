import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FaRegCommentDots } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { GrGithub } from "react-icons/gr"
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
          <>
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
            <span style={{ marginLeft: "5px" }} className="project-number">
              {index >= 0 ? (
                <Link
                  style={{ color: "var(--primary-neon)" }}
                  to={`/projects/${slugify(title)}`}
                >
                  {title}
                </Link>
              ) : (
                <h3>{title}</h3>
              )}
            </span>
          </>
        )}
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
            <GrGithub title="github repo" className="project-icon" />
          </a>
          <a rel="noreferrer noopener" target="_blank" href={live}>
            <FiExternalLink title="live demo" className="project-icon" />
          </a>
          <Link style={{ float: "right" }} to={`/projects/${slugify(title)}`}>
            <FaRegCommentDots
              title="like,share,comment"
              className="project-icon"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
Project.propTypes = {}

export default Project
