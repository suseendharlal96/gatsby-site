import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3
              style={{ fontFamily: "cursive", color: "darkcyan" }}
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
