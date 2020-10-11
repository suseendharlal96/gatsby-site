import React from "react"

import { Link } from "gatsby"

import slugify from "../util/slugify"

const tags = () => {
  const tags = [
    "React",
    "Redux",
    "GraphQL",
    "Nodejs",
    "MongoDB",
    "Gatsby",
    "Nextjs",
    "Vuejs",
    "Vuex",
    "Angular",
    "svelte",
    "sapper",
    "firebase",
    "materialise",
    "particlesJs",
    "Contentful CMS",
    "Formspree",
    "Stripe",
    "chartJs",
    "Snipcart",
  ]
  return (
    <div className="tags-container">
      {tags.map((item, index) => {
        return (
          <Link key={index} to={`/projects/${slugify(item)}`}>
            <span>{item}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default tags
