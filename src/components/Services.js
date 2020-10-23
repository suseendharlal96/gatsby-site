import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Tech's I've worked with" />
      <div className="section-center services-center">
        {services.map(({ id, icon, title, text, css, url }) => (
          <Link key={id} to={url}>
            <article className={`service service-${css}`}>
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services
