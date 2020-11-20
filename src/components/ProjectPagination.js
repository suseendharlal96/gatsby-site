import React from "react"
import { Link } from "gatsby"

import slugify from "../util/slugify"

const ProjectPagination = ({ currentPage, totalPages, tag }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const prevPage =
    currentPage - 1 === 1
      ? tag
        ? `/projects/${slugify(tag)}`
        : "/projects"
      : tag
      ? `/projects/${slugify(tag)}/${currentPage - 1}`
      : `/projects/${currentPage - 1}`
  const nextPage = tag
    ? `/projects/${slugify(tag)}/${currentPage + 1}`
    : `/projects/${currentPage + 1}`
  return (
    <div className="btn-pagination">
      {isFirst ? (
        <>
          <button
            style={{ marginRight: "10px", marginBottom: "10px" }}
            className="btn-disabled"
            disabled
          >
            0<sup>th</sup>
          </button>
          <button
            style={{ marginRight: "10px", marginBottom: "10px" }}
            className="btn-disabled"
            disabled
          >
            Prev
          </button>
        </>
      ) : (
        <>
          <Link to={tag ? `/projects/${slugify(tag)}` : "/projects"}>
            <button
              style={{ marginRight: "10px", marginBottom: "10px" }}
              className="btn"
            >
              0<sup>th</sup>
            </button>
          </Link>
          <Link to={prevPage}>
            <button
              style={{ marginRight: "10px", marginBottom: "10px" }}
              className="btn"
            >
              Prev
            </button>
          </Link>
        </>
      )}
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          key={index}
          to={`${
            index === 0
              ? tag
                ? `/projects/${slugify(tag)}`
                : "/projects"
              : tag
              ? `/projects/${slugify(tag)}/${index + 1}`
              : `/projects/${index + 1}`
          }`}
        >
          <button
            style={{ marginRight: "10px", marginBottom: "10px" }}
            className={`${currentPage === index + 1 ? "btn-disabled" : "btn"}`}
          >
            {index + 1}
          </button>
        </Link>
      ))}
      {isLast ? (
        <>
          <button
            style={{ marginRight: "10px", marginBottom: "10px" }}
            className="btn-disabled"
            disabled
          >
            Next
          </button>
          <button
            style={{ marginRight: "10px", marginBottom: "10px" }}
            className="btn-disabled"
            disabled
          >
            n<sup>th</sup>
          </button>
        </>
      ) : (
        <>
          <Link to={nextPage}>
            <button
              style={{ marginRight: "10px", marginBottom: "10px" }}
              className="btn"
            >
              Next
            </button>
          </Link>
          <Link
            to={
              tag
                ? `/projects/${slugify(tag)}/${totalPages}`
                : `/projects/${totalPages}`
            }
          >
            <button
              style={{ marginRight: "10px", marginBottom: "10px" }}
              className="btn"
            >
              n<sup>th</sup>
            </button>
          </Link>
        </>
      )}
    </div>
  )
}

export default ProjectPagination
