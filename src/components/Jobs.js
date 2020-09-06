import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allContentfulJobs {
        nodes {
          id
          name
          mydate
          designation
          description
        }
      }
    }
  `)
  const [value, setValue] = useState(0)
  console.log(data)
  const { name, designation, mydate, description } = data.jobs.nodes[value]
  return (
    <section className="section-jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {data.jobs.nodes.map((job, index) => (
            <button
              key={job.id}
              className={`job-btn ${index === value && "active-btn"}`}
              onClick={() => setValue(index)}
            >
              {job.name}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{designation}</h3>
          <h4>{name}</h4>
          <h3 className="job-date">{mydate}</h3>
          <div className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{description}</p>
          </div>
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
