import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "./links"
const Navbar = ({ toggleSidebar }) => {
  const [header, setHeader] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
    return () => {
      const removeFunction = () => {}
      window.removeEventListener("scroll", removeFunction)
    }
  }, [])
  return (
    <nav className={`navbar ${header ? "border" : ""}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3
              style={{ fontFamily: "cursive", color: "#00ffb4" }}
            >{`{{<Suseendhar Lal/>}}`}</h3>
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
