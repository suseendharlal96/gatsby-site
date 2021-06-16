import React from "react"
// import Typist from "react-typist"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FiPhoneCall } from "react-icons/fi"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <section className="content-animate contact-page">
        <a href="tel:+91-79042-17073" className="social-link">
          <FiPhoneCall className="social-icon"></FiPhoneCall>
        </a>
        <h3 style={{ textAlign: "center", padding: "0px 10px 12px" }}>
          Whether you would like to hire me, further enquire about any of my
          work, or you just want to say hello, I would love to hear from you :)
        </h3>
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/xpzygegl" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email(optional)"
                name="_replyto"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
