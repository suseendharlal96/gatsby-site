import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="content-animate footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>Made with 💖 by Suseendhar Lal</h4>
      </div>
    </footer>
  )
}

export default Footer
