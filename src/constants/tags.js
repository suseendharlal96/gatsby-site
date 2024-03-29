import React from "react"
import { AiOutlineTag } from "react-icons/ai"
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
    <div
      data-sal="slide-down"
      data-sal-delay="300"
      data-sal-easing="ease"
      className="tags-container"
    >
      <h4 style={{ color: "#00ffb4" }}>
        Click on a tag to view projects based on tag
        <AiOutlineTag />
      </h4>
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
