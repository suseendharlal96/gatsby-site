import React, { useState, useEffect } from "react"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  // const [animate, setAnimate] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [scrollButton, setScrollButton] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const setNavButton = () => {
      window.addEventListener("scroll", () => {
        window.scrollY > 100 ? setScrollButton(true) : setScrollButton(false)
      })
    }
    setNavButton()
    return () => {
      window.removeEventListener("scroll", setNavButton)
    }
  }, [])
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {/* <TransitionLink> */}
      <div>{children}</div>
      {/* </TransitionLink> */}
      {scrollButton && (
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
