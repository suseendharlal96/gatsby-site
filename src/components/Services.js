import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

// import OwlCarousel from "react-owl-carousel"
// import "owl.carousel/dist/assets/owl.carousel.css"
// import "owl.carousel/dist/assets/owl.theme.default.css"

import Title from "./Title"
import services from "../constants/services"
const Services = ({ scrollToId }) => {
  // const [width, setWidth] = useState(window.innerWidth)
  // useEffect(() => {
  //   console.log(1)
  //   setWidth(window.innerWidth)
  // }, [new Date().getMilliseconds()])
  return (
    <section className="section bg-grey">
      <Title id="service" title="Tech's I've worked with" />
      <div className="section-center services-center">
        {/* <OwlCarousel
          items={width < 768 ? 2 : 3}
          className="owl-theme"
          margin={8}
        > */}
        {services.map(({ id, icon, title, text, css, url }) => (
          <Link key={id} to={url}>
            <article className={`service service-${css}`}>
              {icon}
              <h4>{title}</h4>
            </article>
          </Link>
        ))}
        {/* </OwlCarousel> */}
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
