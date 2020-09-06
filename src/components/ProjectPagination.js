import React from "react"
import { Link } from "gatsby"

const ProjectPagination = ({ currentPage, totalPages }) => {
  console.log(currentPage)
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const prevPage =
    currentPage - 1 === 1 ? "/projects" : `/projects/page/${currentPage - 1}`
  const nextPage = `/projects/page/${currentPage + 1}`
  return (
    <div className="btn-pagination">
      {isFirst ? (
        <button style={{ marginRight: "1%" }} className="btn-disabled" disabled>
          Prev
        </button>
      ) : (
        <button style={{ marginRight: "1%" }} className="btn">
          <Link to={prevPage}>Prev</Link>
        </button>
      )}
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          key={index}
          to={`${index === 0 ? "/projects" : `/projects/page/${index + 1}`}`}
        >
          <button
            style={{ marginRight: "1%" }}
            className={`btn  ${currentPage === index + 1 ? "active-page" : ""}`}
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
