import React, { useState, useEffect } from "react"
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

export default ({ styleClass }) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if (
      window.location.pathname === link.url ||
      window.location.pathname.includes(link.url + "/")
    ) {
      setActive(true)
    }
  }, [window.location.pathname])
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        return (
          <li className={active ? "active" : ""} key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}
