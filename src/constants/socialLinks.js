import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaMediumM,
  FaTwitterSquare,
} from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { GoMarkGithub } from "react-icons/go"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/suseendhar.lal.9/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: " https://www.linkedin.com/in/suseendhar-lal-312709155/",
  },
  {
    id: 3,
    icon: <FaMediumM className="social-icon"></FaMediumM>,
    url: "https://medium.com/@lssuseendharlal",
  },
  {
    id: 4,
    icon: <GoMarkGithub className="social-icon"></GoMarkGithub>,
    url: "https://github.com/suseendharlal96",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/SuseendharL",
  },
  {
    id: 6,
    icon: <SiGmail className="social-icon"></SiGmail>,
    url: "mailto:lssuseendharlal@gmail.com/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
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
