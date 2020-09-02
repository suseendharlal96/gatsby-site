import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Things I'm good at" />
      <div className="section-center services-center">
        {services.map(({ id, icon, title, text, css }) => (
          <article key={id} className={`service service-${css}`}>
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
