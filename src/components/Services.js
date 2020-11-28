import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import services from "../constants/services"
const Services = ({ scrollToId }) => {
  return (
    <section className="section bg-grey">
      <Title id="service" title="Tech's I've worked with" />
      <div className="section-center services-center">
        {services.map(({ id, icon, title, text, css, url }) => (
          <Link key={id} to={url}>
            <article className={`service service-${css}`}>
              {icon}
              <h4>{title}</h4>
            </article>
          </Link>
        ))}
        <button
          className="content-animate service-btn"
          onClick={() => scrollToId("jobs")}
        >
          <div style={{ transform: "rotate(180deg)" }}>
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
        </button>
      </div>
    </section>
  )
}

export default Services
