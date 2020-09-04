import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Error = () => {
  return (
    <Layout>
      <SEO title="Page not found" />
      <main className="error-page">
        <div className="error-container">
          <h1>The page doesn't exist</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
