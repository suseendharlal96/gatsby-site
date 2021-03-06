import React from "react"
import { Link } from "gatsby"
import Typist from "react-typist"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Error = () => {
  return (
    <Layout>
      <SEO title="Page not found" />
      <main className="error-page">
        <div className="error-container">
          <Typist cursor={{ show: false }}>
            <h1
              style={{ color: "#2c5dec" }}
            >{`<Oops..The page doesn't exist/>`}</h1>
          </Typist>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
