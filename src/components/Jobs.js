import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const Jobs = ({ scrollToId }) => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allContentfulJobs(sort: { fields: mydate, order: ASC }) {
        nodes {
          id
          name
          mydate
          designation
          description
          desc {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)
  const [value, setValue] = useState(0)
  const {
    name,
    designation,
    mydate,
    desc: {
      childMarkdownRemark: { html },
    },
  } = data.jobs.nodes[value]
  console.log(html)
  return (
    <section id="jobs" className="content-animate section-jobs">
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
          <div
            className="job-desc"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
      <button
        className="content-animate job-scroll"
        onClick={() => scrollToId("projects")}
      >
        <div style={{ transform: "rotate(180deg)" }}>
          <span className="line-1"></span>
          <span className="line-2"></span>
        </div>
      </button>
      {/* <Link to="/about" className="btn center-btn">
        more info
      </Link> */}
    </section>
  )
}

export default Jobs
