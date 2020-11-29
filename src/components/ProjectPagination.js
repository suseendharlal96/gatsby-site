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
    <div className="pagination-container">
      {isFirst ? (
        <>
          <button className="pagination-btn" disabled>
            {"I<<"}
          </button>
          <button className="pagination-btn" disabled>
            {"<"}
          </button>
        </>
      ) : (
        <>
          <Link to={tag ? `/projects/${slugify(tag)}` : "/projects"}>
            <button className="pagination-btn">{"I<<"}</button>
          </Link>
          <Link to={prevPage}>
            <button className="pagination-btn">{"<"}</button>
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
            className={`${
              currentPage === index + 1
                ? "pagination-btn disabled"
                : "pagination-btn"
            }`}
          >
            {index + 1}
          </button>
        </Link>
      ))}
      {isLast ? (
        <>
          <button className="pagination-btn" disabled>
            {">"}
          </button>
          <button className="pagination-btn" disabled>
            {">>I"}
          </button>
        </>
      ) : (
        <>
          <Link to={nextPage}>
            <button className="pagination-btn">{">"}</button>
          </Link>
          <Link
            to={
              tag
                ? `/projects/${slugify(tag)}/${totalPages}`
                : `/projects/${totalPages}`
            }
          >
            <button className="pagination-btn">{">>I"}</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default ProjectPagination
