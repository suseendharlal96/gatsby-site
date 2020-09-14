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
      : `/projects/page/${currentPage - 1}`
  const nextPage = tag
    ? `/projects/${slugify(tag)}/${currentPage + 1}`
    : `/projects/page/${currentPage + 1}`
  return (
    <div className="btn-pagination">
      {isFirst ? (
        <button style={{ marginRight: "1%" }} className="btn-disabled" disabled>
          Prev
        </button>
      ) : (
        <Link to={prevPage}>
          <button style={{ marginRight: "1%" }} className="btn">
            Prev
          </button>
        </Link>
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
              : `/projects/page/${index + 1}`
          }`}
        >
          <button
            style={{ marginRight: "1%" }}
            className={`${currentPage === index + 1 ? "btn-disabled" : "btn"}`}
          >
            {index + 1}
          </button>
        </Link>
      ))}
      {isLast ? (
        <button style={{ marginRight: "1%" }} className="btn-disabled" disabled>
          Next
        </button>
      ) : (
        <Link to={nextPage}>
          <button style={{ marginRight: "1%" }} className="btn">
            Next
          </button>
        </Link>
      )}
    </div>
  )
}

export default ProjectPagination
