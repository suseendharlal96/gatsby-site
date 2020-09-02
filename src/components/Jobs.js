import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  // const {
  //   data: {
  //     allStrapiJobs: {
  //       nodes: { jobs },
  //     },
  //   },
  // } = useStaticQuery(graphql`
  //   query {
  //     allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
  //       nodes {
  //         strapiId
  //         company
  //         date
  //         position
  //         desc {
  //           id
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)
  // const [value, setValue] = useState(0)
  // const { company, position, data, desc } = jobs[value]
  return (
    <section className="section-jobs">
      <Title title="Experience" />
      {/* <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.strapiId}
              className={`job-btn ${index == value && "active-btn"}`}
              onClick={() => setValue(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link> */}
    </section>
  )
}

export default Jobs
