import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import Project from "./Project"
import Tags from "../constants/tags"

const Projects = ({ projects, title, showLink, hideTag, skip }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      {!hideTag && <Tags />}
      <div className="section-center projects-center">
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
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          All Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
