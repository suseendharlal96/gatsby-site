import React, { useState, useEffect } from "react"
// import "../css/main.css" check gatsby-browser file in root directory
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [header, setHeader] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setHeader(true) : setHeader(false)
    })
    return () => {
      const removeFunction = () => {}
      window.removeEventListener("scroll", removeFunction)
    }
  }, [])
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="content-animate">{children}</div>
      {header && (
        <button
          className="content-animate scroll-btn"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
        </button>
      )}
      <Footer />
    </>
  )
}

export default Layout
