import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import Project from "./Project"
import Tags from "../constants/tags"
import ProjectPagination from "./ProjectPagination"

const Projects = ({
  projects,
  title,
  showLink,
  hideTag,
  skip,
  currentPage,
  totalPages,
  tag,
  tagLength,
}) => {
  return (
    <section id="projects" className="section projects">
      <Title title={title} />
      {(!tag && currentPage) || (tag && tagLength > 3) ? (
        <ProjectPagination
          currentPage={currentPage}
          totalPages={totalPages}
          tag={tag}
        />
      ) : null}
      {!hideTag && <Tags />}
      <div className="content-animate section-center projects-center">
        {projects.map((project, index) => {
          return (
            <Project
              hideTag={hideTag}
              key={project.id}
              skip={skip}
              index={index}
              {...project}
            />
          )
        })}
      </div>
      {(!tag && currentPage) || (tag && tagLength > 3) ? (
        <ProjectPagination
          currentPage={currentPage}
          totalPages={totalPages}
          tag={tag}
        />
      ) : null}
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          All Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
