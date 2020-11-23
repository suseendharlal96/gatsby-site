import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import Title from "../components/Title"

import Tags from "../constants/tags"
import slugify from "../util/slugify"

const SingleProject = ({ data: { project }, pageContext: { title } }) => {
  const baseUrl = "https://suseendharlal.in"
  let disqusConfig = {
    url: baseUrl + title,
    identifier: project.id,
    title,
  }
  const [backButton, setBackButton] = useState(false)
  useEffect(() => {
    const getLocation = () => {
      if (window.location.href.search(`${slugify(title)}`) !== -1) {
        console.log("back button", window.location.href)
        setBackButton(true)
      } else {
        setBackButton(false)
      }
    }
    getLocation()
    return () => {
      getLocation()
    }
  }, [window.location.href])
  return (
    <Layout>
      <SEO title={title} />
      <Title title={title} />
      <Tags />
      <Project key={project.id} {...project} />
      {backButton && (
        <button
          onClick={() => window.history.back()}
          className="btn center-btn"
        >
          Back
        </button>
      )}
      <div style={{ padding: "0% 5%" }}>
        <CommentCount config={disqusConfig} placeholder={"..."} />
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  )
}

export const singleProjectQuery = graphql`
  query GetSingleproject($title: String!) {
    project: contentfulProjects(title: { eq: $title }) {
      title
      ...projectFragment
    }
  }
`

export default SingleProject
