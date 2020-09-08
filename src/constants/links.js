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
    text: "about",
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

const tempLinks = data.map(link => {
  return (
    <li
      className={window.location.pathname === link.url || window.location.pathname.includes(link.url + '/') ? "active" : ""}
      key={link.id}
    >
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
