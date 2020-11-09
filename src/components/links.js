import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about me",
    url: "/about",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
]

const MyLink = ({ toggle, styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        return (
          <li
            onClick={toggle}
            key={link.id}
          >
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}
export default MyLink
