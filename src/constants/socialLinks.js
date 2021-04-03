import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { GoMarkGithub } from "react-icons/go"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: " https://www.linkedin.com/in/suseendhar-lal-312709155/",
  },
  {
    id: 2,
    icon: <GoMarkGithub className="social-icon"></GoMarkGithub>,
    url: "https://github.com/suseendharlal96",
  },
  {
    id: 3,
    icon: <SiGmail className="social-icon"></SiGmail>,
    url: "mailto:lssuseendharlal@gmail.com/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="__blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
