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
  const [active, setActive] = useState("")
  useEffect(() => {
    if (typeof window !== undefined) {
      console.log(window.location.pathname)
      setActive(window.location.pathname)
    }
    return () => window !== undefined && window.location.pathname
  }, [])
  return (
    <ul className={styleClass ? styleClass : ""}>
      {data.map(link => {
        return (
          <li onClick={toggle} key={link.id}>
            <Link
              className={
                active === link.url || active.search(link.url + "/") !== -1
                  ? "active-link"
                  : ""
              }
              to={link.url}
            >
              {link.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default MyLink
