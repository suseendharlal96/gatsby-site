import React from "react"

import { Link } from "gatsby"

import slugify from "../util/slugify"

const tags = () => {
  const tags = [
    "svelte",
    "sapper",
    "firebase",
    "materialise",
    "React",
    "GraphQL",
    "Nodejs",
    "MongoDB",
    "Vuejs",
    "particlesJs",
    "Gatsby",
    "Contentful CMS",
    "Formspree",
    "Stripe",
    "chartJs",
    "Snipcart",
    "Nextjs",
  ]
  return (
    <div className="tags-container">
      {tags
        .sort((a, b) =>
          a.toLowerCase() < b.toLowerCase()
            ? -1
            : a.toLowerCase() > b.toLowerCase()
            ? 1
            : 0
        )
        .map((item, index) => {
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
