import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title id="service" title="Tech stack" />
      {Object.keys(services).map(ser => (
        <React.Fragment key={ser}>
          <h3 className="section-title stack-name">{ser}</h3>
          <div className="section-center services-center">
            {services[ser].map(({ id, icon, title, css, url }) => (
              <div key={id} className={`service`}>
                <img src={icon} alt={title} style={{ width: "20%" }} />
                <h4>{title}</h4>
              </div>
            ))}
            {/* <button
            className="content-animate service-btn"
            onClick={() => scrollToId("jobs")}
          >
            <div style={{ transform: "rotate(180deg)" }}>
              <span className="line-1"></span>
              <span className="line-2"></span>
            </div>
          </button> */}
          </div>
        </React.Fragment>
      ))}
    </section>
  )
}

export default Services
